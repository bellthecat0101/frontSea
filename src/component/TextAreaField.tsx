interface Props {
  name: string;
  label?: string;
  rows?: number;
  placeholder?: string;
  register: any;
  error?: string;
}

export default function TextAreaField({
  name,
  label,
  rows = 3,
  placeholder,
  register,
  error,
}: Props) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <textarea
        rows={rows}
        placeholder={placeholder}
        {...register(name)}
        className="form-input"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
