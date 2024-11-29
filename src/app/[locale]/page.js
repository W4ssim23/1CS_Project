import { Button } from "@nextui-org/react";
import { Link } from "@/i18n/routing";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Project Home Page.</h1>
      <p className="text-lg text-center">
        you can see this hatta kan makch authentifié
      </p>
      <Link href="/login">
        <p className="text-blue-500">Login</p>
      </Link>
      <div>
        <h1>This is a translation test :</h1>
        <h1>{t("title")}</h1>
        <Link href="/about">{t("about")}</Link>
      </div>
      {/* tseting if next ui works : */}
      <Button auto>test</Button>
    </main>
  );
}
