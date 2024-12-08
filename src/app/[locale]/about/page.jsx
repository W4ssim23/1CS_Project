import { TopBar } from "@/components/layout";
import ArtizanBlock from "./components/ArtizanBlock";
import MissionBlock from "./components/MissionBlock";
import VisionBlock from "./components/VisionBlock";

export default async function About() {
  return (
    <>
      <TopBar />
      <main className="flex flex-col min-h-screen h-fit w-full">
        <ArtizanBlock />
        <MissionBlock />
        <VisionBlock />
      </main>
    </>
  );
}
