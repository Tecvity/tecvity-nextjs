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

 
## License

This project is proprietary and is not intended for public distribution or reuse. All rights are reserved by TECVITY.