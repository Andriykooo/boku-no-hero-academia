import { heroesApi } from "@/constants/endpoints/heroes";
import { Hero } from "@/types/hero.type";
import { ResponseType } from "@/types/response.type";

export async function getHeroes(): Promise<ResponseType<Hero[]> | undefined> {
  try {
    const res = await fetch(heroesApi.getHeroes);
    console.log(res);

    return res.json();
  } catch (e) {
    console.log(e);
  }
}

export async function getHero(
  id: string
): Promise<(ResponseType<Hero> & { nextHeroId: number }) | undefined> {
  try {
    const res = await fetch(heroesApi.getHeroById(+id));
    console.log(res);
    
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
