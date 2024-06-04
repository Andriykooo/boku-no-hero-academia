import { heroes } from "@/mock/heroes";
import { Params } from "@/types/params.type";

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
    return new Response("Error: Not Found", {
      status: 404,
    });
  }

  return Response.json({
    data: hero,
    nextHeroId: heroes[nextHeroIndex].id,
  });
}
