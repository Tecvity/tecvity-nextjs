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
  {
    id: 2,
    imageSrc: "/assets/img/portfolio/portfolio-vapt/vapt_3.png",
    itemsImages: [ "/assets/img/portfolio/portfolio-vapt/vapt_4.png" ], 
    categoryLinks: ["Cybersecurity","Web Application Security"],
    "title": "Penetration Test of AI Powered Financial Advisory Platform", //wealthfeed,  https://www.wealthfeed.com/
    "category": "Grey Box Penetration Test",
    "client": "Security Consultants",
    "date": "Sept, 2024",
    "type": "vapt",
    "para1": "The AI Powered Financial Advisory Platform is a leading solution in the United States, specializing in AI-powered tools for financial advisors. They approached Tecvity to assess their platform for security vulnerabilities to ensure the safety and integrity of their client data.",
    "challenge": "Testing the security of the AI Powered Financial Advisory Platform required an in-depth understanding of its AI-driven functionalities and its unique financial advisory tools. The challenge was to navigate its complex architecture and specialized features, which are tailored to the financial sector.",
    "finalResult": "Our team collaborated closely with the AI Powered Financial Advisory Platform to gain a comprehensive understanding of their platform. Several critical and high-severity vulnerabilities were found and reported to their team, who promptly patched them to ensure the platform's security and reliability."

  },
  {
    id: 3,
    imageSrc: "/assets/img/portfolio/portfolio-vapt/vapt_5.png",
    itemsImages: [ "/assets/img/portfolio/portfolio-vapt/vapt_6.png" ], 
    categoryLinks: ["Cybersecurity","Web Application Security"],
    "title": "Penetration test of an AI-Powered Dental App",  // dentina, https://dentina.ai/
    "category": "Black Box Penetration Test",
    "client": "Security Consultants",
    "date": "Nov, 2024",
    "type": "vapt",
    "para1": "The AI-Powered Dental App is a platform designed to streamline administrative tasks and enhance patient engagement for dental practices. A comprehensive security assessment was conducted to ensure the safety of sensitive patient and operational data.",
    "challenge": "The primary challenge was testing the platform's AI-driven functionalities and its integration with dental practice management systems (PMS). The assessment required an in-depth understanding of the platform's architecture and its unique healthcare-related features.",
    "finalResult": "The security assessment uncovered several medium and low-severity vulnerabilities, which were promptly reported to the development team. These vulnerabilities were addressed effectively, significantly enhancing the platform's security posture and ensuring compliance with industry standards."
  
  },
  {
    "id": 4,
    "imageSrc": "/assets/img/portfolio/portfolio-vapt/vapt_7.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-vapt/vapt_8.png"],
    "categoryLinks": ["Cybersecurity", "Web Application Security", "Enterprise Security"],
    "title": "Penetration Test of Agile Planning Platform", // kendis, https://kendis.io/
    "category": "Black Box Penetration Test",
    "client": "Security Consultants",
    "date": "Oct, 2024",
    "type": "vapt",
    "para1": "The Agile Planning Platform is a cutting-edge solution for enterprises implementing Agile practices at scale. It provides tools for Program Increment (PI) Planning, Dependency Management, and Roadmapping. The platform required a rigorous black box penetration test to identify potential security vulnerabilities and ensure the protection of sensitive enterprise data.",
    "challenge": "Performing a black-box pentest on Agile Planning Platform , especially with its integrations like Jira and Azure DevOps, comes with unique challenges. Without access to internal details, it’s tough to identify hidden API endpoints, test complex authentication methods like OAuth2, and ensure data flows securely. Misconfigured permissions, weak input validation, or poor error handling can expose sensitive information or APIs. There is also the need to check for issues like rate limiting, abuse prevention, and injection vulnerabilities while analyzing how APIs interact and manage dependencies. On top of that, ensuring data stays in sync, integrations are securely configured, and vulnerabilities in third-party tools are patched makes the process even more demanding.",
    "finalResult": "The assessment uncovered several medium and low severity vulnerabilities, including issues related to Web Application Firewall configurations, vulnerable libraries, and insecure methods. These findings were reported to the development team, who implemented the necessary patches to enhance the platform's security and reliability."
  },
  {
    "id": 5,
    "imageSrc": "/assets/img/portfolio/portfolio-vapt/vapt_9.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-vapt/vapt_10.png"],
    "categoryLinks": ["Cybersecurity", "Web Application Security", "Healthcare Security"],
    "title": "Penetration Test of AI-Powered Home Health Care Platform", // plenus, https://plenus.ai/
    "category": "Grey Box Penetration Test",
    "client": "Security Consultants",
    "date": "Nov, 2024",
    "type": "vapt",
    "type": "vapt",
    "para1": "Home Health Care is an AI-driven platform that automates medical records for home health care providers, enhancing efficiency and patient care. To ensure the security of sensitive patient data and compliance with healthcare regulations, a comprehensive Gray box penetration test was conducted.",
    "challenge": "Our primary challenge was assessing the platform's security without prior knowledge of its internal structures. This required simulating real-world attack scenarios to identify potential vulnerabilities, particularly those related to AI functionalities, data handling processes, and the risk of prompt injection attacks. These attacks could manipulate AI-generated responses by crafting malicious inputs, potentially leading to unintended actions or information disclosure. Prompt injections can occur not only through text inputs but also through audio or other input methods, making them a versatile and critical threat vector.",
    "finalResult": "The penetration test identified several high and medium-severity vulnerabilities, including issues related to session handling, file restrictions, rate limiting, data encryption, and access controls. These findings were reported to Health Care's development team, who promptly addressed them, thereby strengthening the platform's security and ensuring compliance with industry standards.",
  }, 
  {
    "id": 6,
    "imageSrc": "/assets/img/portfolio/portfolio-vapt/vapt_11.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-vapt/vapt_12.png"],
    "categoryLinks": ["Cybersecurity", "VAPT", "Security Consultation"],
    "title": "VAPT for Reflik Inc",  // reflik, https://www.reflik.com/
    "category": "VAPT & Security Consultation",
    "client": "Reflik",
    "date": "Jul, 2024 (Ongoing)",
    "type": "vapt",
    "para1": "Reflik is an online talent acquisition and recruiting platform that connects employers with recruiters through a crowdsourcing model. The platform aims to streamline the hiring process by providing quick access to a large pool of qualified candidates. Our engagement with Reflik involves continuous support and consultation to identify and address security vulnerabilities within their application and infrastructure.",
    "challenge": "The challenge lies in providing continuous penetration testing and security consultation to Reflik, ensuring their platform remains secure while scaling. Our team is actively working on identifying vulnerabilities across the app and infrastructure to safeguard sensitive data and prevent potential exploits.",
    "finalResult": "During our ongoing commitment, several critical and high-level vulnerabilities have been identified and patched. These vulnerabilities, related to application security, infrastructure, and data handling, were addressed promptly to enhance the overall security posture of Reflik's platform. The engagement is still ongoing as we continue to monitor and improve the security of the platform."
  },
  {
    "id": 7,
    "imageSrc": "/assets/img/portfolio/portfolio-vapt/vapt_13.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-vapt/vapt_14.png"],
    "categoryLinks": ["Cybersecurity", "Web Application Security"],
    "title": "Penetration Test of Student Loan Refinancing Platform", // purefy, https://purefy.com/
    "category": "Gray Box Penetration Test",
    "client": "Security Consultants",
    "date": "Nov, 2024",
    "type": "vapt",
    "para1": "The Student Loan Refinancing Platform is designed to help users compare loan options quickly and securely. This penetration test focused on identifying vulnerabilities in both the admin and user web applications, ensuring the platform’s security against potential threats.",
    "challenge": "The primary challenge was conducting a comprehensive Gray Box Penetration Test, where the testing team had limited access to the internal workings of the platform. The test involved assessing the overall security posture using the ASVS checklist provided by OWASP, ensuring that the platform adhered to industry-standard security practices across all layers.",
    "finalResult": "The penetration test uncovered several high and medium-severity vulnerabilities, including issues related to improper error handling, misconfigurations, and exposed API keys. These vulnerabilities were reported to the development team to take immediate action to address and patch the identified security flaws."
  },
  {
    "id": 8,
    "imageSrc": "/assets/img/portfolio/portfolio-vapt/vapt_15.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-vapt/vapt_16.png"],
    "categoryLinks": ["Cybersecurity", "White Box Testing", "Web Application Security"],
    "title": "Penetration Test of Courier Comparison Platform", // fast courier, https://fastcourier.com.au/
    "category": "White Box Penetration Test",
    "client": "Security Consultants",
    "date": "Oct, 2025",
    "type": "vapt",
    "para1": "The Courier Comparison Platform is an online service that allows users to compare courier and freight quotes, providing affordable and efficient delivery solutions. This white box penetration test focused on their web application, APIs, and admin control panel, aiming to identify and address security vulnerabilities.",
    "challenge": "The primary focus of the penetration test was to discover any potential security issues in the platform, ensuring the protection of user data and the integrity of the application. This included assessing the APIs for improper authentication, the admin control panel for privilege escalation risks, and the web application for potential vulnerabilities in its codebase.",
    "finalResult": "The penetration test identified several critical and high-severity vulnerabilities related to business logic, file upload validation, cloud infrastructure, improper sanitization, and access control. These issues were promptly reported and addressed to improve the platform’s security posture."
  },
  {
    "id": 9,
    "imageSrc": "/assets/img/portfolio/portfolio-vapt/vapt_17.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-vapt/vapt_18.png"],
    "categoryLinks": ["Cybersecurity", "Gray Box Testing"],
    "title": "Penetration Test of Aviation Maintenance Platform", // eplane, https://www.eplane.com/
    "category": "Gray Box Penetration Test",
    "client": "Security Consultants",
    "date": "Sept, 2024",
    "type": "vapt",
    "para1": "The Aviation Maintenance Platform is a solution for streamlining aircraft maintenance, repair, and operations (MRO). Designed for aviation professionals, it offers tools for maintenance tracking, parts management, collaboration, and data analytics. Our Gray Box Penetration Test focused on identifying vulnerabilities within their network and application to ensure a secure operational environment.",
    "challenge": "The primary objective of the test was to uncover security issues that could compromise the platform's functionality and data integrity. This included assessing the network for configuration flaws and evaluating the application for vulnerabilities such as improper access control and insecure data handling.",
   "finalResult": "The initial penetration test identified several critical and high-severity security issues in their network and application, including misconfigurations, improper access control, and data exposure risks. A follow-up penetration test conducted in the same month verified the successful implementation of patches and enhancements to address the reported vulnerabilities. This demonstrates the professionalism and instant solution-providing capabilities of the Tecvity team, ensuring the platform's security and reliability for its users."
  },
  {
    "id": 10,
    "imageSrc": "/assets/img/portfolio/portfolio-vapt/vapt_19.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-vapt/vapt_20.png"],
    "categoryLinks": ["Cybersecurity", "Gray Box Testing", "Web Application Security"],
    "title": "Penetration Test of Family Office Collaboration Platform",  // onePlace, https://oneplace.family/
    "category": "Gray Box Penetration Test",
    "client": "Security Consultants",
    "date": "Sept, 2024",
    "type": "vapt",
    "para1": "This Family Office Collaboration Platform is a centralized workspace designed to provide families and their advisors with a secure environment for collaboration, document management, and task tracking. It offers features like group workspaces, a family context hub, and a secure document vault, focusing on streamlining workflows and ensuring data security.",
    "challenge": "The objective of this penetration test was to evaluate the security of the platform’s web application and APIs. One of the challenges was to understand and test the GraphQL API thoroughly, ensuring no vulnerabilities existed in its design or implementation. Additionally, the test aimed to identify vulnerabilities that could compromise sensitive family data or disrupt the platform’s functionality, with a focus on business logic, API security, and configuration settings.",
    "finalResult": "The penetration test identified several medium and low-severity vulnerabilities related to API security, business logic flaws, and misconfigurations. These issues were promptly reported to the platform's security team, who addressed them to enhance the overall security and reliability of the platform."
  },
  {
    "id": 111,
    "imageSrc": "/assets/img/portfolio/portfolio-vapt/rembrandt.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-vapt/rembrandt-banner.avif"],
    "categoryLinks": ["Network Security", "Black Box Testing", "Web Application Security"],
    "title": "Penetration Test of Rembrandt",  
    "category": "Black Box Penetration Test",
    "client": "Alvin Rezel",
    "date": "January, 2025",
    "type": "vapt",
    "para1": "Rembrandt is a leading manufacturer of corporate jewelry, catering to global markets with its distinctive and comprehensive awards programs. As a Canadian-owned and operated company, Rembrandt stands as one of the country's premier suppliers of service and recognition awards.",
    "challenge": "The objective of this penetration test was to evaluate the security of the platform’s web application and network infrastructure. One of the challenges was to understand and test the underlying system thoroughly in a short span of time.",
    "finalResult": "The penetration test identified several critical and high-severity vulnerabilities related to app security, business logic flaws, and misconfigurations. These issues were promptly reported to the platform's development team and appropriate remediations were suggested."
  },
  {
    "id": 112,
    "imageSrc": "/assets/img/portfolio/portfolio-vapt/finops_0.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-vapt/finops_1.png"],
    "categoryLinks": ["Cloud Security", "Gray Box Testing", "Web Application Security"],
    "title": "Penetration Test of a Cloud-based FinOps Platform", // Octopus Cloud
    "category": "Gray Box Penetration Test", 
    "client": "Security Consultants",
    "date": "April, 2025",
    "type": "vapt",
    "para1": "The target of this assessment was a FinOps platform designed to help service providers and their customers gain clarity over hybrid cloud environments. The platform enables users to reduce risk, enhance profitability, and make better operational and financial decisions by integrating finance, operations, and technology data.",
    "challenge": "The objective of this penetration test was to assess the security posture of the platform’s web application and underlying infrastructure. The challenge involved conducting a thorough evaluation with limited internal information, simulating an attacker with partial knowledge of the system.",
    "finalResult": "The penetration test uncovered several critical and high-severity vulnerabilities, including issues related to Insecure Direct Object References (IDOR), privilege escalation, and insufficient rate limiting. These findings were promptly communicated to the platform’s security team, who initiated remediation efforts. The platform maintains a proactive stance on security, including regular third-party assessments and vulnerability disclosure practices."
  },
  {
    "id": 113,
    "imageSrc": "/assets/img/portfolio/portfolio-vapt/healthcare_0.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-vapt/healthcare_1.png"],
    "categoryLinks": ["Health Security", "Gray Box Testing", "Web Application Security"],
    "title": "Penetration Test of Health Diagnostics Platform", // onsitehd
    "category": "Gray Box Penetration Test",
    "client": "Security Consultants",
    "date": "January, 2025",
    "type": "vapt",
    "para1": "The target was a U.S based health diagnostics platform specializing in employee health assessments and biometric screenings. The platform offers on-site health services and manages sensitive employee health data, ensuring compliance with HIPAA standards for data protection.",
    "challenge": "The goal of this penetration test was to identify vulnerabilities in the staging portal of the platform, focusing on both admin and normal user roles. The test specifically targeted potential Insecure Direct Object References (IDOR), session-related issues, and misconfigurations that could expose Personal Identifiable Information (PII). Additionally, the test aimed to ensure that the platform complied with HIPAA standards for securing sensitive health data.",
    "finalResult": "The penetration test revealed several high and medium-severity vulnerabilities, including misconfigurations that could potentially expose sensitive information and issues related to session management. These findings were communicated to the platform's security team, who initiated corrective actions to address the vulnerabilities and enhance the platform's security posture."
  }, 
  {
    "id": 114,
    "imageSrc": "/assets/img/portfolio/portfolio-vapt/vif_0.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-vapt/vif_1.png"],
    "categoryLinks": ["Financial Security", "Gray Box Testing", "Web Application Security"],
    "title": "Penetration Test of Financial Intelligence Platform", //David Gallant – Valid8
    "category": "Gray Box Penetration Test",
    "client": "Security Consultants",
    "date": "May, 2024",
    "type": "vapt",
    "para1": "A cloud-based Verified Financial Intelligence (VFI) platform designed to assist forensic accountants in transforming financial documents into courtroom-ready evidence. Leveraging advanced AI, the platform enables rapid tracing of fund flows, enhancing the speed and accuracy of financial analyses.",
    "challenge": "The objective of this penetration test was to assess the security posture of the platform's web application and underlying infrastructure. The focus was on identifying vulnerabilities related to business logic, particularly concerning the processing and analysis of financial data, as well as any misconfigurations that could compromise data integrity or confidentiality.",
    "finalResult": "The penetration test uncovered several high and medium-severity vulnerabilities, including business logic flaws that could potentially allow unauthorized manipulation of data. These findings were promptly reported to the platform's security team, who acknowledged the issues and initiated remediation efforts to enhance the platform's security and maintain compliance with industry standards."
  }, 
  {
    "id": 115,
    "imageSrc": "/assets/img/portfolio/portfolio-vapt/npcp_0.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-vapt/npcp_1.png"],
    "categoryLinks": ["Network Security", "Black Box Testing", "Infrastructure Security"],
    "title": "Penetration Test of Network Packet Capture Platform", // FMAD.io
    "category": "Black Box Penetration Test",
    "client": "Security Consultants",
    "date": "March, 2025",
    "type": "vapt",
    "para1": "The target was a network packet capture platform specializing in high-performance, lossless packet capture solutions ranging from 10Gbps to 100Gbps. The platform offers cost-effective appliances designed to integrate seamlessly into existing network infrastructures, providing precise and reliable packet capture capabilities.",
    "challenge": "The engagement involved conducting a black box penetration test with only an IP address provided. The primary objective was to enumerate the target's network services and configurations to identify potential vulnerabilities that could be exploited by external attackers.",
    "finalResult": "The penetration test did not uncover any critical issues within the network. However, several areas were identified where security configurations could be enhanced to further strengthen the platform's defenses. These recommendations were communicated to the platform's security team, who acknowledged the insights and planned for proactive improvements to maintain a robust security posture."
  }
  
];
export const PDPortfolio = [
  {
    id: 101,
    imageSrc: "/assets/img/portfolio/portfolio-pd/s0.png",
    itemsImages:[ "/assets/img/portfolio/portfolio-pd/s1.png", "/assets/img/portfolio/portfolio-pd/s2.png", "/assets/img/portfolio/portfolio-pd/s3.png", "/assets/img/portfolio/portfolio-pd/s4.png" , "/assets/img/portfolio/portfolio-pd/s5.png" , "/assets/img/portfolio/portfolio-pd/s6.png" , "/assets/img/portfolio/portfolio-pd/s7.png" ], 
    categoryLinks: ["Web Design","Landing Page Design"],
    title: "Landing page design for Security Consultants",
    category: "UX/UI Design",
    type: "pd",//will be used for specifing route
    client: "Security Consultants",
    date: "October 2024",
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
    date: "November 2024",
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
      client: "Vendem",
      date: "September 2024",
      para1: "Vendem is a digital marketing agency focused on tech-based companies, combining innovation with strategic insight to enhance brand presence in a dynamic market. The agency excels in helping technology-driven brands navigate the fast-paced tech world, ensuring their clients stay competitive and relevant.",
      challenge: "For Vendem’s visual identity, the goal was to create a design that reflected their expertise in technology and innovation. The brand needed to be bold and modern, standing out in a competitive market while showcasing Vendem’s ability to drive growth and adapt to industry changes.",
      finalResult: "To capture Vendem's innovative spirit and strategic expertise, we crafted a bold and modern brand identity system. At its core is a sharp, edgy \"V\" brand mark, designed to be both simple and highly memorable, embodying the agency's forward-thinking approach. The dynamic blue color palette exudes trust, professionalism, and adaptability, while the clean visual identity system ensures versatility across various digital and print mediums. This cohesive design reflects Vendem's commitment to driving growth and innovation, enabling them to stand out in a competitive market while resonating with their tech-savvy audience." },

         
    {
      id: 4,
      imageSrc: "/assets/img/portfolio/portfolio-pd/n0.png",
      itemsImages:[ "/assets/img/portfolio/portfolio-pd/n1.png", "/assets/img/portfolio/portfolio-pd/n2.png", "/assets/img/portfolio/portfolio-pd/n3.png", "/assets/img/portfolio/portfolio-pd/n4.png", "/assets/img/portfolio/portfolio-pd/n5.png", "/assets/img/portfolio/portfolio-pd/n6.png", "/assets/img/portfolio/portfolio-pd/n7.png", "/assets/img/portfolio/portfolio-pd/n8.png" , "/assets/img/portfolio/portfolio-pd/n9.png", "/assets/img/portfolio/portfolio-pd/n10.png", "/assets/img/portfolio/portfolio-pd/n11.png", "/assets/img/portfolio/portfolio-pd/n12.png", "/assets/img/portfolio/portfolio-pd/n13.png" ],
      categoryLinks: ["Brand Identity Design"],
      title: "Brand identity design Nexonic Labs",
      category: "Brand Identity",
      type: "pd",//will be used for specifing route
      client: "Nexonic Labs",
      date: "August 2024",
      para1: "Nexonic Labs is at the forefront of innovation, helping companies streamline their operations through the power of AI. By automating repetitive tasks, Nexonic Labs enables businesses to focus on what truly matters—driving growth, innovation, and meaningful impact. With a mission to simplify complexity, Nexonic Labs redefines efficiency in today’s fast-paced world.",
      challenge: "Creating a brand identity for Nexonic Labs required a design that encapsulated their tech-forward vision while remaining clean and approachable. The challenge was to highlight their advanced technological capabilities while maintaining a human touch that resonated with their diverse audience. The identity needed to reflect cutting-edge innovation, inspire trust, and maintain flexibility across various applications.",
      finalResult: "We designed a sleek and futuristic brand identity system that embodies Nexonic Labs' essence. At its heart is an \"N\" mark composed of interconnected dots, symbolizing the seamless integration of technology and automation. A dynamic gradient of blue emphasizes the advanced technological foundation of the company while projecting professionalism and trust. The clean, forward-thinking design ensures the identity is both modern and timeless, perfectly aligning with Nexonic Labs’ mission to lead in tech-powered automation." },


  ]

export const CLOUDPortfolio = [
  {
    id: 201,
    imageSrc: "/assets/img/portfolio/portfolio-cloud/cloud_0.png",
    itemsImages:[ "/assets/img/portfolio/portfolio-cloud/cloud_1.png"], 
    categoryLinks: ["Cloud Security","Azure Cloud Hardening"],
    "title": "Azure Cloud Hardening for LeanSuite Corp",
    "category": "Cloud Security Audits",
    "type": "cloud",
    "client": "LeanSuite Corp",
    "date": "Oct, 2024",
    "para1": "LeanSuite is a cloud-based lean manufacturing application designed to help manufacturing businesses drive efficiency and productivity on the factory floor. It offers solutions such as a suggestion platform with a simple, intuitive interface that boosts employee engagement and collaboration, ultimately improving business operations.",
    "challenge": "The primary objective of the project was to enhance the security posture of LeanSuite's Azure cloud environment. This involved implementing private endpoints to restrict access, hardening network configurations to mitigate vulnerabilities, encrypting data both at rest and in transit to ensure its confidentiality and integrity, and configuring robust Security Information and Event Management (SIEM) and Cloud Security Posture Management (CSPM) solutions for proactive threat monitoring and compliance.",
    "finalResult": "Through a comprehensive approach, the Tecvity team successfully implemented the necessary security measures, enabling LeanSuite to achieve SOC 2 certification. This accomplishment not only demonstrates LeanSuite's commitment to maintaining high security standards but also proves the professionalism and expertise of Tecvity in achieving their clients' objectives, ensuring secure and compliant cloud operations."

  },
  {
    "id": 202,
    "imageSrc": "/assets/img/portfolio/portfolio-cloud/cloud_2.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-cloud/cloud_3.png"],
    "categoryLinks": ["Cloud Security", "Azure DNS Configuration"],
    "title": "Azure Private DNS Zones Configuration of Business Analytics Software Provider", // ebmsoftware.com 
    "category": "Cloud Security Audits",
    "type": "cloud",
    "client": "Security Consultants",
    "date": "Nov, 2024",
    "para1": "A software provider specializing in next-generation business analytics tools aimed at streamlining workflows for M&A professionals, finance departments, and organizations. Their solutions include tools for finance management, FP&A capabilities, M&A processes, and cloud data analytics, helping businesses improve efficiency and decision-making.",
    "challenge": "The primary objective was to configure and secure private DNS zones in Azure. The software provider had previously spent significant resources on DNS zone configuration, relying on IP addresses for authentication. This approach led to operational complexities and heightened security risks. The goal was to simplify authentication processes and enhance security using Azure’s advanced features.",
    "finalResult": "In just 10 minutes, Tecvity addressed the DNS configuration challenges by implementing private DNS zones and enabling Entra ID authentication using DNS names. This solution eliminated the reliance on IP-based authentication, streamlined operations, and strengthen security. The rapid resolution showcased Tecvity’s expertise and professionalism in delivering tailored cloud security solutions."
  },
  {
    "id": 203,
    "imageSrc": "/assets/img/portfolio/portfolio-cloud/cloud_4.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-cloud/cloud_5.png"],
    "categoryLinks": ["Cloud Security", "Azure Security Hardening"],
    "title": "Securing Cloud Infrastructure of Valorian",
    "category": "Cloud Security Audits",
    "type": "cloud",
    "client": "Valorian",
    "date": "Nov, 2024",
    "para1": "Valorian Solutions is a Houston-based consulting firm founded in 2022, specializing in tailored solutions for the industrial services sector. Their offerings, including Safety, Turnaround Tracker, ESG, and Ops, help clients enhance operational efficiency, safety, and compliance. Valorian serves industries such as mechanical services, industrial cleaning, fabrication, construction, soft crafts, and refractory services.",
    "challenge": "The primary objective was to provide ongoing support for Azure security hardening and configuration. Valorian needed to enhance the security of their cloud infrastructure to ensure data protection, system reliability, and compliance with industry standards. The challenge involved implementing advanced security measures to safeguard sensitive operational data and support the company’s growth and evolving needs.",
    "finalResult": "Tecvity successfully implemented robust Azure security hardening measures, securing Valorian's cloud infrastructure against potential threats. The ongoing support ensures continuous monitoring and configuration optimization, helping Valorian maintain secure, reliable operations and compliance with industry regulations. This solution highlights Tecvity’s expertise in providing tailored security solutions for cloud environments."
  },
  {
    "id": 204,
    "imageSrc": "/assets/img/portfolio/portfolio-cloud/cloud_6.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-cloud/cloud_7.png"],
    "categoryLinks": ["Cloud Security", "Azure Security Hardening"],
    "title": "Azure Cloud Hardening of an AI Based Dental App",  // dentina, https://dentina.ai/
    "category": "Cloud Security Audits",
    "type": "cloud",
    "client": "Security Consultants",
    "date": "Jan, 2025",
    "para1": "The AI-Powered Dental App is a platform designed to streamline administrative tasks and enhance patient engagement for dental practices. A comprehensive security assessment was conducted to ensure the safety of sensitive patient and operational data.",
    "challenge": "Our main was to strengthen the security of the app’s Azure cloud environment. This included identifying and mitigating potential vulnerabilities, implementing role-based access control (RBAC), encrypting sensitive data at rest and in transit, and ensuring compliance with healthcare industry standards. The app required a secure, scalable infrastructure to support its AI-driven operations and data management needs.",
    "finalResult": "Tecvity implemented advanced Azure security hardening measures, including data encryption, network hardening, and robust access controls. The solution ensured a secure and compliant cloud environment, enabling the app to deliver innovative AI solutions for dental practices confidently."
  },
  {
    "id": 205,
    "imageSrc": "/assets/img/portfolio/portfolio-cloud/cloud_8.png",
    "itemsImages": ["/assets/img/portfolio/portfolio-cloud/cloud_9.png"],
    "categoryLinks": ["Cloud Security", "Azure Architecture Review"],
    "title": "Azure Architecture Review for Pathfindr",
    "category": "Cloud Security Solutions",
    "type": "cloud",
    "client": "Pathfindr",
    "date": "Dec, 2024",
    "para1": "Pathfindr is an Australian-based AI consulting firm dedicated to making artificial intelligence accessible and valuable for businesses across the country. They provide end-to-end AI solutions tailored to unique client needs, focusing on driving innovation and efficiency. Their services include AI education, AI strategy and consulting, system automation, and delivery of tailored AI solutions to address business challenges.",
    "challenge": "Our main focus was to review Pathfindr Azure cloud infrastructure and provide recommendations to enhance its security and efficiency. The challenge involved evaluating the existing architecture, identifying vulnerabilities, optimizing configurations, and aligning the setup with best practices for scalability, security, and compliance.",
    "finalResult": "Tecvity conducted a thorough Azure architecture review for Pathfindr, identifying key areas for improvement and implementing enhancements to strengthen their cloud infrastructure. The review addressed security gaps, optimized resource allocation, and ensured compliance with industry standards. These improvements enabled Pathfindr to maintain a secure, scalable, and efficient cloud environment, supporting their mission to deliver cutting-edge AI solutions to businesses across Australia."
  },  
];

export const portfolioData = [
  ...VAPTPortfolio,
  ...PDPortfolio,
  ...CLOUDPortfolio,
];
export const allPortfolio = [
  ...portfolioData,
];


