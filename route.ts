import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/home-beta/server";

export async function GET() {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json({
      ok: true,
      mode: "demo",
      stats: {
        users: 10,
        connections: 38,
        topFeature: "Alertes simples",
        averageRating: 8.2,
        returnRate: 62
      }
    });
  }

  const [{ data: feedback }, { data: events }] = await Promise.all([
    supabase.from("home_beta_feedback").select("*").order("created_at", { ascending: false }),
    supabase.from("home_beta_events").select("*").order("created_at", { ascending: false })
  ]);

  const feedbackRows = feedback ?? [];
  const eventRows = events ?? [];
  const featureCounts = feedbackRows.reduce<Record<string, number>>((acc, item) => {
    const key = String(item.favorite_feature || "Non renseigne");
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
  const topFeature = Object.entries(featureCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "Pas encore";
  const averageRating = feedbackRows.length
    ? feedbackRows.reduce((sum, item) => sum + Number(item.rating || 0), 0) / feedbackRows.length
    : 0;
  const users = new Set([...feedbackRows, ...eventRows].map((item) => item.user_name || "Beta testeur")).size;
  const connections = eventRows.filter((item) => item.event_name === "page_view").length;
  const returnRate = users ? Math.round((connections / Math.max(1, users * 2)) * 100) : 0;

  return NextResponse.json({
    ok: true,
    mode: "supabase",
    stats: {
      users,
      connections,
      topFeature,
      averageRating,
      returnRate
    }
  });
}
