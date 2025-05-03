
import React from "react";

type ProposalTemplateProps = {
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

const ProposalTemplate = ({
  freelancerName,
  freelancerEmail,
  clientName,
  projectTitle,
  projectOverview,
  deliverables,
  timeline,
  budget,
  paymentTerms,
  notes,
}: ProposalTemplateProps) => {
  // Format the date for the proposal
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div id="proposal-template" className="bg-white p-8" style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">{projectTitle}</h1>
        <p className="text-gray-600">Project Proposal | {formattedDate}</p>
      </div>

      {/* Freelancer & Client Info */}
      <div className="flex flex-wrap justify-between mb-10">
        <div className="w-full md:w-1/2 mb-5 md:mb-0 md:pr-4">
          <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-3">From</h2>
          <p className="font-bold">{freelancerName}</p>
          <p>{freelancerEmail}</p>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-3">For</h2>
          <p className="font-bold">{clientName}</p>
        </div>
      </div>

      {/* Project Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-3">Project Overview</h2>
        <p className="whitespace-pre-line">{projectOverview}</p>
      </div>

      {/* Deliverables */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-3">Deliverables</h2>
        <p className="whitespace-pre-line">{deliverables}</p>
      </div>

      {/* Timeline and Budget */}
      <div className="flex flex-wrap justify-between mb-8">
        <div className="w-full md:w-1/2 mb-5 md:mb-0 md:pr-4">
          <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-3">Timeline</h2>
          <p>{timeline}</p>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-3">Budget</h2>
          <p className="font-bold">{budget}</p>
        </div>
      </div>

      {/* Payment Terms */}
      {paymentTerms && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-3">Payment Terms</h2>
          <p>{paymentTerms}</p>
        </div>
      )}

      {/* Additional Notes */}
      {notes && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-3">Additional Notes</h2>
          <p className="whitespace-pre-line">{notes}</p>
        </div>
      )}

      {/* Footer */}
      <div className="text-center mt-10 pt-5 border-t border-gray-200">
        <p className="text-gray-500">Thank you for the opportunity to work on this project.</p>
      </div>
    </div>
  );
};

export default ProposalTemplate;
