
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { generatePDF } from "@/utils/pdfGenerator";
import { Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { validateProposalForm } from "@/utils/formValidation";

// Import the new components
import FreelancerInfoSection from "./proposal/FreelancerInfoSection";
import ProjectDetailsSection from "./proposal/ProjectDetailsSection";
import TimelineBudgetSection from "./proposal/TimelineBudgetSection";
import AdditionalInfoSection from "./proposal/AdditionalInfoSection";
import ProposalPreview from "./proposal/ProposalPreview";

type FormData = {
  freelancerName: string;
  freelancerEmail: string;
  clientName: string;
  projectTitle: string;
  projectOverview: string;
  deliverables: string;
  timeline: string;
  budget: string;
  paymentTerms: string;
  notes: string;
};

const ProposalForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    freelancerName: "",
    freelancerEmail: "",
    clientName: "",
    projectTitle: "",
    projectOverview: "",
    deliverables: "",
    timeline: "",
    budget: "",
    paymentTerms: "",
    notes: "",
  });
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { isValid, missingFields } = validateProposalForm(formData);
    
    if (!isValid) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields before generating the proposal.",
        variant: "destructive",
      });
    }
    
    return isValid;
  };

  const handlePreview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsPreviewMode(true);
    
    toast({
      title: "Proposal Preview Ready",
      description: "You can now review your proposal before downloading.",
    });
  };

  const handleDownload = async () => {
    try {
      toast({
        title: "Generating PDF",
        description: "Your proposal is being created for download...",
      });
      
      await generatePDF(formData);
      
      toast({
        title: "Success!",
        description: "Your proposal has been generated and downloaded.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
      console.error("PDF generation failed:", error);
    }
  };

  const handleBackToForm = () => {
    setIsPreviewMode(false);
  };

  if (isPreviewMode) {
    return (
      <ProposalPreview
        formData={formData}
        onBackToForm={handleBackToForm}
        onDownload={handleDownload}
      />
    );
  }

  return (
    <form onSubmit={handlePreview} className="space-y-8">
      <FreelancerInfoSection
        freelancerName={formData.freelancerName}
        freelancerEmail={formData.freelancerEmail}
        onChange={handleChange}
      />
      
      <ProjectDetailsSection
        clientName={formData.clientName}
        projectTitle={formData.projectTitle}
        projectOverview={formData.projectOverview}
        deliverables={formData.deliverables}
        onChange={handleChange}
      />
      
      <TimelineBudgetSection
        timeline={formData.timeline}
        budget={formData.budget}
        onChange={handleChange}
      />
      
      <AdditionalInfoSection
        paymentTerms={formData.paymentTerms}
        notes={formData.notes}
        onChange={handleChange}
      />

      <Button 
        type="submit" 
        size="lg" 
        className="w-full text-lg py-6 font-semibold"
      >
        <Eye className="mr-2 h-5 w-5" /> Preview Proposal
      </Button>
    </form>
  );
};

export default ProposalForm;
