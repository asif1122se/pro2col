"use client";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaDiscord, FaRegBell } from "react-icons/fa";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  { name: "Dashboard", href: "/" },
  { name: "All Clients", href: "/" },
  { name: "Chat", href: "/" },
  { name: "Group", href: "/" },
  { name: "Resources", href: "/" },
  { name: "Setting", href: "/" },
];

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex w-full justify-between items-center px-8 py-10 max-w-[1440px]">
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
      <div className=" flex md:block logo">
        <Image alt="Logo" src={"/img/Logo.svg"} width={100} height={24} />
      </div>
      <nav className="hidden md:flex items-center gap-5 text-white">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-1 hover:underline`}
          >
            <p className="gap-1 items-center text-[16px]">{link.name}</p>
            {link.name === "All Clients" && (
              <div className="badge w-8 h-5 rounded-full p-1 font-semibold flex items-center justify-center text-sm text-center bg-primary">
                25
              </div>
            )}
          </Link>
        ))}
      </nav>
      <div className="flex items-center justify-end">
        <div className="p-1 bg-primary rounded-full flex items-center justify-center w-6 h-6">
          <Image src={"/img/notification-bell.png"} width={15} height={15} />
        </div>
        <div className="profile rounded-full w-14 h-14 flex items-center justify-center">
          <Image src={"/img/Avatars.png"} width={30} height={30} />
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed top-0 left-0 w-64 bg-white h-full z-50 p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-black focus:outline-none"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-black">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1 hover:underline`}
                  onClick={() => setIsOpen(false)}
                >
                  <p className="gap-1 items-center text-[16px]">{link.name}</p>
                  {link.name === "All Clients" && (
                    <div className="badge w-8 h-5 rounded-full p-1 font-semibold flex items-center justify-center text-sm text-center bg-primary">
                      25
                    </div>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
