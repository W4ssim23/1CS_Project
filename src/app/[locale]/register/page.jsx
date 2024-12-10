import ConnectButton from "./components/ConnectButton";
import RegisterForm from "./components/RegisterForm";

export default async function Home() {
  return (
    <main className="flex flex-col items-center  justify-evenly min-h-[90vh]">
      <RegisterForm />
      <ConnectButton />
    </main>
  );
}
