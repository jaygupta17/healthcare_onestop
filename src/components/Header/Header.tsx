"use client";
import React, { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    className="font-bold text-base transition-colors hover:text-foreground/80 text-foreground/60"
    href={href}
  >
    {children}
  </Link>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="font-extrabold">
          <Image src="/logo.png" alt="logo" height={100} width={100} />
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/complaint">Complaint</NavLink>
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-4">
          <nav className="flex flex-col gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/complaint">Complaint</NavLink>
          </nav>
          <div className="mt-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;