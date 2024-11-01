import { links } from "@/data/footerlink";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <Link scroll={false} href={link.href}>
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );
}
