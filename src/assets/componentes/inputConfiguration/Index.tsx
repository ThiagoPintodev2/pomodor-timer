import { Input } from "@/components/ui/input";
import type { InputProps } from "./InputProps";

function InputConfiguration({ className, label, placeholder, onChange}: InputProps) {
  return (
    <div>
      <label className="text-[1.4rem] font-medium text-[gray]">
        {label}
        <div>
          <Input className={className} placeholder={placeholder} onChange={onChange} />
        </div>
      </label>
    </div>
  );
}

export default InputConfiguration;
