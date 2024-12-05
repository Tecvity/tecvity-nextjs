export const VAPTPortfolio = [
  {
    id: 1,
    imageSrc: "/assets/img/portfolio/portfolio-pavt/pavt_0.png",
    itemsImages: [ "/assets/img/portfolio/portfolio-pavt/pavt_1.png" ], 
    categoryLinks: ["Cybersecurity","Web Application Security"],
    title: "Penetration Test of Mach7t",
    category: "Grey Box Penetration Test",
    client: "Brent Glover",
    date: "Feb, 2024 (Ongoing)",
    type: "vapt",//will be used for specifing route
    para1: "Mach7t is a leading healthcare company in the United States that develops multiple products specializing in Vendor Neutral Archives. They approached Tecvity to get their product suite tested for security vulnerabilities",
    challenge: "For testing the security of a product you should know all the in's and out's of it to be able to properly test it. The challenge was that Mach7t's products was not like just another application but it had a lot of healthcare specific features and functionalities that are not known to normal users",
    finalResult: "Our team worked with Mach7t to understand their suite properly and then performed comprehensive security testing resulting in multiple critical and high severity issues detected and reported. Mach7t works with Tecvity for their continuous security engagements on regular basis and we're proud to have them as our permanent client."
  },
];
export const PDPortfolio = [
  {
    id: 101,
    imageSrc: "/assets/img/portfolio/portfolio-pd/pd_0.png",
    itemsImages:[ "/assets/img/portfolio/portfolio-pd/pd_1.png", "/assets/img/portfolio/portfolio-pd/pd_2.png", "/assets/img/portfolio/portfolio-pd/pd_3.png", "/assets/img/portfolio/portfolio-pd/pd_4.png" ], 
    categoryLinks: ["Web Design","Landing Page Design"],
    title: "Landing Page Design of Security Consultants",
    category: "Product Design",
    type: "pd",//will be used for specifing route
    client: "Security Consultants",
    date: "March, 2024",
    para1: "Security Consultants is a leading provider of professional security solutions, dedicated to safeguarding clients with innovative strategies and expert services.",
    challenge: "The Security Consultants team was unhappy with their outdated landing page, which failed to effectively represent their brand and engage users. They needed a redesign that would better reflect their professional image and improve user interaction.",
    finalResult: "We re-imagined their landing page from scratch, focusing on a modern design that aligned with their brand. By enhancing visual appeal and streamlining navigation, we created a more engaging and effective page that boosted user experience and showcased their expertise."
  },
]
export const portfolioData = [
  ...VAPTPortfolio,
  ...PDPortfolio,
];
export const allPortfolio = [
  ...portfolioData,
];