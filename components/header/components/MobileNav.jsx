"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileNav() {
  const [activeMenu, setActiveMenu] = useState([-1, false]);
  const pathname = usePathname();

  const isChildActive = (links) => {
    return links.some((link) => {
      const trimmedPath = pathname.split("?")[0];
      return (
        link.link === trimmedPath || trimmedPath.startsWith(link.link + "/")
      );
    });
  };

  return (
    <ul className="mobile-menu">
      {menuItems.map((elm, i) => {
        const trimmedPath = pathname.split("?")[0];
        const isActive =
          elm.link === trimmedPath ||
          trimmedPath.startsWith(elm.link + "/") ||
          (elm.subMenuItems && isChildActive(elm.subMenuItems));

        return (
          <li
            key={i}
            className={`${
              elm.subMenuItems
                ? "menu-item-has-children submenu-item-has-children"
                : ""
            } ${activeMenu[0] === i ? "active-class" : ""}`}
          >
            <div className="menu-item-wrapper">
              <Link
                href={elm.link || "#"}
                className={isActive ? "activeMenu" : ""}
              >
                {elm.title}
              </Link>
              {elm.subMenuItems && (
                <button
                  className="dropdown-toggle-mobile"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveMenu((prev) =>
                      prev[0] === i ? [-1, false] : [i, false]
                    );
                  }}
                >
                  <span className="mean-expand-class"></span>
                </button>
              )}
            </div>

            {elm.subMenuItems && (
              <ul
                className="sub-menu submenu-class menu-open overflow-hidden"
                style={
                  activeMenu[0] === i
                    ? { maxHeight: "500px" }
                    : { maxHeight: "0px" }
                }
              >
                {elm.subMenuItems.map((elm2, i2) => {
                  const isSubActive =
                    elm2.link === trimmedPath ||
                    trimmedPath.startsWith(elm2.link + "/") ||
                    (elm2.subMenuItems && isChildActive(elm2.subMenuItems));

                  return (
                    <li
                      key={i2}
                      className={`${
                        elm2.subMenuItems
                          ? "menu-item-has-children submenu-item-has-children"
                          : ""
                      } ${activeMenu[1] ? "active-class" : ""}`}
                    >
                      {elm2.subMenuItems ? (
                        <>
                          <Link
                            href={elm2.link || "#"}
                            className={isSubActive ? "activeMenu2" : ""}
                          >
                            {elm2.title}
                          </Link>
                          <ul
                            className="sub-menu submenu-class overflow-hidden"
                            style={
                              activeMenu[1]
                                ? { maxHeight: "500px" }
                                : { maxHeight: "0px" }
                            }
                          >
                            {elm2.subMenuItems.map((elm3, i3) => (
                              <li key={i3}>
                                <Link
                                  scroll={false}
                                  className={
                                    elm3.link === trimmedPath ||
                                    trimmedPath.startsWith(elm3.link + "/")
                                      ? "activeMenu2"
                                      : ""
                                  }
                                  href={elm3.link}
                                >
                                  {elm3.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          scroll={false}
                          className={isSubActive ? "activeMenu2" : ""}
                          href={elm2.link}
                        >
                          {elm2.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
