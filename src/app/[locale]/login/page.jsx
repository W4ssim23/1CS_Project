import LoginForm from "./components/LoginForm";
import SidePic from "./components/SidePic";

export default async function Register() {
  // const session = await getServerSession(authOptions);

  // if (session) redirect("/dashboard");

  return (
    <div className="h-full w-full min-w-screen flex">
      <SidePic />
      <LoginForm />
    </div>
  );
}
