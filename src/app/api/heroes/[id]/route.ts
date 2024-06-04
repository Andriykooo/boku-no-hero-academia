import { heroes } from "@/mock/heroes";
import { Params } from "@/types/params.type";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: Params<{ id: string }>) {
  let nextHeroIndex = 0;

  const hero = heroes.find((hero, index) => {
    if (index < heroes.length - 1) {
      nextHeroIndex = index + 1;
    } else {
      nextHeroIndex = 0;
    }

    return hero.id === +params.id;
  });

  if (!hero) {
    return new NextResponse("Error: Not Found", {
      status: 404,
    });
  }

  return NextResponse.json({
    data: hero,
    nextHeroId: heroes[nextHeroIndex].id,
  });
}
