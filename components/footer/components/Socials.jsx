import { socialMediaLinks } from "@/data/socials";

export default function Socials() {
  return (
    <>
      {socialMediaLinks.map((link) => (
        <a key={link.id} href={link.href} target="_blank">
          <span className="link-effect">
            <span className="effect-1">
              <i className={link.iconClass}></i>
            </span>
            <span className="effect-1">
              <i className={link.iconClass}></i>
            </span>
          </span>
        </a>
      ))}
    </>
  );
}
