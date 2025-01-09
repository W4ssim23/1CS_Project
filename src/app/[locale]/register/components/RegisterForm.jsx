import DialogueBox from "./DialogueBox";

import { useTranslations } from "next-intl";

export default function RegisterForm() {
  const t = useTranslations("/register.RegisterForm");
  return (
    <main className="flex flex-col items-center gap-8">
      <h1 className="text-center font-[600] text-3xl">{t("create")}</h1>
      <DialogueBox />
    </main>
  );
}
