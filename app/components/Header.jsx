"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaDiscord, FaRegBell } from "react-icons/fa";
import Link from "next/link";
const links = [
  { name: "Dashboard", href: "/" },
  {
    name: "All Clients",
    href: "/",
  },
  { name: "Chat", href: "/" },
  { name: "Group", href: "/" },
  { name: "Resources", href: "/" },
  { name: "Setting", href: "/" },
];
function Header() {
  const pathname = usePathname();
  return (
    <header className="sm:flex w-full justify-between items-center py-10 max-w-[1440px] ">
      <div className="logo">
        <Image alt="" src={"/img/Logo.svg"} width={100} height={24} />
      </div>
      <nav className="flex items-center gap-5 text-white ">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-1 hover:underline  `}
            >
              <p className="gap-1 items-center text-[16px]">
                {link.name}
              </p>
              {link.name === "All Clients" && (
                <div className="badge w-8 h-5 rounded-full p-1 font-semibold flex items-center justify-center text-sm text-center bg-primary">25</div>
              )}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center justify-end">
        <div className="p-1 bg-primary rounded-full flex items-center justify-center w-6 h-6">
          <Image src={"/img/notification-bell.png"} width={15} height={15} />
        </div>
        <div className="profile rounded-full w-14 h-14 flex items-center justify-center">
          <Image src={"/img/Avatars.png"} width={30} height={30} />
        </div>
      </div>
    </header>
  );
}

export default Header;
