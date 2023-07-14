/* Core */
import { fetchArts } from "@/app/components/ListView/ArtList";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const fetchedArts = await fetchArts();

  // simulate IO latency
  return NextResponse.json({ data: fetchedArts });
}
