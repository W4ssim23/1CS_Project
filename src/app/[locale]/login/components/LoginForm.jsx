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
      className="h-full text-center flex flex-col items-center justify-center py-10 md:p-10 lg:pr-36 gap-16 min-w-[47%] md:min-w-[40%]"
    >
      <h1 className="text-4xl font-semibold text-nowrap">Sign-in</h1>

      <Input
        className="max-w-[400px]  md:min-w-[310px]"
        key="username"
        size="lg"
        variant="bordered"
        label="Username"
        placeholder="Entrez votre username..."
        labelPlacement="outside"
        onChange={(e) => setUserName(e.target.value)}
      ></Input>

      <Input
        className="  max-w-[400px] md:min-w-[310px]"
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
        className=" bg-[#1F4690] text-white  max-w-[400px]   md:min-w-[310px]"
        size="lg"
        onClick={handleSubmit}
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
