"use client";

import { io } from "socket.io-client";

export const socket = io(process.env.NEXT_PUBLIC_FRONTEND_URL || "https://deploy-preview-13--loquacious-pastelito-9eaca0.netlify.app/");