import { heroesApi } from "@/constants/endpoints/heroes";
import { Hero } from "@/types/hero.type";
import { ResponseType } from "@/types/response.type";

export async function getHeroes(): Promise<ResponseType<Hero[]>> {
  const res = await fetch(heroesApi.getHeroes);
  return res.json();
}

export async function getHero(
  id: string
): Promise<ResponseType<Hero> & { nextHeroId: number }> {
  const res = await fetch(heroesApi.getHeroById(+id));
  return res.json();
}
