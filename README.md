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
   git clone https://github.com/your-repo/project-name.git
   cd project-name
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

## License

This project is proprietary and is not intended for public distribution or reuse. All rights are reserved by TECVITY.

This version is structured and ready to be used as a complete README.md file. Let me know if you need any more modifications or additions!
