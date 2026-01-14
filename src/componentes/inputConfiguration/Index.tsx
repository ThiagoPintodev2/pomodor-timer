import { Input } from "@/components/ui/input";
import type { InputProps } from "./InputProps";

function InputConfiguration({ type, icon, className, label, placeholder, iconPassword, onChange, onClick }: InputProps) {
  return (
    <div>
      <label className="text-[1.4rem] font-medium text-[gray]">
        {label}
        <div className={`relative w-full`}>
          <span className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none`}>
            {icon}
          </span>
          <Input type={type} className={className} placeholder={placeholder} onChange={onChange} />
          <button onClick={onClick}  className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer`}>
            {iconPassword}
          </button>
        </div>
      </label>
    </div>
  );
}

export default InputConfiguration;
