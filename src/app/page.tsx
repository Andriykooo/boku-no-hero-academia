import { routes } from "@/constants/routes";
import { getHeroes } from "@/services/heroes.service";
import Image from "next/image";
import Link from "next/link";

export default async function Posts() {
  const { data: heroes } = await getHeroes();

  return (
    <main className="size-full">
      <header className="p-5 w-full flex items-center justify-center">
        <Image src={"/images/logo.svg"} width={350} height={176} alt="logo" />
      </header>
      <div className="flex items-center max-w-[1280px] mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 pb-16 pt-0 gap-5 size-full lg:h-auto overflow-auto">
          {heroes.map((hero) => {
            return (
              <li
                key={hero.id}
                className="min-h-[300px] group flex justify-center items-centers relative size-full p-8 overflow-hidden animate-scaleUp"
                style={{ backgroundColor: hero.backgroundColor }}
              >
                <Link href={`${routes.hero}/${hero.id}`} className="size-full">
                  <div
                    style={{ color: hero.secondaryColor }}
                    className="flex justify-between w-full group-hover:opacity-50 duration-300"
                  >
                    <h4 className="relative z-10">
                      {hero.firstName}
                      <br />
                      {hero.lastName}
                    </h4>
                    <span>{hero.rank}</span>
                  </div>
                  <img
                    alt={hero.firstName + hero.lastName}
                    src={hero.picture}
                    className="absolute top-0 animate-slideUp scale-95 group-hover:scale-100 duration-300"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
