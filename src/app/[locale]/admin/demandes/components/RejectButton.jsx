import React from "react";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function RejectButton({ setAppearence, id }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}refuser-artisan/${id}/`,
        {
          cache: "no-cache",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (!response.ok) {
        const data = await response.json();
        console.log(data.message);
      }
      const data = await response.json();
      if (data.error) {
        console.log(data.message);
      } else {
        // console.log(data);
        setAppearence(false);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      className=" bg-red-500 text-white px-4 py-2"
      radius="lg"
      onPress={handleClick}
      isLoading={loading}
    >
      Refuser
    </Button>
  );
}
