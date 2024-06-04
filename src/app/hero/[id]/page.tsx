import { HeroInfo } from "@/components/hero/hero-info";
import { getHero, getHeroes } from "@/services/heroes.service";
import { Params } from "@/types/params.type";
import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//   const res = await getHeroes();

//   if (!res) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.data.map((hero) => ({
//     id: hero.id.toString(),
//   }));
// }

// export async function generateMetadata({
//   params: { id },
// }: Params<{ id: string }>) {
//   const res = await getHero(id);

//   if (!res) {
//     throw new Error("Failed to fetch data");
//   }

//   return {
//     title: `${res.data.firstName} ${res.data.lastName}`,
//     description: res.data.description,
//   };
// }

export default async function Hero({ params: { id } }: Params<{ id: string }>) {
  // const res = await getHero(id);

  // if (!res) {
  //   notFound();
  // }

  return (
   ""
  );
}
