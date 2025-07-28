import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { data, error } = await supabase.from("pages").select("*").eq("slug", params.slug).single()

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 404 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch page" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const body = await request.json()
    const { title, content, images, status } = body

    const { data, error } = await supabase
      .from("pages")
      .update({
        title,
        content,
        images: images || [],
        status: status || "published",
        updated_at: new Date().toISOString(),
      })
      .eq("slug", params.slug)
      .select()

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data: data[0] })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update page" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { error } = await supabase.from("pages").delete().eq("slug", params.slug)

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to delete page" }, { status: 500 })
  }
}
