import { NextResponse } from 'next/server';
import logger from '@/app/api/logger';
import { isValidEmail } from '@/app/api/utils';
import { triggerSESVerification } from "@/app/api/controllers" 

//to send verification email to the email address, accepts array of emails, route is not used anywhere in the app
export const POST = async (req) => {
  try {
    const requestBody = await req.json();
    const emails = requestBody;

    if (!Array.isArray(emails)) {
      return NextResponse.json({ message: "Invalid data format. Expected an array of emails." }, { status: 400 });
    }

    const results = await Promise.all(
      emails.map(async (email) => {
        if (isValidEmail(email)) {
          const result = await triggerSESVerification(email);
          if (result.success) {
            logger.info(`Verification email sent to: ${email}`);
            return { email, status: 'Verification email sent' };
          } else {
            return { email, status: `Failed: ${result.message}` };
          }
        } else {
          return { email, status: 'Invalid email format' };
        }
      })
    );

    return NextResponse.json({ results }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
