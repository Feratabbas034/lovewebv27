import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import nodemailer from "nodemailer"

export async function GET() {
  const results = {
    timestamp: new Date().toISOString(),
    tests: {} as Record<string, any>,
  }

  // Test Database Connection
  try {
    const { data, error } = await supabase.from("orders").select("count").limit(1)
    results.tests.database = {
      status: error ? "❌ FAILED" : "✅ SUCCESS",
      message: error ? error.message : "Database connection successful",
      data: data,
    }
  } catch (error) {
    results.tests.database = {
      status: "❌ FAILED",
      message: error instanceof Error ? error.message : "Database connection failed",
    }
  }

  // Test Email Configuration
  try {
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    await transporter.verify()
    results.tests.email = {
      status: "✅ SUCCESS",
      message: "Email configuration is valid",
      config: {
        user: process.env.GMAIL_USER,
        passLength: process.env.GMAIL_PASS?.length || 0,
      },
    }
  } catch (error) {
    results.tests.email = {
      status: "❌ FAILED",
      message: error instanceof Error ? error.message : "Email configuration failed",
      config: {
        user: process.env.GMAIL_USER || "NOT_SET",
        passSet: !!process.env.GMAIL_PASS,
      },
    }
  }

  // Test Cloudinary Configuration
  results.tests.cloudinary = {
    status: process.env.CLOUDINARY_CLOUD_NAME ? "✅ SUCCESS" : "⚠️ WARNING",
    message: process.env.CLOUDINARY_CLOUD_NAME ? "Cloudinary configured" : "Cloudinary not configured (optional)",
    config: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME || "NOT_SET",
      apiKeySet: !!process.env.CLOUDINARY_API_KEY,
      apiSecretSet: !!process.env.CLOUDINARY_API_SECRET,
    },
  }

  // Test Environment Variables
  results.tests.environment = {
    status: "ℹ️ INFO",
    variables: {
      NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      GMAIL_USER: !!process.env.GMAIL_USER,
      GMAIL_PASS: !!process.env.GMAIL_PASS,
      CLOUDINARY_CLOUD_NAME: !!process.env.CLOUDINARY_CLOUD_NAME,
    },
  }

  return NextResponse.json(results, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
