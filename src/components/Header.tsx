"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "@/assets/Logo.png";
import line from "@/assets/buttonLine.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import LineButton from "./LineButton";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="flex items-center justify-between px-4 md:px-10 lg:pl-[142px] lg:pr-[160px] w-full top-0 bg-[#F5F3ED] py-4 z-50">
      <div>
        <Link href={"/"}>
          <Image
            src={Logo}
            width={300}
            height={70}
            alt="logo"
            className="w-[100px] h-[70px] md:w-[150px] md:h-[100px]"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="xl:hidden z-30 bg-white text-[#00403f] p-2 rounded-[15px]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-20 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 xl:hidden`}
      >
        <div className="flex flex-col p-8 space-y-4">
          <Link
            href="/aboutus"
            onClick={() => setIsMenuOpen(false)}
            className={`text-lg ${
              pathname === "/aboutus" ? "text-[#00413E]" : ""
            }`}
          >
            About us
          </Link>
          <Link
            href="/business"
            onClick={() => setIsMenuOpen(false)}
            className={`text-lg ${
              pathname === "/business" ? "text-[#00413E]" : ""
            }`}
          >
            For Businesses
          </Link>
          <Link
            href="/resources"
            onClick={() => setIsMenuOpen(false)}
            className={`text-lg ${
              pathname === "/resources" ? "text-[#00413E]" : ""
            }`}
          >
            Resources
          </Link>
          <Link
            href="/customers"
            onClick={() => setIsMenuOpen(false)}
            className={`text-lg ${
              pathname === "/customers" ? "text-[#00413E]" : ""
            }`}
          >
            For Customers
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsMenuOpen(false)}
            className={`text-lg ${
              pathname === "/pricing" ? "text-[#00413E]" : ""
            }`}
          >
            Pricing
          </Link>
          <div className="pt-4">
            <LineButton text="Get Started" />
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <NavigationMenu className="bg-white rounded-full fixed translate-x-1/2 z-20 right-1/2 hidden xl:block">
        <NavigationMenuList className="border border-[#00413E] rounded-full p-2">
          <NavigationMenuItem className="mr-4">
            <Link href="/aboutus" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-[500] text-[15.34px] leading-[23px] py-2 px-4 ${
                  pathname === "/aboutus" ? "text-white bg-[#00413E]" : ""
                }`}
              >
                About us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="mr-4">
            <Link href="/business" legacyBehavior passHref>
              <NavigationMenuLink
                className={`rounded-full font-[500] text-[15.34px] leading-[23px] py-2 px-4 ${
                  pathname === "/business" ? "text-white bg-[#00413E]" : ""
                }`}
              >
                For Businesses
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="mr-4">
            <Link href="/resources" legacyBehavior passHref>
              <NavigationMenuLink
                className={`rounded-full font-[500] text-[15.34px] leading-[23px] py-2 px-4 ${
                  pathname === "/resources" ? "text-white bg-[#00413E]" : ""
                }`}
              >
                Resources
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="mr-4">
            <Link href="/customers" legacyBehavior passHref>
              <NavigationMenuLink
                className={`rounded-full font-[500] text-[15.34px] leading-[23px] py-2 px-4 ${
                  pathname === "/customers" ? "text-white bg-[#00413E]" : ""
                }`}
              >
                For Customers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-[500] text-[15.34px] leading-[23px] py-2 px-4",
                  pathname === "/pricing" ? "text-white bg-[#00413E]" : ""
                )}
              >
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden xl:block">
        <button className="bg-black relative text-[14.73px]  text-white pl-[20px] rounded-[5.52px] flex items-center w-fit  leading-[22.1px] pr-[25px]  py-[14px]">
          Start for Free <FaLongArrowAltRight className="ml-2 text-white" />
          <Image
            src={line}
            width={100}
            height={0}
            alt="line"
            className="absolute w-full -bottom-2 left-0 px-2"
          />
        </button>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
