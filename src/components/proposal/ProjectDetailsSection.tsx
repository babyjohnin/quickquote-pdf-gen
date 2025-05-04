
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

type ProjectDetailsProps = {
  clientName: string;
  projectTitle: string;
  projectOverview: string;
  deliverables: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const ProjectDetailsSection = ({
  clientName,
  projectTitle,
  projectOverview,
  deliverables,
  onChange,
}: ProjectDetailsProps) => {
  return (
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
              value={clientName}
              onChange={onChange}
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
              value={projectTitle}
              onChange={onChange}
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
            value={projectOverview}
            onChange={onChange}
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
            value={deliverables}
            onChange={onChange}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDetailsSection;
