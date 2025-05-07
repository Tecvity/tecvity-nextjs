"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ darkMode }) {
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
            className={hasChildren ? "menu-item-has-children" : ""}
          >
            {hasChildren ? (
              <>
                <Link
                  href={item.link || "#"}
                  className={itemActive ? "activeMenu" : ""}
                >
                  <span className={`link-effect ${darkMode && !itemActive ? "light-color" : ""}`}>
                    <span className="effect-1">{item.title}</span>
                    <span className="effect-1">{item.title}</span>
                  </span>
                </Link>
                <ul className={`sub-menu ${item.linkType ? item.linkType : ""}`}>
                  {item.subMenuItems.map((subItem, j) => {
                    const hasSubChildren = !!subItem.subMenuItems;
                    const subItemActive = isActive(subItem.link) || (hasSubChildren && isChildActive(subItem.subMenuItems));
                    return (
                      <li
                        key={j}
                        className={hasSubChildren ? "menu-item-has-children" : ""}
                      >
                        {hasSubChildren ? (
                          <>
                            <Link
                              href={subItem.link || "#"}
                              className={subItemActive ? "activeMenu" : ""}
                            >
                              {subItem.title}
                            </Link>
                            <ul className={`sub-menu ${item.linkType ? item.linkType : ""}`}>
                              {subItem.subMenuItems.map((thirdItem, k) => (
                                <li key={k} className="no-sub-menu">
                                  <Link
                                    scroll={false}
                                    className={isActive(thirdItem.link) ? "activeMenu" : ""}
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
                            className={subItemActive ? "activeMenu" : ""}
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
                <span className={`link-effect ${darkMode && !itemActive ? "light-color" : ""}`}>
                  <span className="effect-1">{item.title}</span>
                  <span className="effect-1">{item.title}</span>
                </span>
              </Link>
            )}
          </li>
        );
      })}
    </>
  );
}
