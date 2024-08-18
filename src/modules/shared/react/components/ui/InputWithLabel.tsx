import { Input } from "@root/modules/shared/react/components/ui/Input";
import { Label } from "@root/modules/shared/react/components/ui/Label";
import { LabelInputContainer } from "@root/modules/shared/react/components/ui/LabelInputContainer";
import { CircleAlert } from "lucide-react";
import { useTranslation } from "@root/modules/shared/react/hooks/use-translation.hook";

type InputWithLabelProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  className?: string;
  placeholder?: string;
};

export default function InputWithLabel({
  id,
  label,
  value,
  onChange,
  isValid = true,
  className,
  placeholder,
}: InputWithLabelProps) {
  const classLabelErrors = "text-red-500";
  const classInputErrors = "border-2 border-red-500";

  return (
    <div className={className}>
      <LabelInputContainer>
        <Label htmlFor={id} className={`${!isValid ? classLabelErrors : ""}`}>
          {label}
        </Label>
        <Input
          id={id}
          value={value}
          onChange={onChange}
          className={`bg-white ${!isValid ? classInputErrors : ""}`}
          placeholder={placeholder}
          type="text"
        />
        {!isValid && <ErrorMessage />}
      </LabelInputContainer>
    </div>
  );
}

const ErrorMessage = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex items-center gap-1">
      <CircleAlert size={16} className="text-red-500" />
      <h3 className="text-red-500 text-xs">
        {t("clients.new.validations.invalid")}
      </h3>
    </div>
  );
};
