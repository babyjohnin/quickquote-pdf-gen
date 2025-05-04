
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

type AdditionalInfoProps = {
  paymentTerms: string;
  notes: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const AdditionalInfoSection = ({ paymentTerms, notes, onChange }: AdditionalInfoProps) => {
  return (
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
              value={paymentTerms}
              onChange={onChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              placeholder="Additional information or terms"
              rows={3}
              value={notes}
              onChange={onChange}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdditionalInfoSection;
