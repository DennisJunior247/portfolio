import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  RiMenu5Line as CloseMenu,
  RiCloseLine as OpenMenu,
} from "react-icons/ri";
import { HeaderWrapper, Nav, IconBottons } from "./styles";
const Index = () => {
  const [showMenu, setShowMenu] = useState(false);

  const Links = [
    { href: "/", lable: "ABOUT" },
    { href: "https://dennisjunior247.medium.com/", lable: "BLOG" },
  ];

  const router = useRouter();
  const isActive = (href) => router.pathname === href;

  return (
    <div>
      <IconBottons>
        {!showMenu && (
          <CloseMenu
            className={"icon-closed"}
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
        {showMenu && (
          <OpenMenu
            className={"icon-closed"}
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
      </IconBottons>

      <Nav showMenu={showMenu}>
        <div className={"header-container"}>
          {Links.map(({ href, lable }, idx) => (
            <li
              onClick={() => setShowMenu(!showMenu)}
              key={`${idx}-${lable} *3`}
              className={isActive(href) ? "isActive" : ""}
            >
              <Link href={href}>
                <a> {lable}</a>
              </Link>
            </li>
          ))}
        </div>
      </Nav>
    </div>
  );
};

export default Index;
