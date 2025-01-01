"use client";

import { Link } from "@/i18n/routing";
import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { Input, Button } from "@nextui-org/react";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName) {
      setErrorName("Please enter your username");
      return;
    }
    if (!password) {
      setErrorEmail("Please enter your password");
      return;
    }
    setErrorName("");
    setErrorEmail("");
    setLoading(true);
    try {
      const response = await fetch(
        "https://dzartisan-app.onrender.com/app/user-login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email_or_username: userName, password }),
        }
      );
      const data = await response.json();
      if (data.error) {
        setError(data.message);
        setLoading(false);
        return;
      } else {
        setLoading(false);
        // console.log(data);
        document.cookie = `userData=${JSON.stringify(data.data)}; path=/;`;
        console.log(data, data.data.role);
        router.push(`/${data.data.role}`);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div
      data-testid="login-form"
      className="h-full text-center flex flex-col items-center justify-center py-10 md:p-10 lg:pr-36 gap-16 min-w-[47%] md:min-w-[40%]"
    >
      <h1 className="text-4xl font-semibold text-nowrap">Sign-in</h1>

      <Input
        className=" max-w-[360px]  md:max-w-[500px]  md:min-w-[310px]"
        key="username"
        size="lg"
        variant="bordered"
        label="Username"
        placeholder="Entrez votre username..."
        labelPlacement="outside"
        onChange={(e) => setUserName(e.target.value)}
      ></Input>

      <Input
        className="   max-w-[360px]  md:max-w-[500px] md:min-w-[310px]"
        key="password"
        size="lg"
        type="password"
        variant="bordered"
        label="Password"
        placeholder="Entrez votre password..."
        labelPlacement="outside"
        onChange={(e) => setPassword(e.target.value)}
      ></Input>

      <Button
        className=" bg-[#1F4690] text-white   max-w-[360px]  md:max-w-[500px]   md:min-w-[310px]"
        size="lg"
        onClick={handleSubmit}
        isLoading={loading}
      >
        Sign-in
      </Button>

      <p className="sm:text-nowrap">
        Vous n’avez pas un compte?{" "}
        <Link href="/register" className="text-blue-500">
          Sign-up
        </Link>
      </p>
    </div>
  );
}
