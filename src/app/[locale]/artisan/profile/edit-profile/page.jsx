import React from "react";

import ProfileForm from "./components/ProfileForm";
import PasswordForm from "./components/PasswordForm";

export default function EditProfile() {
  return (
    <div className="h-full w-full flex flex-col p-8 gap-4">
      <h1 className="text-3xl font-bold">
        Modifier <span className=" text-[#FFA500]">mon profil</span>
      </h1>
      <ProfileForm />
      <PasswordForm />
    </div>
  );
}
