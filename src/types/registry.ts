import { month, text } from "./common";

export type entryReg = {
  date: Date;
  name: text;
  description: text;
  amount: number;

  relatedEvent?: {
    type: "expense" | "income";
    id: number;
  };
};

export type monthlyReg = {
  month: month;
  data: entryReg[];
};
export type yearlyReg = {
  year: number;
  data: {
    [m in month]?: monthlyReg["data"];
  };
};
export type multiYearReg = {
  [year: number]: yearlyReg["data"];
};
