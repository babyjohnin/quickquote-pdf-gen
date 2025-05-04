
import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";
import ProposalTemplate from "@/components/ProposalTemplate";

type ProposalPreviewProps = {
  formData: {
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
  onBackToForm: () => void;
  onDownload: () => void;
};

const ProposalPreview = ({ formData, onBackToForm, onDownload }: ProposalPreviewProps) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={onBackToForm} className="mb-4">
          <Eye className="mr-2 h-5 w-5" /> Back to Editor
        </Button>

        <Button onClick={onDownload} className="mb-4">
          <Download className="mr-2 h-5 w-5" /> Download PDF
        </Button>
      </div>

      <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
        <ProposalTemplate {...formData} />
      </div>
    </div>
  );
};

export default ProposalPreview;
