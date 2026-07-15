import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Input({ label, id, className = "", ...props }: FieldProps) {
  const fieldId = id || props.name;
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink-100" htmlFor={fieldId}>
      {label}
      <input
        id={fieldId}
        className={`min-h-11 rounded-md border border-white/12 bg-ink-900 px-3 py-2 text-ink-100 placeholder:text-ink-500 transition focus:border-red-500 ${className}`}
        {...props}
      />
    </label>
  );
}

export function Textarea({ label, id, className = "", ...props }: TextareaProps) {
  const fieldId = id || props.name;
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink-100" htmlFor={fieldId}>
      {label}
      <textarea
        id={fieldId}
        className={`min-h-32 rounded-md border border-white/12 bg-ink-900 px-3 py-2 text-ink-100 placeholder:text-ink-500 transition focus:border-red-500 ${className}`}
        {...props}
      />
    </label>
  );
}
