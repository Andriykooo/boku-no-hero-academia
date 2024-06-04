import { GridItem } from "@/components/grid/grid-item";
import { GridList } from "@/components/grid/grid-list";
import { HeroCard } from "@/components/hero/hero-card";
import { Centered } from "@/layouts/centered";
import { Header } from "@/layouts/header";
import { getHeroes } from "@/services/heroes.service";
import { notFound } from "next/navigation";

export default async function Heroes() {
  const res = await getHeroes();

  return (
    <>
      <Header />
      <Centered>
        <GridList>
          {res?.data.map((hero) => {
            return (
              <GridItem key={hero.id}>
                <HeroCard {...hero} />
              </GridItem>
            );
          })}
        </GridList>
      </Centered>
    </>
  );
}
