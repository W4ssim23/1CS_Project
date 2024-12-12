"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { Logo, notification, ellipse6 } from "@/assets/svgs";
import { Link } from "@/i18n/routing.js";
import Image from "next/image";
import { itemsAdmin } from "@/lib";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Image
          src={ellipse6}
          alt="ellipse"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <NavbarItem></NavbarItem>
        <NavbarItem>
          <Button
            className="bg-[#1F4690] text-white text-[13px] p-4"
            href="#"
            variant="flat"
            radius="sm"
            onClick={() => {
              console.log("Deconnecter");
            }}
          >
            Deconnecter
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
