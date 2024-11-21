"use client";

// import { signOut } from "next-auth/react";

const Dashboard = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-8 text-3xl">Dashboard</h1>
      <p className="text-xl">just testing the auth.</p>
      <h2 className="text-xl">you are authenticated</h2>
      <p
        className="mt-8 text-red-600 text-xl cursor-pointer "
        // onClick={() => signOut()}
      >
        logout
      </p>
    </div>
  );
};

export default Dashboard;
