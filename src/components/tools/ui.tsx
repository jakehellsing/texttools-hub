"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function TextArea({
  id,
  label,
  value,
  onChange,
  placeholder,
  readOnly = false,
  rows = 10,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  rows?: number;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label
          htmlFor={id}
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
        {hint ? <span className="text-xs text-slate-500">{hint}</span> : null}
      </div>
      <textarea
        id={id}
        value={value}
        readOnly={readOnly}
        rows={rows}
        placeholder={placeholder}
        onChange={
          onChange ? (event) => onChange(event.target.value) : undefined
        }
        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-2 focus:outline-indigo-600 read-only:bg-slate-50"
      />
    </div>
  );
}

export interface StatItem {
  label: string;
  value: string | number;
  hint?: string;
}

export function StatGrid({ stats }: { stats: StatItem[] }) {
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm"
        >
          <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
            {stat.label}
          </dt>
          <dd className="mt-1 text-2xl font-semibold text-slate-900 tabular-nums">
            {stat.value}
          </dd>
          {stat.hint ? (
            <dd className="mt-0.5 text-xs text-slate-500">{stat.hint}</dd>
          ) : null}
        </div>
      ))}
    </dl>
  );
}

const buttonBase =
  "inline-flex items-center justify-center rounded-md px-3.5 py-2 text-sm font-medium shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-50";

export function Button({
  variant = "secondary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-500"
      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50";
  return (
    <button
      type="button"
      className={`${buttonBase} ${styles} ${className}`}
      {...props}
    />
  );
}

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const copy = useCallback(async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older browsers / non-secure contexts.
      const el = document.createElement("textarea");
      el.value = text;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <Button onClick={copy} disabled={!text} aria-live="polite">
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
}
