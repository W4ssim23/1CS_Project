"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@nextui-org/react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("submitting credentials");
    //     const form = e.target;
    //     form.reset();
    router.push("/");
  };

  return (
    <div
      data-testid="login-form"
      className="h-full text-center flex flex-col p-10 pr-36 gap-16 min-w-[40%]"
    >
      <h1 className="text-4xl font-semibold">Sign-in</h1>

      <Input
        key="username"
        size="lg"
        variant="bordered"
        label="Username"
        placeholder="Entrez votre username..."
        labelPlacement="outside"
        onChange={(e) => setUserName(e.target.value)}
      ></Input>

      <Input
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
        className=" bg-[#1F4690] text-white"
        size="lg"
        onClick={handleSubmit}
      >
        Sign-in
      </Button>

      <p>
        Vous n’avez pas un compte?{" "}
        <Link href="/register" className="text-blue-500">
          Sign-up
        </Link>
      </p>
    </div>
  );
}
