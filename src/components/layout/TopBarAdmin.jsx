"use client";

import { useState, useContext } from "react";
import { GlobalContext } from "@/app/[locale]/context";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Avatar,
} from "@nextui-org/react";
import { Logo, notification } from "@/assets/svgs";
import { Link } from "@/i18n/routing.js";
import Image from "next/image";
import { itemsAdmin } from "@/lib";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userData } = useContext(GlobalContext);

  const t = useTranslations("topBar");

  // console.log(userData);

  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    const response = await fetch(
      "https://dzartisan-app.onrender.com/app/user-logout/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data.error) {
      console.log(data.error);
      setLoading(false);
      return;
    } else {
      setLoading(false);
      document.cookie = `userData=; path=/;`;
      router.push(`/`);
    }
  };

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className=" bg-[#FFFFFFB2] shadow-sm"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/admin">
            <Image src={Logo} alt="logo" className="" />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Image
            src={notification}
            alt="notification"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </NavbarItem>
        <Avatar
          size="sm"
          src={userData?.pfp}
          width={30}
          height={30}
          className="cursor-pointer min-w-[35px] min-h-[35px]"
          fallback
        />
        <NavbarItem></NavbarItem>
        <NavbarItem>
          <Button
            className="bg-[#1F4690] text-white text-[13px] p-4"
            href="#"
            variant="flat"
            radius="sm"
            onClick={() => handleLogout()}
            isLoading={loading}
          >
            {t("logout")}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {itemsAdmin.map((item, index) => (
          <NavbarMenuItem key={`${item.page}-${index}`}>
            <Link href={item.page}>{item.title}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
