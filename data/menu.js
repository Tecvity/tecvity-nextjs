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
    linkType: "limitLeft",
    subMenuItems: [
      {
        id: 31,
        title: "Penetration Testing & Vulnerability Assessment",
        link: "/our-portfolio/vapt",
        subMenuItems: [
          { id: 311, label: "Penetration Test of a Cloud-based FinOps Platform", link: "/our-portfolio/vapt/penetration-test-of-a-cloud-based-finops-platform" },
          { id: 312, label: "Penetration Test of Aviation Maintenance Platform", link: "/our-portfolio/vapt/penetration-test-of-aviation-maintenance-platform" },
          { id: 313, label: "Penetration Test of Courier Comparison Platform", link: "/our-portfolio/vapt/penetration-test-of-courier-comparison-platform" },
          { id: 314, label: "Penetration Test of Family Office Collaboration Platform", link: "/our-portfolio/vapt/penetration-test-of-family-office-collaboration-platform" },
          { id: 315, label: "Penetration Test of Financial Intelligence Platform", link: "/our-portfolio/vapt/penetration-test-of-financial-intelligence-platform" },
          { id: 316, label: "Penetration Test of Health Diagnostics Platform", link: "/our-portfolio/vapt/penetration-test-of-health-diagnostics-platform" },
          // { id: 317, label: "Penetration Test of Network Packet Capture Platform", link: "/our-portfolio/vapt/penetration-test-of-network-packet-capture-platform" },
          // { id: 318, label: "Penetration Test of Rembrandt", link: "/our-portfolio/vapt/penetration-test-of-rembrandt" },
          // { id: 319, label: "Penetration Test of Student Loan Refinancing Platform", link: "/our-portfolio/vapt/penetration-test-of-student-loan-refinancing-platform" },
          // { id: 320, label: "VAPT for Agile Planning Platform", link: "/our-portfolio/vapt/vapt-for-agile-planning-platform" },
          // { id: 321, label: "VAPT for AI-powered Dental App", link: "/our-portfolio/vapt/vapt-for-ai-powered-dental-app" },
          // { id: 322, label: "VAPT for AI-powered Financial Advisory Platform", link: "/our-portfolio/vapt/vapt-for-ai-powered-financial-advisory-platform" },
          // { id: 323, label: "VAPT for AI-powered Home Health Care Platform", link: "/our-portfolio/vapt/vapt-for-ai-powered-home-health-care-platform" },
          // { id: 324, label: "VAPT for Mach7t", link: "/our-portfolio/vapt/vapt-for-mach7t" },
          // { id: 325, label: "VAPT for Reflik Inc", link: "/our-portfolio/vapt/vapt-for-reflik-inc" },
        ],
      },
      {
        id: 32,
        title: "Cloud Security",
        link: "/our-portfolio/cloud",
        subMenuItems: [
          { id: 321, label: "Azure Architecture Review for Pathfindr", link: "/our-portfolio/cloud/azure-architecture-review-for-pathfindr" },
          { id: 322, label: "Azure Cloud Hardening for Leansuite Corp", link: "/our-portfolio/cloud/azure-cloud-hardening-for-leansuite-corp" },
          { id: 323, label: "Azure Cloud Hardening of an AI-based Dental App", link: "/our-portfolio/cloud/azure-cloud-hardening-of-an-ai-based-dental-app" },
          { id: 324, label: "Azure Private DNS Zones Configuration of Business Analytics Software Provider", link: "/our-portfolio/cloud/azure-private-dns-zones-configuration-of-business-analytics-software-provider" },
          { id: 325, label: "Securing Cloud Infrastructure of Valorian", link: "/our-portfolio/cloud/securing-cloud-infrastructure-of-valorian" },
        ],
      },
      {
        id: 33,
        title: "Product Design",
        link: "/our-portfolio/pd",
        subMenuItems: [
          { id: 331, label: "Brand Identity Design for Vendem", link: "/our-portfolio/pd/brand-identity-design-for-vendem" },
          { id: 332, label: "Brand Identity Design for Viva Fintech", link: "/our-portfolio/pd/brand-identity-design-for-viva-fintech" },
          { id: 333, label: "Brand Identity Design Nexonic Labs", link: "/our-portfolio/pd/brand-identity-design-nexonic-labs" },
          { id: 334, label: "Landing Page Design for Security Consultants", link: "/our-portfolio/pd/landing-page-design-for-security-consultants" },
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
