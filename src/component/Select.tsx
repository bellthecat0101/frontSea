import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Option {
  id: string;
  name: string;
}

type CustomSelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export default function CustomSelect({
  options,
  value,
  onChange,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectedOption = options.find((option) => option.id === value);
  const displayName = selectedOption ? selectedOption.name : "全部";

  const handleSelect = (id: string) => {
    onChange(id); // 傳出 id
    setIsOpen(false);
  };

  return (
    <div className="relative w-[150px] text-left ">
      <div
        className="flex items-center justify-between px-3 py-2 cursor-pointer bg-white border border-primary/40 rounded"
        onClick={toggleDropdown}
      >
        <span>{displayName}</span> {/* 顯示 name */}
        <ChevronDown
          className={clsx(
            "w-4 h-4 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-md">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={clsx(
                "px-3 py-2 cursor-pointer hover:bg-gray-100",
                option.id === value && "bg-gray-100 text-blue-600"
              )}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
