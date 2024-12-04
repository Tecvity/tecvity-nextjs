# TECVITY

_Agency Website for TECVITY_

---

## Table of Contents

- [TECVITY](#tecvity)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Services](#services)
  - [Tech Stack](#tech-stack)
  - [Setup and Installation](#setup-and-installation)
  - [Environment Variables](#environment-variables)
  - [Project Structurre](#project-structurre)
  - [Email Configuration](#email-configuration)
  - [Database](#database)
  - [Disabled Features](#disabled-features)
  - [Blog Post Contribution Guide](#blog-post-contribution-guide)
  - [Service Addition Guide](#service-addition-guide)
  - [Portfolio Project Contribution Guide](#portfolio-project-contribution-guide)
  - [License](#license)

---

## Overview

TECVITY is a tech-focused agency established in 2022, specializing in providing solutions related to information security and compliance, web and mobile design, web development, branding, and logo design.

---

## Services

The agency provides a variety of specialized services, including:

- _Branding and Logo Design_: Crafting unique and memorable brand identities to help businesses stand out.
- _Web Development_: Developing high-quality, responsive, and scalable websites using modern web technologies.
- _Desktop Application Development_: Building efficient and reliable desktop applications tailored to client needs.
- _Information Security and Compliance_: Ensuring systems are secure and compliant with industry standards.
- _Product Design_: Designing user-friendly and aesthetically appealing digital products.

---

## Tech Stack

- _Frontend_: [Next.js](https://nextjs.org/) (App Router)
- _Backend_: API routes in Next.js
- _Database_: AWS DynamoDB
- _Email Service_: AWS SES
- _Hosting_: [Netlify](https://www.netlify.com/)

---

## Setup and Installation

1. _Clone the repository:_

   ```bash
   git clone https://github.com/Tecvity/tecvity-nextjs.git
   cd tecvity-nextjs
   ```

   2. _Install dependencies:_

   ```bash
   npm install
   ```

   3. _Run the development server:_

   ```bash
   npm run dev
   ```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.js. The page auto-updates as you edit the file.

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

`AWS_ACCESS_KEY_ID`=<Your AWS Access Key>

`AWS_SECRET_ACCESS_KEY`=<Your AWS Secret Key>

`AWS_REGION`=<Your AWS DynamoDB Region>

Ensure these variables are set correctly to use AWS services, and set them in configuration.

## Project Structurre

`components/`: Reusable UI components.

`app/`: Next.js pages.

`app/api/`: API route handlers for backend functionality.

`styles/`: Stylesheets (global and module-specific).

`data/`: static data

`public/`: Static assets.

`utils/`: Utility functions and helpers.

## Email Configuration

The website uses AWS SES for email notifications. Make sure you have verified your email domain in the AWS SES console and properly configured the environment variables in .env.local.

## Database

AWS DynamoDB is utilized for storing dynamic content, including blog posts comments. Ensure your AWS permissions are configured to access and manage DynamoDB tables as required.

## Disabled Features

Following feautres/pages exist in the codebase but have been disabled for now (can be considered in future):

- Pricing
- Search (both global and blog-based)
- Awards

## Blog Post Contribution Guide

Welcome to the **Blog Post Contribution Guide**! This guide provides step-by-step instructions for adding a new blog post to this project.

---

## Table of Contents

1. [Project Setup](#setup-and-installation)
2. [Steps for Adding a New Blog Post](#steps-for-adding-a-new-blog-post)
   - [1. Add an id for the Blog Post](#1-add-an-id-for-the-blog-post)
   - [2. Add a High-Quality Blog Image](#2-add-a-high-quality-blog-image)
   - [3. Add a Small Blog Image](#3-add-a-small-blog-image)
   - [4. Add the Post Date](#4-add-the-post-date)
   - [5. Assign a Category](#5-assign-a-category)
   - [6. Add a Title](#6-add-a-title)
   - [7. Add Tags](#7-add-tags)
   - [8. Add an Icon](#8-add-an-icon)
   - [9. Add the Author's Name](#9-add-the-authors-name)
   - [10. Add the Author's Quote](#10-add-the-authors-quote)
   - [11. Add the Author's Image](#11-add-the-authors-image)
   - [12. Add the Author's Profile](#12-add-the-authors-profile)
   - [13. Add Blog Content](#13-add-blog-content)
   - [14. Add Blog Sections](#14-add-blog-sections)
3. [Final Example BlogPost Object](#final-example-blogpost-object)

---

## Steps for Adding a New Blog Post

You need to modify the list `blogPosts` in `data/blogs.js`, add the final object to list `blogPosts` to get your Blog posted.

### 1. Add an id for the Blog Post
The `id` (required) is the unique identifier for a blog post. Adding duplicates can lead to unexpected data in other blog posts. You need to assign an `id` that is one value greater than the previous blog post to maintain order. If the previous Blog id is `1` use `2`, Example:
```javascript 
id: 2,
```

### 2. Add a High-Quality Blog Image
The `image` (required) is displayed at the top of the blog post. Upload an image (dimensions: 1080x600) to the directory `public/assets/img/blog`. Ensure the image is named `blog_post_<id>_<serial number>.jpg`, where `<id>` needs to be replaced by blog post `id` and `<serial number>` needs to be replaced by serial numbers of your choice. Add the image path as shown:
```javscript 
image: '/assets/img/blog/blog_post_2_1.jpg', 
```

### 3. Add a Small Blog Image
The `smallImageUrl` (required) is displayed in the preview card of the blog post. Upload an image (dimensions: **180x140**) to the directory `public/assets/img/blog`. Ensure the image is named `blog_post_mini_<id>.jpg`, where `<id>` needs to be replaced by blog post `id`. Add the image path as shown:
```javascript 
smallImageUrl: '/assets/img/blog/blog_post_mini_2.jpg', 
```

### 4. Add the Post Date
The `date` (required) is used to determine the most recent posts and to display the date when the blog was published. Use the format `Month DD, YYYY`, as shown below:
```javascript 
date: 'November 1, 2024', 
```

### 5. Assign a Category
The `category` (required) is used to filter blogs based on the category they belong to. Select an existing category from the `categories` list in `data/categories-tags.js`. If you want to add a new category, include it in the `categories` list in `data/categories-tags.js` before using it, as shown below:
```javascript
 category: 'category',
```

### 6. Add a Title
The `title` (required) is used to name a blog post and is also included in the route of that specific blog. Use a descriptive title and avoid symbols or random characters, as the title will be used for routing, as shown below:
```javascript
 title: 'Your New Blog Post',
```

### 7. Add Tags
The `tags` (required) are used to define the topics of the blog post. Include at least one tag in an array. Choose tags from the tags `list` in `data/categories-tags.js` or add your own tags to the tags `list` in `data/categories-tags.js` before using them, as shown below:
```javascript
tags: ['Tag1', 'Tag2', 'Tag3'],
 ```

### 8. Add an Icon
The `icon` (required) is used as a visual only. Use the standard icon path given below, you don't need a new one:
```javascript
icon: '/assets/img/icon/arrow-left-top.svg',
 ```

### 9. Add the Author's Name
The `author` (required) is used to display the name of person who wrote the blog post. Just add the author name, as shown below:
```javascript
author: 'Author 1', 
```

### 10. Add the Author's Quote
The `authorQuote` (required) is used to display a bold quote or slogan related to the platform or blog. Example:
```javascript
authorQuote: 'Technology + Creativity = Tecvity!', 
```

### 11. Add the Author's Image
The `authorImage` (required) is the display image of the author. Upload an image to `public/assets/img/team` or use your own `URL`. Alternatively, if no image is available, you can use the placeholder image `team.png`, which is already saved in `public/assets/img/team` for you, as shown below:
```javascript
 authorImage: '/assets/img/team/team.png', 
 ```

### 12. Add the Author's Profile
The `authorProfile` (optional) is the profile of author if he is also one of the founders, include your profile path. Otherwise, set it to null. Example:
```javascript
 authorProfile: '/founders/Najam-Ul-Saqib',  or  authorProfile: null, 
```

### 13. Add Blog Content
The outermost `content` (required) is the actual blog post. Within the content, the `introduction` (required) serves as the introduction to the blog post, and the `sections` (required) describes different sections of the post. The `sections` can also be an empty array `[]` if no sections are added. If you want to add different sections, see [Add Blog Sections](#14-add-blog-sections). Example:
```javascript
 content: { 
    introduction: 'We believe that the key to our success is our team...', 
    sections: [] 
  } 
  ```

### 14. Add Blog Sections
The `sections` (required) are used to add different sections in the blog post. Each section must include a `heading` (required) and either `list`, `content`, or `services` (one is required at a time). The `list`/`services` is used to add items in the form of list, while `content` is used to display simple text without any styling. A sample is shown below:
```javascript
content: {
    introduction: "...",
    sections: [
      {
        heading: "Key Highlights",
        list: [
          { title: "Highlight 1", description: "Highlight description" },
          { title: "Highlight 2", description: "Highlight description" }
        ]
      },
      {
        heading: "Our Approach",
        content: "We focus on understanding client needs and delivering tailor-made solutions."
      },
      {
        heading: "Services Overview",
        services: [
          { title: "Service 1", description: "service description" },
          { title: "Service 2", description: "service description" }
        ]
      }
    ]
  } 
  ```

---

## Final Example BlogPost Object
Add your final object, similar to the structure given below, to the `blogPosts` list in the `data/blogs.js` file to get your blog posted.
```javascript
 {
  id: 2,
  image: '/assets/img/blog/blog_post_2_1.jpg', 
  smallImageUrl: '/assets/img/blog/blog_post_mini_2.jpg',
  date: 'November 1, 2024',
  category: 'category',
  title: 'Your New Blog Post',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  icon: '/assets/img/icon/arrow-left-top.svg',
  author: 'Author 1', 
  authorQuote: 'Technology + Creativity = Tecvity!',
  authorImage: '/assets/img/team/team.png',
  authorProfile: null, 
  content: { 
    introduction: 'We believe that the key to our success is our team...', 
    sections: [
      {
        heading: "Key Highlights",
        list: [
          { title: "Highlight 1", description: "Highlight description" },
          { title: "Highlight 2", description: "Highlight description" }
        ]
      },
      {
        heading: "Our Approach",
        content: "We focus on understanding client needs and delivering tailor-made solutions."
      },
      {
        heading: "Services Overview",
        services: [
          { title: "Service 1", description: "service description" },
          { title: "Service 2", description: "service description" }
        ]
      }
    ] 
  }
} 
```

---

## Service Addition Guide

Welcome to the **Service Addition Guide**! This guide will walk you through the necessary steps for adding a new service to the project.

---

## Table of Contents

1. [Project Setup](#setup-and-installation)
2. [Steps for Adding a New Service](#steps-for-adding-a-new-service)
   - [1. Choose an Icon](#1-choose-an-icon)
   - [2. Upload Service Images](#2-upload-service-images)
   - [3. Add Service Title](#3-add-service-title)
   - [4. Assign an id](#4-assign-an-id)
   - [5. Add Service Description](#5-add-service-description)
   - [6. Add Service Paragraphs and Headings](#6-add-service-paragraphs-and-headings)
   - [7. Add Cards for Service](#7-add-cards-for-service)
3. [Final Example Service Object](#final-example-service-object)

---

## Steps for Adding a New Service

You need to modify the list `ourServices` in `data/features.js`, add the final object to list `ourServices` to add new services.

### 1. Choose an Icon
The `iconSrc` is used to as a visual only. Select one of the icons from `public/assets/img/icon` to add to the service preview card, as shown below:

```javascript
iconSrc: "/path/to/feature-icon1-1.svg",
```

Icons available:

- "feature-icon1-1.svg"
- "feature-icon1-2.svg"
- "feature-icon1-3.svg"
- "feature-icon1-4.svg"
- "feature-icon1-5.svg"
- "feature-icon1-6.svg"

### 2. Upload Service Images
The `imageSrc1` and `imageSrc2` (required) are displayed in the respective service page, one at the top and other at the middle. Upload an image (dimensions: 1080x600) to the directory `public/assets/img/service`. Ensure the image is named `s<id>_<serial number>.jpg`, where `<id>` needs to be replaced by service `id` [how to add service id](#4-assign-an-id) and `<serial number>` needs to be replaced by serial numbers of your choice. Add the image path as shown:

```javascript
imageSrc1: "/assets/img/service/s20_1.jpg",
imageSrc2: "/assets/img/service/s20_1.jpg",
```

### 3. Add Service Title
The `title` (required) is used to name a service and is also included in the route of that specific service. Use a descriptive title and avoid symbols or random characters, as the title will be used for routing, as shown below:
```javascript
title: "Sample Service",
```

### 4. Assign an id
The `id` (required) is the unique identifier for a service. Adding duplicates can lead to unexpected data in other services. You need to assign an `id` that is one value greater than the previous service post to maintain order. If the previous service id is `19` use `20`, Example:
```javascript
id: 20,
```

### 5. Add Service Description
The `text` (required) is used as a brief description in the preview card of the service. Add your own description for the service, as shown below:
```javascript
text: "Short description of the service.",
```

### 6. Add Service Paragraphs and Headings
The `para1` (required) and `para2` (required) are plain text displayed imediately after the image `imageSrc1` and title of service `title`, next is heading `heading1` (optional) followed by a plain text `para3` (optional), next is displayed the second image `imageSrc2` followed by plain text `para4` (optional), followed by heading `heading2` (optional), followed by plain tests `para5` (optional), `para6` (optional). At last plain text `para7` (optional) is displayed after service cards [Add Cards for Service](#7-add-cards-for-service).
Include all required paragraphs and headings for your service:
```javascript
para1: "Short description of service.",
para2: "Brief detail of the service.",
heading1: "Why It Matters",
para3: "Reason for importance.",
heading2: "Our Approach",
para4: "How we deliver it.",
para5: "Key benefits.",
para6: "Expected results.",
para7: "Call to action.",
```


### 7. Add Cards for Service
The `cards` (optional) are used to display the key features of your service, The `title` (required) and `description` (required) are the details of key feature. At the end of the service, include cards to display additional information:

```javascript
cards: [
  { title: "Card Title 1", description: "Description 1" },
  { title: "Card Title 2", description: "Description 2" }
],
```

---

## Final Example Service Object

```javascript
{
  iconSrc: "/path/to/feature-icon1-1.svg",
  imageSrc1: "/assets/img/service/s20_1.jpg",
  imageSrc2: "/assets/img/service/s20_1.jpg",
  title: "Sample Service",
  id: 20,
  text: "Short description of the service.",
  para1: "Short description of service.",
  para2: "Brief detail of the service.",
  heading1: "Why It Matters",
  para3: "Reason for importance.",
  heading2: "Our Approach",
  para4: "How we deliver it.",
  para5: "Key benefits.",
  para6: "Expected results.",
  para7: "Call to action.",
  cards: [
  { title: "Card Title 1", description: "Description 1" },
  { title: "Card Title 2", description: "Description 2" }
],
}
```

# Portfolio Project Contribution Guide

Welcome to the **Portfolio Project Contribution Guide**! This guide provides step-by-step instructions for adding a new portfolio project to this repository.

---

## Table of Contents

1. [Project Setup](#setup-and-installation)
2. [Steps for Adding a New Portfolio Project](#steps-for-adding-a-new-portfolio-project)
   - [1. Add an id](#1-add-an-id)
   - [2. Add the Preview Image](#2-add-a-preview-image)
   - [3. Add Slider Images](#3-add-slider-images)
   - [4. Add Category Links](#4-add-category-links)
   - [5. Add Title](#5-add-title)
   - [6. Add Category](#6-add-category)
   - [7. Add Project Type](#7-add-project-type)
   - [8. Add Client Name](#8-add-client-name)
   - [9. Add Date](#9-add-date)
   - [10. Add Brief Description](#10-add-a-brief-description)
   - [11. Add Client's Challenge](#11-add-the-challenge-client-faced)
   - [12. Add Final Results](#12-add-final-results)
3. [Final Example Portfolio Object](#final-example-portfolio-object)

---

## Steps for Adding a New Portfolio Project

You need to modify the `VAPTPortfolio` or `PDPortfolio` list in `data/portfolio.js` and add the final object to the respective list to upload a new portfolio project.

### 1. Add an ID
The `id` (required) is the unique identifier for a portfolio project. Adding duplicates can lead to unexpected issues in other projects. You need to assign an `id` that is one value greater than the previous project's `id` to maintain order. For example, if the previous project's `id` is `101`, use `102`, as shown below:
```javascript
id: 102,
```

### 2. Add a Preview Image
The `imageSrc` (required) is used as the display picture for the project. Upload an image (dimensions: 1130x1420) to the respective folder based on the project type:  

- For type `pd` (Product Design): `public/assets/img/portfolio/portfolio-pd`  
- For type `vapt` (Penetration Testing & Vulnerability Assessment): `public/assets/img/portfolio/portfolio-vapt`  

Ensure the image is named as `portfolio<id>_<serial number>.jpg`, where `<id>` is replaced with the portfolio `id` and `<serial number>` is replaced with a serial number of your choice.  

For type `pd`, update the `imageSrc` property as shown:
```javascript
imageSrc: "/assets/img/portfolio/portfolio-pd/portfolio102_1.jpg",
```

### 3. Add Slider Images
The `itemsImages` (required, at least one) is a list of images used to showcase the project in a slider view at the top of the project display page. Upload images (dimensions: 1600x830) to the appropriate directory based on the project type:  

- For type `pd` (Product Design): `public/assets/img/portfolio/portfolio-pd`  
- For type `vapt` (Penetration Testing & Vulnerability Assessment): `public/assets/img/portfolio/portfolio-vapt`  

Ensure each image is named as `portfolio<id>_<serial number>.jpg`, where `<id>` is replaced with the portfolio `id` and `<serial number>` is replaced with serial numbers of your choice.  

Add these image file paths to the `itemsImages` array.
```javascript
itemsImages: ["/assets/img/portfolio/portfolio-pd/portfolio102_2.jpg", "/assets/img/portfolio/portfolio-pd/portfolio102_3.jpg"],
```

### 4. Add Category Links
The `category` (required, at least one) is an array of categories used to identify the type of project. Feel free to use any relevant categories and add them to the array, as shown below:
```javascript
categoryLinks: ["Web Design", "UI/UX Design"],
```

### 5. Add Title
The `title` (required) is used as the name of the project on the preview card and the project display page after the slider. Provide a descriptive title for the project, as shown below:
```javascript
title: "Sample Landing Page Design",
```

### 6. Add Category
The `category` (required) is used to identify the category of the project. At this point, we don't have a specific list of categories, so feel free to use a relevant name, or set the category to either `Grey Box Penetration Test` or `Product Design`, as shown below:
```javascript
category: "Product Design",
```

### 7. Add Project Type
The **`type`** (required) is important as it will be used for routing purposes. Set the type to either `pd` (Product Design) or `vapt` (Penetration Testing & Vulnerability Assessment). You may check the list of available types in `portfolioType` within `data/categories-tags.js`, and add the type as shown below:
```javascript
type: "pd",
```

### 8. Add Client Name
The `client` (required) is the name of the client for whom the project was completed. This can be a company name or the name of an individual. Add the client name as shown below:
```javascript
client: "Sample Client",
```

### 9. Add Date
The `date` (required) is the time when the project started. If the project started in December, use the format `Month, Year` and add it as shown below:
```javascript
date: "December, 2024",
```

### 10. Add a Brief Description
The `para1` (required) is where you describe the project briefly, and it will be visible directly after the title on the project display page. Provide a short description of the project in plain text and add it as shown below:
```javascript
para1: "This is a brief description of the project.",
```

### 11. Add the Challenge Client Faced
The `challenge` (required) is where you describe the reason or challenge that led the client to seek your services. Write it in plain text and add it as shown below:
```javascript
challenge: "This was the client's challenge.",
```

### 12. Add Final Results
The `finalResult` (required) is where you write about the results you delivered to the client. Write it in plain text and add it as shown below:
```javascript
finalResult: "These are the final results delivered.",
```

---

## Final Example Portfolio Object
```javascript
{
  id: 102,
  imageSrc: "/assets/img/portfolio/portfolio-pd/portfolio102_1.jpg",
  itemsImages: ["/assets/img/portfolio/portfolio-pd/portfolio102_2.jpg", "/assets/img/portfolio/portfolio-pd/portfolio102_3.jpg"],
  categoryLinks: ["Web Design", "UI/UX Design"],
  title: "Sample Landing Page Design",
  category: "Product Design",
  type: "pd",
  client: "Sample Client",
  date: "December, 2024",
  para1: "This is a brief description of the project.",
  challenge: "This was the client's challenge.",
  finalResult: "These are the final results delivered."
}
```
 
## License

This project is proprietary and is not intended for public distribution or reuse. All rights are reserved by TECVITY.