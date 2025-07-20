import { useTranslation } from "react-i18next";
interface Props {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  register: any;
  error?: string;
}

export default function SelectField({
  name,
  label,
  options,
  register,
  error,
}: Props) {
  const { t } = useTranslation();
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium mb-1">
          <span className="text-red-500 pr-1">*</span>
          {label}
        </label>
      )}
      <select {...register(name)} className="form-input">
        <option value="">{t("form.select")}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
