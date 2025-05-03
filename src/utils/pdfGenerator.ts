
import html2pdf from "html2pdf.js";
import React from "react";
import ReactDOMServer from "react-dom/server";
import ProposalTemplate from "@/components/ProposalTemplate";

type ProposalData = {
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

export const generatePDF = async (data: ProposalData) => {
  // Generate a filename based on the client name and project title
  const sanitizedClientName = data.clientName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  const sanitizedProjectName = data.projectTitle.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  const filename = `proposal_${sanitizedClientName}_${sanitizedProjectName}.pdf`;

  // Render the React component to HTML
  const proposalHTML = ReactDOMServer.renderToString(
    React.createElement(ProposalTemplate, data)
  );

  // Create a temporary div to hold the rendered HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = proposalHTML;
  tempDiv.style.position = "absolute";
  tempDiv.style.left = "-9999px";
  document.body.appendChild(tempDiv);

  try {
    // Configure html2pdf options
    const options = {
      margin: [10, 10, 10, 10],
      filename: filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Generate PDF
    await html2pdf().from(tempDiv).set(options).save();
  } finally {
    // Clean up the temporary div
    document.body.removeChild(tempDiv);
  }
};
