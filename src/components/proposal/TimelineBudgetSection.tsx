
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

type TimelineBudgetProps = {
  timeline: string;
  budget: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const TimelineBudgetSection = ({ timeline, budget, onChange }: TimelineBudgetProps) => {
  return (
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
              value={timeline}
              onChange={onChange}
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
              value={budget}
              onChange={onChange}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineBudgetSection;
