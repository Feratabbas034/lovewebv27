import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {
  try {
    const { data, error } = await supabase.from("pages").select("*").order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch pages" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, slug, content, images, status } = body

    const { data, error } = await supabase
      .from("pages")
      .insert([
        {
          title,
          slug,
          content,
          images: images || [],
          status: status || "published",
        },
      ])
      .select()

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data: data[0] })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create page" }, { status: 500 })
  }
}
