import { heroes } from "@/mock/heroes";
import { Hero } from "@/types/hero.type";

export async function GET() {
  return Response.json({ data: heroes });
}
