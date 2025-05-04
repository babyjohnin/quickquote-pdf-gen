
type FormData = {
  [key: string]: string;
};

export const validateProposalForm = (formData: FormData) => {
  const requiredFields = [
    "freelancerName",
    "freelancerEmail",
    "clientName",
    "projectTitle",
    "projectOverview",
    "deliverables",
    "timeline",
    "budget",
  ];
  
  const missingFields = requiredFields.filter(field => !formData[field]);
  
  return {
    isValid: missingFields.length === 0,
    missingFields,
  };
};
