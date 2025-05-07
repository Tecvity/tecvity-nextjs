"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function MobileNav() {
  const [activeMenu, setActiveMenu] = useState([-1, -1]);
  const pathname = usePathname();
  
  const isActive = (link) => {
    if (!link) return false;
    const trimmedPath = pathname.split("?")[0];
    return link === trimmedPath || trimmedPath.startsWith(`${link}/`);
  };

  const isChildActive = (links) => {
    return links.some(link => isActive(link.link));
  };
  return (
    <>
      {menuItems.map((item, i) => {
        const hasChildren = !!item.subMenuItems;
        const itemActive = isActive(item.link) || (hasChildren && isChildActive(item.subMenuItems));
        return (
          <li
            key={i}
            className={`
              ${hasChildren ? "menu-item-has-children submenu-item-has-children" : ""}
              ${activeMenu[0] === i ? "active-class" : ""}
            `}
          >
            {hasChildren ? (
              <>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveMenu((prev) => prev[0] === i ? [-1, -1] : [i, -1]);
                  }}
                  className={itemActive ? "activeMenu" : ""}
                >
                  {item.title}
                  <span className="mean-expand-class"></span>
                </a>
                <ul
                  className="sub-menu submenu-class menu-open overflow-hidden"
                  style={{
                    maxHeight: activeMenu[0] === i ? "500px" : "0px",
                    transition: "max-height 0.3s ease-in-out"
                  }}
                >
                  {item.subMenuItems.map((subItem, j) => {
                    const hasSubChildren = !!subItem.subMenuItems;
                    const subItemActive = isActive(subItem.link) || (hasSubChildren && isChildActive(subItem.subMenuItems));
                    return (
                      <li
                        key={j}
                        className={`
                          ${hasSubChildren ? "menu-item-has-children submenu-item-has-children" : ""}
                          ${activeMenu[1] === j ? "active-class" : ""}
                        `}
                      >
                        {hasSubChildren ? (
                          <>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveMenu((prev) => [prev[0], prev[1] === j ? -1 : j]);
                              }}
                              className={subItemActive ? "activeMenu2" : ""}
                            >
                              {subItem.title}
                              <span className="mean-expand-class"></span>
                            </a>
                            <ul
                              className="sub-menu submenu-class overflow-hidden"
                              style={{
                                maxHeight: activeMenu[1] === j ? "500px" : "0px",
                                transition: "max-height 0.3s ease-in-out"
                              }}
                            >
                              {subItem.subMenuItems.map((thirdItem, k) => (
                                <li key={k}>
                                  <Link
                                    scroll={false}
                                    className={isActive(thirdItem.link) ? "activeMenu2" : ""}
                                    href={thirdItem.link}
                                  >
                                    {thirdItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link
                            scroll={false}
                            className={subItemActive ? "activeMenu2" : ""}
                            href={subItem.link}
                          >
                            {subItem.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <Link
                scroll={false}
                className={itemActive ? "activeMenu" : ""}
                href={item.link}
              >
                {item.title}
              </Link>
            )}
          </li>
        );
      })}
    </>
  );
}
