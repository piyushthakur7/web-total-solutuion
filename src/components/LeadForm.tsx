"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import {
  EMAIL,
  LEAD_CAPTURE_KEY,
  LEAD_CAPTURE_URL,
  RESPONSE_EXPECTATION,
  WEBSITE_PACKAGES,
  WHATSAPP_URL,
  formatUsd,
  getPackage,
} from "../siteContent";
import {
  BUDGET_RANGES,
  EMPTY_LEAD,
  LeadErrors,
  LeadFields,
  PROJECT_TYPES,
  buildLeadPayload,
  mailtoFallback,
  parseLeadPrefill,
  validateLead,
} from "../lead";

/**
 * `mock` and `mock-fail` never contact the backend: they exist so the form can
 * be reviewed in a preview without sending an enquiry to the live inbox.
 * Development defaults to `mock`; production builds send unless told otherwise.
 */
const CAPTURE_MODE =
  process.env.NEXT_PUBLIC_LEAD_CAPTURE_MODE ??
  (process.env.NODE_ENV === "production" ? "live" : "mock");

interface LeadFormProps {
  /** Pre-selects the enquiry type, e.g. from a service page. */
  defaultProjectType?: string;
  /** Pre-selects a package by slug. */
  defaultPackage?: string;
  defaultDetails?: string;
  /** Identifies which page produced the lead, included in the message. */
  source?: string;
  /** `compact` drops the surrounding card for embedding in a section. */
  variant?: "card" | "compact";
  submitLabel?: string;
}

type Status = "idle" | "sending" | "sent" | "failed";

/** Shared enquiry form used by the contact page and every service page. */
export default function LeadForm({
  defaultProjectType = "",
  defaultPackage = "",
  defaultDetails = "",
  source,
  variant = "card",
  submitLabel = "Send enquiry",
}: LeadFormProps) {
  const id = useId();
  const [fields, setFields] = useState<LeadFields>({
    ...EMPTY_LEAD,
    projectType: defaultProjectType,
    packageSlug: defaultPackage,
    details: defaultDetails,
  });
  // Honeypot — real visitors never see or fill this field.
  const [trap, setTrap] = useState("");
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failure, setFailure] = useState("");
  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
  };
  const result = useRef<HTMLDivElement>(null);

  // Context passed by the linking page, e.g. /contact?package=startup-growth-site.
  useEffect(() => {
    const prefill = parseLeadPrefill(window.location.search);
    if (Object.keys(prefill).length > 0) {
      setFields((current) => ({ ...current, ...prefill }));
    }
  }, []);

  useEffect(() => {
    if (status === "sent" || status === "failed") result.current?.focus();
  }, [status]);

  const set =
    (key: keyof LeadFields) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      const value = event.target.value;
      setFields((current) => ({ ...current, [key]: value }));
      if (key in errors) setErrors((current) => ({ ...current, [key]: undefined }));
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;

    const found = validateLead(fields);
    setErrors(found);
    const firstInvalid = (["name", "email", "phone"] as const).find(
      (key) => found[key],
    );
    if (firstInvalid) {
      refs[firstInvalid].current?.focus();
      return;
    }

    setFailure("");
    setStatus("sending");

    // Bots fill the hidden field: accept silently without contacting the backend.
    if (trap) {
      setStatus("sent");
      return;
    }

    if (CAPTURE_MODE !== "live") {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (CAPTURE_MODE === "mock-fail") {
        setFailure("Test mode: this is the simulated delivery failure.");
        setStatus("failed");
      } else {
        setStatus("sent");
      }
      return;
    }

    try {
      const response = await fetch(LEAD_CAPTURE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          buildLeadPayload(fields, {
            key: LEAD_CAPTURE_KEY,
            source,
            pageUrl: window.location.href,
          }),
        ),
      });
      const body = await response.json().catch(() => null);
      if (response.ok && body?.ok) {
        setStatus("sent");
      } else {
        setFailure(body?.error || "The enquiry could not be delivered.");
        setStatus("failed");
      }
    } catch {
      setFailure("The enquiry could not be delivered. Check your connection.");
      setStatus("failed");
    }
  };

  // 16px text keeps iOS from zooming the page when a field is focused.
  const fieldClass =
    "w-full min-h-13 rounded-xl border border-ink/20 bg-white px-4 py-3 text-base text-ink placeholder:text-graphite/70 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 aria-[invalid=true]:border-red-600";
  const labelClass = "block text-sm font-semibold text-ink";
  const optional = <span className="font-normal text-graphite"> (optional)</span>;
  const errorText = (key: keyof LeadErrors) =>
    errors[key] && (
      <p id={`${id}-${key}-error`} className="text-sm font-medium text-red-700">
        {errors[key]}
      </p>
    );
  const describedBy = (key: keyof LeadErrors, hint?: string) =>
    [errors[key] ? `${id}-${key}-error` : null, hint ?? null]
      .filter(Boolean)
      .join(" ") || undefined;

  const selectedPackage = getPackage(fields.packageSlug);
  const wrapperClass =
    variant === "card"
      ? "rounded-[24px] border border-ink/15 bg-white p-6 sm:p-9"
      : "";

  if (status === "sent") {
    return (
      <div
        ref={result}
        tabIndex={-1}
        role="status"
        className={`${wrapperClass} outline-none`}
      >
        <h3 className="font-display text-3xl text-ink">Enquiry sent</h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-graphite">
          Thanks{fields.name.trim() ? `, ${fields.name.trim().split(" ")[0]}` : ""}.{" "}
          {RESPONSE_EXPECTATION} The reply goes to{" "}
          <span className="font-semibold text-ink">{fields.email.trim()}</span>
          {fields.phone.trim() ? ", or to WhatsApp on the number you left" : ""}.
        </p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-graphite">
          Next we agree the scope with you and send a written quote. There is no
          obligation to go ahead.
        </p>
        {CAPTURE_MODE !== "live" && (
          <p className="mt-5 rounded-lg bg-marker/50 px-4 py-3 text-sm text-ink">
            Test mode: nothing was sent.
          </p>
        )}
        <button
          type="button"
          onClick={() => {
            setFields({ ...EMPTY_LEAD });
            setStatus("idle");
          }}
          className="mt-7 min-h-11 cursor-pointer text-sm font-semibold text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        {CAPTURE_MODE !== "live" && (
          <p className="rounded-lg bg-marker/50 px-4 py-3 text-sm text-ink">
            Test mode: this form does not send enquiries.
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor={`${id}-name`} className={labelClass}>
              Your name
            </label>
            <input
              ref={refs.name}
              id={`${id}-name`}
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describedBy("name")}
              value={fields.name}
              onChange={set("name")}
              className={fieldClass}
            />
            {errorText("name")}
          </div>
          <div className="space-y-2">
            <label htmlFor={`${id}-email`} className={labelClass}>
              Work email
            </label>
            <input
              ref={refs.email}
              id={`${id}-email`}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy("email")}
              value={fields.email}
              onChange={set("email")}
              placeholder="you@company.com"
              className={fieldClass}
            />
            {errorText("email")}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor={`${id}-phone`} className={labelClass}>
              Phone or WhatsApp{optional}
            </label>
            <input
              ref={refs.phone}
              id={`${id}-phone`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={describedBy("phone")}
              value={fields.phone}
              onChange={set("phone")}
              placeholder="With country code"
              className={fieldClass}
            />
            {errorText("phone")}
          </div>
          <div className="space-y-2">
            <label htmlFor={`${id}-company`} className={labelClass}>
              Company or current website{optional}
            </label>
            <input
              id={`${id}-company`}
              name="company"
              type="text"
              autoComplete="organization"
              value={fields.company}
              onChange={set("company")}
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor={`${id}-type`} className={labelClass}>
              What do you need?{optional}
            </label>
            <select
              id={`${id}-type`}
              name="projectType"
              value={fields.projectType}
              onChange={set("projectType")}
              className={fieldClass}
            >
              <option value="">Select a project type</option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor={`${id}-budget`} className={labelClass}>
              Budget range{optional}
            </label>
            <select
              id={`${id}-budget`}
              name="budget"
              value={fields.budget}
              onChange={set("budget")}
              className={fieldClass}
            >
              <option value="">Select a range</option>
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor={`${id}-package`} className={labelClass}>
            Package you are considering{optional}
          </label>
          <select
            id={`${id}-package`}
            name="package"
            value={fields.packageSlug}
            onChange={set("packageSlug")}
            aria-describedby={selectedPackage ? `${id}-package-note` : undefined}
            className={fieldClass}
          >
            <option value="">No package in mind</option>
            {WEBSITE_PACKAGES.map((pkg) => (
              <option key={pkg.slug} value={pkg.slug}>
                {pkg.name} (from {formatUsd(pkg.from)} USD)
              </option>
            ))}
          </select>
          {selectedPackage && (
            <p id={`${id}-package-note`} className="text-sm text-graphite">
              {selectedPackage.scope} The quote follows a scope review.
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor={`${id}-details`} className={labelClass}>
            About the project{optional}
          </label>
          <textarea
            id={`${id}-details`}
            name="details"
            rows={5}
            value={fields.details}
            onChange={set("details")}
            placeholder="What does the product or business do, who is the website for, and what should a visitor do next?"
            className={`${fieldClass} resize-y`}
          />
        </div>

        {/* Honeypot: real visitors never see this field. Leave it in the form. */}
        <input
          name="company_website"
          type="text"
          value={trap}
          onChange={(event) => setTrap(event.target.value)}
          style={{ position: "absolute", left: "-9999px" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {status === "failed" && (
          <div
            ref={result}
            tabIndex={-1}
            role="alert"
            className="rounded-xl border border-red-300 bg-red-50 px-5 py-4 text-[15px] text-red-900 outline-none"
          >
            <p className="font-semibold">Your enquiry was not sent.</p>
            <p className="mt-1">
              {failure} What you typed is still here. Try again, or send the
              same details another way:
            </p>
            <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              <a
                href={mailtoFallback(EMAIL, fields, source)}
                className="underline underline-offset-4"
              >
                Send by email
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Message on WhatsApp
              </a>
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          aria-disabled={status === "sending"}
          className="btn btn-ink w-full disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending"
            ? "Sending…"
            : status === "failed"
              ? "Try again"
              : submitLabel}
        </button>

        <p className="text-sm leading-relaxed text-graphite">
          {RESPONSE_EXPECTATION} Your details are used only to answer this
          enquiry.
        </p>
      </form>
    </div>
  );
}
