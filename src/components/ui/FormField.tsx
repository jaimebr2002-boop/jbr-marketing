import React from 'react';

// Solid bg-surface, not a glass tint: an input needs to stay fully legible,
// and a translucent background only reads as "glass" when something worth
// seeing sits behind it through the blur — flat form sections don't give it
// that, so here the premium cue is generous rounding + a fast, soft lime
// focus glow instead of transparency.
const fieldBase =
  'w-full rounded-control border bg-surface text-ink placeholder:text-ink-tertiary px-4 py-3.5 font-sans text-[15px] transition-all duration-150 focus:outline-none';

function fieldBorder(hasError?: boolean) {
  if (hasError) return 'border-brand-leak focus:shadow-[0_0_0_4px_var(--leak-soft)]';
  return 'border-brand-border hover:border-ink-tertiary focus:border-brand-accent focus:shadow-[0_0_0_4px_var(--accent-glow)]';
}

interface FieldWrapperOwnProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
}
interface FieldWrapperProps extends FieldWrapperOwnProps {
  children: React.ReactNode;
}

function FieldWrapper({ label, htmlFor, required, error, children }: FieldWrapperProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block font-sans text-[13px] font-semibold text-ink mb-2">
        {label} {required && <span className="text-brand-leak">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 font-sans text-[12.5px] text-brand-leak">
          {error}
        </p>
      )}
    </div>
  );
}

interface TextFieldProps extends FieldWrapperOwnProps {
  type?: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
}

export function TextField({ type = 'text', name, value, onChange, placeholder, autoComplete, ...wrap }: TextFieldProps) {
  return (
    <FieldWrapper {...wrap}>
      <input
        id={wrap.htmlFor}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={wrap.required}
        aria-invalid={!!wrap.error}
        aria-describedby={wrap.error ? `${wrap.htmlFor}-error` : undefined}
        className={`${fieldBase} ${fieldBorder(!!wrap.error)}`}
      />
    </FieldWrapper>
  );
}

interface TextAreaFieldProps extends FieldWrapperOwnProps {
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}

export function TextAreaField({ name, value, onChange, placeholder, rows = 4, ...wrap }: TextAreaFieldProps) {
  return (
    <FieldWrapper {...wrap}>
      <textarea
        id={wrap.htmlFor}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`${fieldBase} ${fieldBorder(!!wrap.error)} resize-none`}
      />
    </FieldWrapper>
  );
}

interface SelectFieldProps extends FieldWrapperOwnProps {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}

export function SelectField({ name, value, onChange, options, placeholder, ...wrap }: SelectFieldProps) {
  return (
    <FieldWrapper {...wrap}>
      <div className="relative">
        <select
          id={wrap.htmlFor}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={wrap.required}
          aria-invalid={!!wrap.error}
          className={`${fieldBase} ${fieldBorder(!!wrap.error)} appearance-none pr-10`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink-tertiary"
        >
          <path d="M5 7.5 10 12.5 15 7.5" />
        </svg>
      </div>
    </FieldWrapper>
  );
}

interface CheckboxFieldProps {
  name: string;
  htmlFor: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  children: React.ReactNode;
}

export function CheckboxField({ name, htmlFor, checked, onChange, error, children }: CheckboxFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="flex items-start gap-3 cursor-pointer">
        <input
          id={htmlFor}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={!!error}
          className="mt-0.5 w-[18px] h-[18px] shrink-0 rounded border-brand-border text-brand-accent focus:ring-2 focus:ring-brand-accent/50 accent-[var(--accent)]"
        />
        <span className="font-sans text-[13px] text-ink-secondary leading-snug">{children}</span>
      </label>
      {error && (
        <p role="alert" className="mt-1.5 ml-[30px] font-sans text-[12.5px] text-brand-leak">
          {error}
        </p>
      )}
    </div>
  );
}
