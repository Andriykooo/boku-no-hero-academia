import { HeroInfo } from "@/components/hero/hero-info";
import { getHero, getHeroes } from "@/services/heroes.service";
import { Params } from "@/types/params.type";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data: heroes } = await getHeroes();

  return heroes.map((hero) => ({
    id: hero.id.toString(),
  }));
}

export async function generateMetadata({
  params: { id },
}: Params<{ id: string }>) {
  const { data: hero } = await getHero(id);

  return {
    title: `${hero.firstName} ${hero.lastName}`,
    description: hero.description,
  };
}

export default async function Hero({ params: { id } }: Params<{ id: string }>) {
  const { data: hero, nextHeroId } = await getHero(id);

  if (!hero) {
    notFound();
  }

  return (
    <div
      className="flex size-full justify-center items-center"
      style={{ backgroundColor: hero.backgroundColor }}
    >
      <HeroInfo {...hero} nextHeroId={nextHeroId} />
    </div>
  );
}
