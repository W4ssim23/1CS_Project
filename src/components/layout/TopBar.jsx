"use client";

import { useState, useTransition } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { Logo } from "@/assets/svgs";
import { Link } from "@/i18n/routing.js";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const menuItems = ["Home", "Trouve un pro", "A propos", "> Language"];

  const menuItems = [
    {
      title: "Home",
      page: "/",
    },
    {
      title: "Trouve un pro",
      page: "#",
    },
    {
      title: "A propos",
      page: "/about",
    },
    {
      title: "> Language",
      page: "/",
    },
  ];

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className=" bg-[#DDDDDD] shadow-xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={Logo} alt="logo" className="" />
          {/* <p className="font-bold text-inherit">Dz-Artisan</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Trouver un Pro</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">A Propos</Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[15px]"
                variant="light"
              >
                {" > Language"}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Language change"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Français"
              onClick={() => {
                startTransition(() => {
                  router.replace("/fr");
                });
              }}
            >
              Français
            </DropdownItem>
            <DropdownItem
              key="Arabe"
              onClick={() => {
                startTransition(() => {
                  router.replace("/ar");
                });
              }}
            >
              Arabe
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">
            <Button
              className="bg-[#F8F8F8] text-[#333333] p-4 shadow-md"
              href="#"
              variant="flat"
              radius="sm"
            >
              se connecté
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/register">
            <Button
              className="bg-[#1F4690] text-white p-4 shadow-md"
              href="#"
              variant="flat"
              radius="sm"
            >
              s’inscrir
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.page}-${index}`}>
            <Link href={item.page}>{item.title}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
