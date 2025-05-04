
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

type FreelancerInfoProps = {
  freelancerName: string;
  freelancerEmail: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FreelancerInfoSection = ({ freelancerName, freelancerEmail, onChange }: FreelancerInfoProps) => {
  return (
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
              value={freelancerName}
              onChange={onChange}
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
              value={freelancerEmail}
              onChange={onChange}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FreelancerInfoSection;
