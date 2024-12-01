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
  - [Blog Post Contriution Guide](#blog-post-contribution-guide)
  - [Service Addition Guide](#service-addition-guide)
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
   - [1. Add an `id` for the Blog Post](#1-add-an-id-for-the-blog-post)
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

### 1. Add an id for the Blog Post
Assign an id that is one value greater than the previous blog post. If the previous Blog id is `1` use `2` Example:
```javascript 
id: 2,
```

### 2. Add a High-Quality Blog Image
Upload an image (dimensions: **1080x600**) to the directory `public/assets/img/blog`. Add the image path:
```javscript 
image: '/assets/img/blog/newBlog2.jpg', 
```

### 3. Add a Small Blog Image
Upload a smaller version (dimensions: **180x140**) and add its path:
```javascript 
smallImageUrl: '/assets/img/blog/newMiniBlog2.jpg', 
```

### 4. Add the Post Date
Use the format `Month DD, YYYY`. Example:
```javascript 
date: 'November 1, 2024', 
```

### 5. Assign a Category
Choose an existing category from `data/categories-tags.js`. If you want to add one of your own add it to the `categories` list and then use it. Example:
```javascript
 category: 'category', 
```

### 6. Add a Title
Add a descriptive title. Avoid symbols or random characters. Example:
```javascript
 title: 'Your New Blog Post', 
```

### 7. Add Tags
Include at least one tag as an array, choose tags form the tags list in `data/categories-tags.js` or add your own tags to the list and then use it. Example:
```javascript
tags: ['Tag1', 'Tag2', 'Tag3'],
 ```

### 8. Add an Icon
Use the standard icon path, you don't need a new one:
```javascript
icon: '/assets/img/icon/arrow-left-top.svg',
 ```

### 9. Add the Author's Name
Example:
```javascript
author: 'Author 1', 
```

### 10. Add the Author's Quote
Example:
```javascript
authorQuote: 'Technology + Creativity = Tecvity!', 
```

### 11. Add the Author's Image
Upload an image to "public/assets/img/team" or use a URL. Example:
```javascript
 authorImage: '/assets/img/team/author1.png', 
 ```

### 12. Add the Author's Profile
For TECVITY members, include your profile path. Otherwise, set it to null. Example:
```javascript
 authorProfile: '/founders/Najam-Ul-Saqib', ` or ` authorProfile: null, 
```

### 13. Add Blog Content
Add the introduction and sections:
```javascript
 content: { 
    introduction: 'We believe that the key to our success is our team. ...', 
    sections: [ { heading: 'Heading', content: 'Some content' } ] 
  } 
  ```

### 14. Add Blog Sections
Include one or more sections with `heading` and `content` or `list` or `services`:
```javascript
content: {
    introduction: "This is a brief introduction to our sample blog post.",
    sections: [
      {
        heading: "Key Highlights",
        list: [
          { title: "sample title", description: "sample" },
          { title: "sample title", description: "sample" }
        ]
      },
      {
        heading: "Our Approach",
        content: "We focus on understanding client needs and delivering tailor-made solutions."
      },
      {
        heading: "Services Overview",
        services: [
          { title: "sample", description: "sample description" },
          { title: "sample", description: "sample description" }
        ]
      }
    ]
  } 
  ```

---

## Final Example BlogPost Object
```javascript
 {
  id: 2,
  image: '/assets/img/blog/newBlog2.jpg',
  smallImageUrl: '/assets/img/blog/newMiniBlog2.jpg',
  date: 'November 1, 2024',
  category: 'category',
  title: 'Your New Blog Post',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  icon: '/assets/img/icon/arrow-left-top.svg',
  author: 'Author 1',
  authorQuote: 'Technology + Creativity = Tecvity!',
  authorImage: '/assets/img/team/author1.png',
  authorProfile: '/founders/Najam-Ul-Saqib',
  content: {
    introduction: 'We believe that the key to our success is our team. ...',
    sections: [
      {
        heading: 'Section Heading',
        content: 'Detailed content goes here.',
      }
    ]
  }
} 
```

---

 
## License

This project is proprietary and is not intended for public distribution or reuse. All rights are reserved by TECVITY.