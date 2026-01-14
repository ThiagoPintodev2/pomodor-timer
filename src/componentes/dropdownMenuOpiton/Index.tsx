import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { DropdownMenuProps } from "./dropdownMenuOption";
import { useState } from "react";
import type { alarmTypes } from "../soundSection/soundSection";

function DropdownMenuOption({
  values,
  valueDefault,
  img,
  onChange,
  alarms,
}: DropdownMenuProps) {
  const [position, setPosition] = useState(valueDefault);
  const onValueChange = (value: string) => {
    setPosition(value);
    if (onChange && alarms?.includes(value)) {
      onChange(value as alarmTypes);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex text-[1.5rem] justify-between text-[gray] w-[13rem] h-[3.5rem] bg-gray-200"
        >
          {position}
          <div>{img}</div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 h-[18rem]">
        <DropdownMenuSeparator />
        {values.map((item) => (
          <DropdownMenuRadioGroup
            key={item.length + 1}
            value={position}
            onValueChange={onValueChange}
          >
            <DropdownMenuRadioItem
              className="text-[1.8rem] text-[gray]"
              value={item}
            >
              {item}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default DropdownMenuOption;
