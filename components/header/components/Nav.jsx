"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

// not used
export default function Nav({darkMode}) {
  const pathname = usePathname();

  const isChildActive = (links) => {
    return links.some((link) => {
      const trimmedPath = pathname.split("?")[0];
      return (
        link.link === trimmedPath || trimmedPath.startsWith(link.link + "/") // Matches any nested route
      );
    });
  };

  return (
    <>
      {menuItems.map((elm, i) => {
        const trimmedPath = pathname.split("?")[0];
        const isActive =
          elm.link === trimmedPath ||
          trimmedPath.startsWith(elm.link + "/") ||
          (elm.subMenuItems && isChildActive(elm.subMenuItems));

        return (
          <li
            key={i}// Assign a unique key for each submenu item.
            className={elm.subMenuItems ? "menu-item-has-children" : ""}
          >
            {elm.subMenuItems ? (
              <>
                <a
                  href={elm.link || "#"}
                  className={isActive ? "activeMenu" : ""}
                >
                  <span className={`link-effect ${darkMode ? "light-color": "" }`}>
                    <span className="effect-1">{elm.title}</span>
                    <span className="effect-1">{elm.title}</span>
                  </span>
                </a>

                <ul className="sub-menu">
                  {elm.subMenuItems.map((elm2, i2) => {
                    const isSubActive =
                      elm2.link === trimmedPath ||
                      trimmedPath.startsWith(elm2.link + "/");

                    return (
                      <li
                        key={i2}
                        className={
                          elm2.subMenuItems ? "menu-item-has-children" : ""
                        }
                      >
                        {elm2.subMenuItems ? (
                          <>
                            <a
                              href="#"
                              className={
                                isChildActive(elm2.subMenuItems)
                                  ? "activeMenu"
                                  : ""
                              }
                            >
                              {elm2.title}
                            </a>
                            <ul className="sub-menu">
                              {elm2.subMenuItems.map((elm3, i3) => (
                                <li key={i3}>
                                  <Link
                                    // scroll={false}
                                    className={
                                      elm3.link === trimmedPath ||
                                      trimmedPath.startsWith(elm3.link + "/")
                                        ? "activeMenu"
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
                          // For menu items without submenus.
                            scroll={false}
                            className={isSubActive ? "activeMenu" : ""}
                            href={elm2.link}
                          >
                            {elm2.label}
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
                className={isActive ? "activeMenu" : ""}
                href={elm.link}
              >
                <span className={`link-effect ${darkMode && !isActive ? "light-color": "" }`}>
                  <span className="effect-1">{elm.title}</span>
                  <span className="effect-1">{elm.title}</span>
                </span>
              </Link>
            )}
          </li>
        );
      })}
    </>
  );
}
