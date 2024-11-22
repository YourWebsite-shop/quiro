"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "@/assets/Logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import LineButton from "./LineButton";
import { Menu } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

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
        <Link href={"/"}><Image src={Logo} width={300} height={70} alt="logo" className="w-[100px] h-[70px] md:w-[150px] md:h-[100px]" /></Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="xl:hidden z-30 bg-white text-[#00403f] p-2 rounded-[15px]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-20 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 xl:hidden`}>
        <div className="flex flex-col p-8 space-y-4">
          <Link href="/aboutus" onClick={() => setIsMenuOpen(false)} className={`text-lg ${pathname === '/aboutus' ? 'text-[#00413E]' : ''}`}>About us</Link>
          <Link href="/business" onClick={() => setIsMenuOpen(false)} className={`text-lg ${pathname === '/business' ? 'text-[#00413E]' : ''}`}>For Businesses</Link>
          <Link href="/resources" onClick={() => setIsMenuOpen(false)} className={`text-lg ${pathname === '/resources' ? 'text-[#00413E]' : ''}`}>Resources</Link>
          <Link href="/customers" onClick={() => setIsMenuOpen(false)} className={`text-lg ${pathname === '/customers' ? 'text-[#00413E]' : ''}`}>For Customers</Link>
          <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className={`text-lg ${pathname === '/pricing' ? 'text-[#00413E]' : ''}`}>Pricing</Link>
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
        <LineButton text="Get Started" />
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
