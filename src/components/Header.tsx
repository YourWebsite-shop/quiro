"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import LogoMain from "@/assets/Logo";
import line from "@/assets/buttonLine.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import LineButton from "./LineButton";
import { Menu } from "lucide-react";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  href: string;
  children?: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
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
  }
);
ListItem.displayName = "ListItem";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
];

const Header: React.FC = () => {
  const pathname = usePathname(); // Get the current route
  const [activePath, setActivePath] = useState(""); // Local state for active link
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync activePath with pathname whenever pathname changes
  useEffect(() => {
    setActivePath(pathname || ""); // Ensure it sets even if pathname is empty
  }, [pathname]);

  // Ensure activePath updates on link click
  const handleLinkClick = (href: string) => {
    setActivePath(href);
    setIsMenuOpen(false); // Close the menu on link click
  };

  return (
    <div className="flex items-center justify-between px-4 md:px-10 lg:pl-[142px] lg:pr-[160px] w-full top-0 bg-[#F5F3ED] pt-[33px] z-50">
      <div>
        <Link href={"/"} className="flex items-center gap-[8px] sm:gap-[20px] lg:gap-[10px]">
          <LogoMain />
          <h1 className="text-[#00413E] font-[400] lg:font-[500] text-[16px] leading-[24px] sm:text-[20px] lg:text-[28.2px] sm:leading-[30px] lg:leading-[42.3px] 3xl:text-[40px] 3xl:leading-[60px]">Quiro</h1>
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
          {[
            { href: "/aboutus", label: "About us" },
            { href: "/business", label: "For Businesses" },
            { href: "/resources", label: "Resources" },
            { href: "/customers", label: "For Customers" },
            { href: "/pricing", label: "Pricing" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg ${
                activePath === href ? "text-[#00413E] font-bold" : ""
              }`}
              onClick={() => handleLinkClick(href)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-4">
            <LineButton text="Get Started" />
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <NavigationMenu className="bg-white rounded-full fixed translate-x-1/2 z-20 right-1/2 hidden xl:block">
        <NavigationMenuList className="border border-[#00413E] rounded-full p-2">

          <NavigationMenuItem className={`rounded-full ${pathname === '/aboutus' ? 'text-white bg-[#00413E]' : ''}`}>
            <Link href="/aboutus" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className={`rounded-full ${pathname === '/business' ? 'text-white bg-[#00413E]' : ''}`}>
              For Businesses
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components that you can copy and
                        paste into your apps. Accessible. Customizable. Open
                        Source.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className={`rounded-full ${pathname === '/resources' ? 'text-white bg-[#00413E]' : ''}`}>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className={`rounded-full ${pathname === '/customers' ? 'text-white bg-[#00413E]' : ''}`}>For Customers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={cn(
                navigationMenuTriggerStyle(),
                pathname === '/pricing' ? 'text-white bg-[#00413E]' : ''
              )}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden xl:block">
        <button className="bg-black relative text-[14.73px] text-white pl-[20px] rounded-[5.52px] flex items-center w-fit leading-[22.1px] pr-[25px] py-[14px]">
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

export default Header;
