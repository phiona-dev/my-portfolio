export function InputField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = true,
  textarea = false,
  rows = 4,
}) {
  const baseStyles =
    'w-full rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3.5 text-sm text-stone-900 placeholder-stone-400 outline-none transition-all duration-300 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100';

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-stone-600">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseStyles} resize-none`}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={baseStyles}
        />
      )}
    </div>
  );
}