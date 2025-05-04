
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { generatePDF } from "@/utils/pdfGenerator";
import { FileText, Eye, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ProposalTemplate from "@/components/ProposalTemplate";

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
    const requiredFields = [
      "freelancerName", 
      "freelancerEmail", 
      "clientName", 
      "projectTitle", 
      "projectOverview", 
      "deliverables", 
      "timeline", 
      "budget"
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field as keyof FormData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields before generating the proposal.",
        variant: "destructive",
      });
      return false;
    }
    return true;
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
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={handleBackToForm}
            className="mb-4"
          >
            <Eye className="mr-2 h-5 w-5" /> Back to Editor
          </Button>
          
          <Button 
            onClick={handleDownload}
            className="mb-4"
          >
            <Download className="mr-2 h-5 w-5" /> Download PDF
          </Button>
        </div>
        
        <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
          <ProposalTemplate {...formData} />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handlePreview} className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-lg font-semibold mb-4">Your Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="freelancerName">
                Your Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="freelancerName"
                name="freelancerName"
                placeholder="John Doe"
                value={formData.freelancerName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="freelancerEmail">
                Your Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="freelancerEmail"
                name="freelancerEmail"
                type="email"
                placeholder="john@example.com"
                value={formData.freelancerEmail}
                onChange={handleChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-lg font-semibold mb-4">Client & Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="clientName">
                Client Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="clientName"
                name="clientName"
                placeholder="Client Company"
                value={formData.clientName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectTitle">
                Project Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="projectTitle"
                name="projectTitle"
                placeholder="Website Redesign"
                value={formData.projectTitle}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <Label htmlFor="projectOverview">
              Project Overview <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="projectOverview"
              name="projectOverview"
              placeholder="Brief description of the project"
              rows={3}
              value={formData.projectOverview}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4 space-y-2">
            <Label htmlFor="deliverables">
              Deliverables <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="deliverables"
              name="deliverables"
              placeholder="List of project deliverables"
              rows={3}
              value={formData.deliverables}
              onChange={handleChange}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-lg font-semibold mb-4">Timeline & Budget</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="timeline">
                Timeline <span className="text-red-500">*</span>
              </Label>
              <Input
                id="timeline"
                name="timeline"
                placeholder="e.g. 4 weeks"
                value={formData.timeline}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">
                Budget <span className="text-red-500">*</span>
              </Label>
              <Input
                id="budget"
                name="budget"
                placeholder="e.g. $5,000"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="paymentTerms">Payment Terms</Label>
              <Input
                id="paymentTerms"
                name="paymentTerms"
                placeholder="e.g. 50% upfront, 50% upon completion"
                value={formData.paymentTerms}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Additional information or terms"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>

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
