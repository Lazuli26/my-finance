import { text } from "./common";
import { entryReg } from "./registry";

type scheduledEvent = {
  id: number;
  interval:
    | Date[]
    | {
        type: "monthly" | "biweekly" | "weekly";
        startDate: Date;
        endDate: Date | null;
      };
  entries: entryReg[];
  amountPerEvent: number;
  name: text;
  description: text;
};
export type scheduledExpense = {} & scheduledEvent;

export type scheduledIncome = {} & scheduledEvent;
