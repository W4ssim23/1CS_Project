import { useTranslations } from "next-intl";

import { TopBar, Footer } from "@/components/layout";
import WelcomeBlock from "./components/WelcomeBlock";
import SearchBlock from "./components/SearchBlock";
import ServiceBlock from "./components/ServicesBlock";
import ExpertsBlock from "./components/ExpertsBlock";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <TopBar />
      <main className="flex flex-col min-h-screen h-fit w-full">
        <WelcomeBlock />
        <SearchBlock />
        <ServiceBlock />
        <ExpertsBlock />
        <Footer />
      </main>
    </>
  );
}
