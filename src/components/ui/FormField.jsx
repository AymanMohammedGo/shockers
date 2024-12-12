import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  isTextarea = false,
  isFile = false,
  rows = 6,
  lable = true,
}) => {
  return (
    <div className="mb-4">
      {lable && (
        <Label htmlFor={id} className="mb-3 text-base text-shockersAEC">
          {label}
        </Label>
      )}
      {isFile ? (
        <div className="mt-4 mb-6">
          <input
            id={id}
            type="file"
            className="hidden"
            onChange={(e) => {
              const fileName =
                e.target.files.length > 0
                  ? e.target.files[0].name
                  : placeholder;
              document.getElementById(`fileLabel-${id}`).innerText = fileName;
              if (onChange) onChange(e);
            }}
          />
          <label
            htmlFor={id}
            className="flex items-center cursor-pointer rounded-lg bg-transparent border-shockersAEC border-[1px] text-base py-2 cancelEffect"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-upload mx-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            {placeholder}
          </label>
          <span id={`fileLabel-${id}`} className="ml-2">
            {placeholder}
          </span>
        </div>
      ) : isTextarea ? (
        <Textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="text-base bg-transparent border-shockersAEC border-[1px] my-2 cancelEffect"
          rows={rows}
        />
      ) : (
        <Input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="py-5 text-base bg-transparent border-shockersAEC border-[1px] my-2 cancelEffect"
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;
