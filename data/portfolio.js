export const VAPTPortfolio = [
  {
    id: 1,
    imageSrc: "/assets/img/portfolio/portfolio-vapt/vapt_0.png",
    itemsImages: [ "/assets/img/portfolio/portfolio-vapt/vapt_1.png" ], 
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
    title: "Landing page design for Security Consultants",
    category: "Product Design",
    type: "pd",//will be used for specifing route
    client: "Security Consultants",
    date: "March, 2024",
    para1: "Security Consultants is a leading provider of professional security solutions, dedicated to safeguarding clients with innovative strategies and expert services.",
    challenge: "The Security Consultants team was unhappy with their outdated landing page, which failed to effectively represent their brand and engage users. They needed a redesign that would better reflect their professional image and improve user interaction.",
    finalResult: "We re-imagined their landing page from scratch, focusing on a modern design that aligned with their brand. By enhancing visual appeal and streamlining navigation, we created a more engaging and effective page that boosted user experience and showcased their expertise."
   },

  {
    id: 102,
    imageSrc: "/assets/img/portfolio/portfolio-pd/viva102_1.png",
    itemsImages:[ "/assets/img/portfolio/portfolio-pd/Main Frame.png", "/assets/img/portfolio/portfolio-pd/Main Frame-1.png", "/assets/img/portfolio/portfolio-pd/Background.png", "/assets/img/portfolio/portfolio-pd/Container.png", "/assets/img/portfolio/portfolio-pd/Frame.png", "/assets/img/portfolio/portfolio-pd/Frame-1.png", "/assets/img/portfolio/portfolio-pd/Frame-2.png", "/assets/img/portfolio/portfolio-pd/Frame-3_2.png", "/assets/img/portfolio/portfolio-pd/Frame-4.png"],
    categoryLinks: ["Brand Identity Design"],
    title: "Brand identity design for Viva Fintech",
    category: "Brand Identity",
    type: "pd",//will be used for specifing route
    client: "Viva Fintech",
    date: "November, 2024",
    para1: "Viva is an AI-powered fintech company redefining the way people interact with financial services. With a focus on innovation and simplicity, Viva seamlessly combines cutting-edge technology with user-centric design, aiming to empower individuals and businesses to navigate their financial journeys effortlessly.",
    challenge: "Crafting a brand identity for Viva demanded a delicate balance between modernity, sophistication, and approachability. The goal was to create a visual system that conveyed the company’s innovative edge while maintaining a sense of trust and simplicity. Additionally, the identity needed to stand out in a crowded fintech market while remaining versatile across various platforms and mediums.",
    finalResult: "We developed a bold and memorable brand identity system centered around a clean wordmark logo. The logo’s geometric design reflects precision and clarity, embodying Viva’s commitment to simplicity and innovation. A dynamic gradient of orange, contrasted with ample white space, injects energy and modernity into the visual identity, making it both striking and versatile. The result is a brand system that captures the essence of Viva: modern, simple, and distinctly different." },
   
   
    {
      id: 103,
      imageSrc: "/assets/img/portfolio/portfolio-pd/thumbnail_vendem.png",
      itemsImages:[ "/assets/img/portfolio/portfolio-pd/v1.png", "/assets/img/portfolio/portfolio-pd/v2.png", "/assets/img/portfolio/portfolio-pd/v3.png", "/assets/img/portfolio/portfolio-pd/v4.png", "/assets/img/portfolio/portfolio-pd/v5.png", "/assets/img/portfolio/portfolio-pd/v6.png", "/assets/img/portfolio/portfolio-pd/v7.png", "/assets/img/portfolio/portfolio-pd/v8.png" , "/assets/img/portfolio/portfolio-pd/v9.png", "/assets/img/portfolio/portfolio-pd/v10.png", "/assets/img/portfolio/portfolio-pd/v11.png", "/assets/img/portfolio/portfolio-pd/v12.png", "/assets/img/portfolio/portfolio-pd/v13.png" ],
      categoryLinks: ["Brand Identity Design"],
      title: "Brand identity design for Vendem",
      category: "Brand Identity",
      type: "pd",//will be used for specifing route
      client: "Viva Fintech",
      date: "November, 2024",
      para1: "Vendem is a digital marketing agency focused on tech-based companies, combining innovation with strategic insight to enhance brand presence in a dynamic market. The agency excels in helping technology-driven brands navigate the fast-paced tech world, ensuring their clients stay competitive and relevant.",
      challenge: "For Vendem’s visual identity, the goal was to create a design that reflected their expertise in technology and innovation. The brand needed to be bold and modern, standing out in a competitive market while showcasing Vendem’s ability to drive growth and adapt to industry changes.",
      finalResult: "To capture Vendem's innovative spirit and strategic expertise, we crafted a bold and modern brand identity system. At its core is a sharp, edgy \"V\" brand mark, designed to be both simple and highly memorable, embodying the agency's forward-thinking approach. The dynamic blue color palette exudes trust, professionalism, and adaptability, while the clean visual identity system ensures versatility across various digital and print mediums. This cohesive design reflects Vendem's commitment to driving growth and innovation, enabling them to stand out in a competitive market while resonating with their tech-savvy audience." },



  ]

export const portfolioData = [
  ...VAPTPortfolio,
  ...PDPortfolio,
];
export const allPortfolio = [
  ...portfolioData,
];


