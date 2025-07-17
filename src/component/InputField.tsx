interface Props {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  register: any;
  error?: string;
}

export default function InputField({
  name,
  type = "text",
  label,
  placeholder,
  register,
  error,
}: Props) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="form-input"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
