"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Link } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


export  default function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/products" },
    { name: "Cart", link: "/cart" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
     <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
        <Image
  src="/LogoNav.png" // ✅ Public folder path
  alt="Logo"
  width={80}
  height={50}
/>


          <NavItems items={navItems} />
         
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
          <Image
            src="/LogoNav.png" // ✅ Public folder path
            alt="Logo"
            width={60}
            height={50}/>  
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}

          </MobileNavMenu>
        </MobileNav>
      </Navbar>

     
    </div>
  );
}