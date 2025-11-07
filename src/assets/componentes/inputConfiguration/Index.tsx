import { Input } from "@/components/ui/input";
import type { InputProps } from "./InputProps";

function InputConfiguration({ className, label, placeholder }: InputProps) {
  return (
    <div>
      <label className="text-[1.4rem] font-medium text-[gray]">
        {label}
        <div>
          <Input className={className} placeholder={placeholder} />
        </div>
      </label>
    </div>
  );
}

export default InputConfiguration;
