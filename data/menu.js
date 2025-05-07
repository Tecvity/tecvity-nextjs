//pricing page is commented out and NotFoundPage is imported instead
export const menuItems = [
  { id: 1, title: "Home", isActive: true, link: "/" },
  // {
  //   id: 1,
  //   title: "HOME",
  //   isActive: true,
  //   subMenuItems: [
  //     { id: 11, label: "Digital Agency", link: "/" },
  //     { id: 12, label: "Creative Agency", link: "/home-2" },
  //     { id: 13, label: "Design Studio", link: "/home-3" },
  //     { id: 14, label: "Digital Marketing", link: "/home-4" },
  //     { id: 15, label: "Modern Agency", link: "/home-5" },
  //     { id: 16, label: "Creative Studio", link: "/home-6" },
  //     { id: 17, label: "Startup Agency", link: "/home-7" },
  //     { id: 18, label: "Personal Portfolio", link: "/home-8" },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "PORTFOLIO",
  //   subMenuItems: [
  //     { id: 31, label: "Portfolio Masonary", link: "/project" },
  //     { id: 32, label: "Portfolio Pinterest", link: "/project-2" },
  //     { id: 33, label: "Portfolio Gallery", link: "/project-3" },
  //     { id: 34, label: "Portfolio Full Width", link: "/project-4" },
  //     { id: 35, label: "Portfolio Slider", link: "/project-5" },
  //     { id: 36, label: "Portfolio Interactive", link: "/project-6" },
  //     { id: 37, label: "Portfolio Details", link: "/our-portfolio/2" },
  //   ],
  // },
  { id: 4, title: "Our Services", 
    subMenuItems: [
      {
        id: 41,
        title: "Web & Mobile Development",
        link: "/our-services/web-mobile-development",
        subMenuItems: [
          { id: 411, label: "Web & Mobile Application Development", link: "/our-services/web-mobile-development/web-mobile-app-development" },
          { id: 412, label: "DevSecOps", link: "/our-services/web-mobile-development/devsecops" },
        ],
      },
      {
        id: 42,
        title: "Information Security & Compliance",
        link: "/our-services/information-security-compliance",
        subMenuItems: [
          { id: 421, label: "Penetration Testing & Vulnerability Assessment", link: "/our-services/information-security-compliance/penetration-testing-vulnerability-assessment" },
          { id: 422, label: "Cloud Security Audits", link: "/our-services/information-security-compliance/cloud-security-audits" }
        ],
      },        
      {
        id: 43,
        title: "Branding & Logo Design",
        link: "/our-services/branding-logo-design",
        subMenuItems: [
          { id: 431, label: "UI/UX Design", link: "/our-services/branding-logo-design/ui-ux-design" },
          { id: 432, label: "Brand Identity Design", link: "/our-services/branding-logo-design/brand-identity-design" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    link: "/our-portfolio",
    linkType: "limitLeft",//use 'shiftLeft' to avoid overflow
    subMenuItems: [
      {
        id: 31,
        title: "Cybersecurity",
        link: "#",
        subMenuItems: [
          { id: 311, label: "Penetration Testing", link: "/our-portfolio/penetrationTest" },
          { id: 312, label: "Cloud Security", link: "/our-portfolio/cloudSecurity" },
          { id: 313, label: "Blue Teaming", link: "/our-portfolio/blueTeaming" },
        ],
      },
      {
        id: 32,
        title: "Graphic Design",
        // link: "/our-portfolio/gd",
        link: "#",
        subMenuItems: [
          { id: 321, label: "Logo Design", link: "/our-portfolio/logoDesign" },
          { id: 322, label: "Brand Identity", link: "/our-portfolio/brandIdentity" },
        ],
      },
      {
        id: 33,
        title: "Developement",
        // link: "/our-portfolio/dev",
        link: "#",
        subMenuItems: [
          { id: 331, label: "Web Dev", link: "/our-portfolio/webDev" },
          { id: 332, label: "Mobile Dev", link: "/our-portfolio/mobileDev" },
        ],
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "BLOG",
  //   subMenuItems: [
  //     { id: 41, label: "Blog Standard", link: "/blog" },
  //     { id: 42, label: "Blog 2 Column", link: "/blog-2" },
  //     { id: 43, label: "Blog Details", link: "/blog/2" },
  //   ],
  // },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 2,
    title: "More",
    subMenuItems: [
      { id: 21, label: "About Us", link: "/about-us" },
      { id: 22, label: "Blog", link: "/blog" },
      // {
      //   id: 22,
      //   title: "Service Page",

      //   subMenuItems: [
      //     { id: 221, label: "Service Version 1", link: "/service" },
      //     { id: 222, label: "Service Version 2", link: "/service-2" },
      //     { id: 223, label: "Service Version 3", link: "/service-3" },
      //     {
      //       id: 224,
      //       label: "Service Details Page",
      //       link: "/service-details/2",
      //     },
      //   ],
      // },
      { id: 23, label: "Our Founders", link: "/founders" },
      // { id: 24, label: "Team Details", link: "/team-details/2" },
      // { id: 25, label: "Pricing", link: "/pricing" },
      // { id: 26, label: "FAQ", link: "/faq" },
      // { id: 27, label: "Error Page", link: "/error" },
    ],
  },
];
