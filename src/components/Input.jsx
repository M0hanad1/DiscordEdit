export default function Input({
  id,
  label,
  minLength,
  maxLength,
  type,
  value,
  setValue,
  isTextarea = false,
  required = false,
}) {
  const style =
    "peer w-full bg-transparent rounded p-2 outline-none border-2 border-primary text-opacity-70 focus:text-opacity-100 transition";

  return (
    <div className="relative basis-1/2 text-primary">
      {isTextarea ? (
        <textarea
          className={style}
          id={id}
          value={value}
          onInput={(event) => setValue(event.target.value)}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
        ></textarea>
      ) : (
        <input
          className={style}
          id={id}
          type={type}
          value={value}
          onInput={(event) => setValue(event.target.value)}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
        />
      )}
      <label
        htmlFor={id}
        className={`peer-focus:opacity-100 ${
          value ? "top-0 opacity-100" : isTextarea ? "top-4" : "top-1/2"
        } opacity-70 peer-focus:top-0 bg-gray-50 absolute left-2.5 -translate-y-1/2 transition-all`}
      >
        {label}
      </label>
    </div>
  );
}
