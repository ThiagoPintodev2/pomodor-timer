import type { ReactNode } from "react";
import type { alarmTypes } from "../soundSection/soundSection";

export type DropdownMenuProps = {
  values: string[];
  valueDefault: string;
  img: ReactNode;
  onChange?: (type: alarmTypes) => void;
  alarms?: string[];
};
