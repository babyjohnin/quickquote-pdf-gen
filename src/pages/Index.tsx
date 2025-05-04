
import React from "react";
import ProposalForm from "@/components/ProposalForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">QuickQuote</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Generate professional PDF proposals instantly. Fill out the form, preview your proposal,
            and download it as a PDF.
          </p>
        </header>
        
        <main className="max-w-3xl mx-auto pb-16">
          <ProposalForm />
        </main>
        
        <footer className="text-center text-gray-500 text-sm mt-8">
          <p>© {new Date().getFullYear()} QuickQuote • Create professional proposals in seconds</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
