import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {
  try {
    const { data, error } = await supabase.from("orders").select("*").order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customer_name, partner_name, email, phone, package: packageType, story, photos } = body

    // Calculate price based on package
    const price = packageType === "premium" ? 150 : 100

    const { data, error } = await supabase
      .from("orders")
      .insert([
        {
          customer_name,
          partner_name,
          email,
          phone,
          package: packageType,
          story,
          photos: photos || 0,
          price,
          status: "pending",
        },
      ])
      .select()

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    // Send confirmation email
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: email,
          subject: "AşkSitesi - Sipariş Onayı",
          customerName: customer_name,
          partnerName: partner_name,
        }),
      })
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
      // Don't fail the order creation if email fails
    }

    return NextResponse.json({ success: true, data: data[0] })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 })
  }
}
