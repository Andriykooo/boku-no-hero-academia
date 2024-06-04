import { GridItem } from "@/components/grid/grid-item";
import { GridList } from "@/components/grid/grid-list";
import { HeroCard } from "@/components/hero/hero-card";
import { Centered } from "@/layouts/centered";
import { Header } from "@/layouts/header";
import { getHeroes } from "@/services/heroes.service";

export default async function Heroes() {
  const { data: heroes } = await getHeroes();

  return (
    <>
      <Header />
      <Centered>
        <GridList>
          {heroes.map((hero) => {
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
