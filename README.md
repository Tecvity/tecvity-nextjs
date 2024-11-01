# TECVITY

*Agency Website for TECVITY*

---

## Table of Contents

- [Overview](#overview)
- [Services](#services)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Email Configuration](#email-configuration)
- [Database](#database)
- [License](#license)

---

## Overview

TECVITY is a tech-focused agency established in 2022, specializing in providing solutions related to information security and compliance, web and mobile design, web development, branding, and logo design.

---

## Services

The agency provides a variety of specialized services, including:

- *Branding and Logo Design*: Crafting unique and memorable brand identities to help businesses stand out.
- *Web Development*: Developing high-quality, responsive, and scalable websites using modern web technologies.
- *Desktop Application Development*: Building efficient and reliable desktop applications tailored to client needs.
- *Information Security and Compliance*: Ensuring systems are secure and compliant with industry standards.
- *Product Design*: Designing user-friendly and aesthetically appealing digital products.

---

## Tech Stack

- *Frontend*: [Next.js](https://nextjs.org/) (App Router)
- *Backend*: API routes in Next.js
- *Database*: AWS DynamoDB
- *Email Service*: AWS SES
- *Hosting*: [Netlify](https://www.netlify.com/)

---

## Setup and Installation

1. *Clone the repository:*
   ```bash
   git clone https://github.com/your-repo/project-name.git
   cd project-name
   ```

   2. *Install dependencies:*
   ```bash
   npm install
   ```

   3. *Run the development server:*
   ```bash
   npm install
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


components/: Reusable UI components.

app/: Next.js pages.

app/api/: API route handlers for backend functionality.

styles/: Stylesheets (global and module-specific).

data/: static data

public/: Static assets.

utils/: Utility functions and helpers.


## Email Configuration

The website uses AWS SES for email notifications. Make sure you have verified your email domain in the AWS SES console and properly configured the environment variables in .env.local.




## Database

AWS DynamoDB is utilized for storing dynamic content, including blog posts comments. Ensure your AWS permissions are configured to access and manage DynamoDB tables as required.




## License

This project is proprietary and is not intended for public distribution or reuse. All rights are reserved by TECVITY.

This version is structured and ready to be used as a complete README.md file. Let me know if you need any more modifications or additions!