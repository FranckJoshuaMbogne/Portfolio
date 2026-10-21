import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useI18n } from "@/i18n";
import { domains } from "@/data/services";
import { profile } from "@/data/profile";
import { submitConsultation, whatsappSummary } from "@/lib/leads";
import { Honeypot, SelectField, TextAreaField, TextField, FieldShell, inputBase } from "./Field";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const slots = ["09:00 – 11:00", "11:00 – 13:00", "14:00 – 16:00", "16:00 – 18:00", "18:00 – 20:00"];
const spend = {
  en: ["Not running ads yet", "Under $1,000 / month", "$1,000 – $5,000 / month", "$5,000 – $20,000 / month", "Above $20,000 / month"],
  fr: ["Pas encore de publicité", "Moins de 1 000 $ / mois", "1 000 – 5 000 $ / mois", "5 000 – 20 000 $ / mois", "Plus de 20 000 $ / mois"],
};
const channels = {
  en: ["Google Meet", "WhatsApp call", "Phone call"],
  fr: ["Google Meet", "Appel WhatsApp", "Appel téléphonique"],
};

function makeSchema(e: ReturnType<typeof useI18n>["ui"]["form"]["errors"]) {
  return z.object({
    name: z.string().trim().min(2, e.name).max(100),
    email: z.string().trim().email(e.email).max(160),
    phone: z.string().trim().max(30).optional().refine((v) => !v || /^[+\d][\d\s()-]{6,}$/.test(v), e.phone),
    company: z.string().trim().max(120).optional(),
    website: z.string().trim().max(200).optional().refine((v) => !v || /^(https?:\/\/)?[\w-]+(\.[\w-]+)+.*$/i.test(v), e.website),
    interests: z.array(z.string()).min(1, e.interests).max(10),
    engagement: z.string().max(80).optional(),
    adSpend: z.string().max(60).optional(),
    message: z.string().trim().min(10, e.message).max(2000),
    date: z.string().min(1, e.date).max(20),
    time: z.string().min(1, e.time).max(40),
    timezone: z.string().max(60).optional(),
    channel: z.string().max(40).optional(),
    hp: z.string().max(0).optional(),
  });
}
type Values = z.infer<ReturnType<typeof makeSchema>>;

const stepFields: FieldPath<Values>[][] = [
  ["name", "email", "phone", "company", "website"],
  ["interests", "engagement", "adSpend", "message"],
  ["date", "time", "timezone", "channel"],
];

export function ConsultationForm() {
  const { ui, t, lang, lp } = useI18n();
  const f = ui.form;
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [step, setStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const schema = useMemo(() => makeSchema(f.errors), [f.errors]);

  const offerFromUrl = profile.offers.find((o) => o.index === params.get("offer"));
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { interests: [], engagement: offerFromUrl ? t(offerFromUrl.name) : "", channel: channels[lang][0], time: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    try {
      setValue("timezone", Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch {
      /* ignore */
    }
  }, [setValue]);

  const interests = watch("interests");
  const time = watch("time");
  const engagement = watch("engagement");
  const minDate = new Date(Date.now() + 86400000).toISOString().slice(0, 10);

  async function next() {
    const ok = await trigger(stepFields[step]);
    if (ok) setStep((s) => Math.min(2, s + 1));
  }

  async function onSubmit(v: Values) {
    setError(null);
    if (v.hp) return;
    const { hp: _hp, ...rest } = v;
    const payload = { ...rest, lang };
    try {
      const result = await submitConsultation(payload);
      if (result === "whatsapp") window.open(whatsappSummary(payload), "_blank", "noopener");
      navigate(lp("/thank-you"));
    } catch {
      setError(f.errorGeneric);
    }
  }

  const steps = [f.step1, f.step2, f.step3];

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="relative">
      <Honeypot {...register("hp")} />
      <ol className="mb-10 grid grid-cols-3 gap-2" aria-label="Progress">
        {steps.map((s, i) => (
          <li key={s} aria-current={i === step ? "step" : undefined}>
            <span className={cn("block h-1.5 rounded-full transition-colors duration-500", i <= step ? "bg-gold" : "bg-ink/10")} />
            <span className={cn("mt-2 flex items-center gap-1.5 text-[0.7rem] font-semibold sm:text-xs", i === step ? "text-ink" : "text-ink-soft")}>
              {i < step ? <Check size={13} className="text-gold-dark" aria-hidden="true" /> : <span className="tabular-nums">0{i + 1}</span>}
              {s}
            </span>
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
          {step === 0 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField id="name" label={f.name} autoComplete="name" error={errors.name?.message} {...register("name")} className="sm:col-span-2" />
              <TextField id="email" type="email" label={f.email} autoComplete="email" error={errors.email?.message} {...register("email")} />
              <TextField id="phone" type="tel" label={f.phone} autoComplete="tel" optional error={errors.phone?.message} {...register("phone")} />
              <TextField id="company" label={f.company} autoComplete="organization" optional error={errors.company?.message} {...register("company")} />
              <TextField id="website" label={f.website} autoComplete="url" optional placeholder="yourbrand.com" error={errors.website?.message} {...register("website")} />
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-7">
              <fieldset>
                <legend className="mb-3 text-sm font-medium text-ink">{f.interests}</legend>
                <div className="flex flex-wrap gap-2">
                  {domains.map((d) => {
                    const label = t(d.name);
                    const on = interests.includes(label);
                    return (
                      <button
                        key={d.slug}
                        type="button"
                        aria-pressed={on}
                        onClick={() => setValue("interests", on ? interests.filter((x) => x !== label) : [...interests, label], { shouldValidate: true })}
                        className={cn("rounded-full border px-4 py-2.5 text-sm font-medium transition-colors", on ? "border-forest bg-forest text-ivory" : "border-ink/20 text-ink hover:border-ink")}
                      >
                        {on && <Check size={14} className="-ml-1 mr-1.5 inline" aria-hidden="true" />}
                        {label}
                      </button>
                    );
                  })}
                </div>
                {errors.interests && <p role="alert" className="mt-2 text-sm text-[#9B2C2C]">{errors.interests.message}</p>}
              </fieldset>
              <fieldset>
                <legend className="mb-3 text-sm font-medium text-ink">
                  {f.engagement} <span className="font-normal text-ink-soft">· {f.optional}</span>
                </legend>
                <div className="grid gap-2 sm:grid-cols-3">
                  {profile.offers.map((o) => {
                    const label = t(o.name);
                    const on = engagement === label;
                    return (
                      <button
                        key={o.index}
                        type="button"
                        aria-pressed={on}
                        onClick={() => setValue("engagement", on ? "" : label)}
                        className={cn("rounded-xl border p-4 text-left text-sm transition-colors", on ? "border-forest bg-forest text-ivory" : "border-ink/15 hover:border-ink/40")}
                      >
                        <span className={cn("block text-xs font-semibold", on ? "text-gold-light" : "text-gold-dark")}>{o.index}</span>
                        <span className="mt-1 block font-semibold">{label}</span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
              <SelectField id="adSpend" label={f.adSpend} optional options={spend[lang]} placeholder={f.select} {...register("adSpend")} />
              <TextAreaField id="message" label={f.message} hint={f.messageHint} error={errors.message?.message} {...register("message")} />
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-6">
              <TextField id="date" type="date" min={minDate} label={f.date} error={errors.date?.message} {...register("date")} />
              <FieldShell id="time" label={f.time} error={errors.time?.message}>
                <div id="time" role="radiogroup" aria-label={f.time} className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {slots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      role="radio"
                      aria-checked={time === s}
                      onClick={() => setValue("time", s, { shouldValidate: true })}
                      className={cn("h-12 rounded-xl border text-sm font-semibold tabular-nums transition-colors", time === s ? "border-forest bg-forest text-ivory" : "border-ink/15 text-ink hover:border-ink/40")}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </FieldShell>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField id="timezone" label={f.timezone} {...register("timezone")} />
                <FieldShell id="channel" label={f.channel}>
                  <select id="channel" className={cn(inputBase, "h-12")} {...register("channel")}>
                    {channels[lang].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </FieldShell>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {error && <p role="alert" className="mt-6 rounded-xl bg-[#9B2C2C]/10 px-4 py-3 text-sm text-[#9B2C2C]">{error}</p>}

      <div className="mt-10 flex flex-col-reverse gap-3 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        {step > 0 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="min-h-[48px] rounded-full px-5 text-sm font-semibold text-ink hover:bg-ink/[0.05]">
            ← {f.prev}
          </button>
        ) : (
          <p className="text-xs text-ink-soft">{f.privacy}</p>
        )}
        {step < 2 ? (
          <Button type="button" onClick={next} size="lg">{f.next}</Button>
        ) : (
          <Button type="submit" size="lg" disabled={isSubmitting}>{isSubmitting ? f.sending : f.submit}</Button>
        )}
      </div>
    </form>
  );
}
