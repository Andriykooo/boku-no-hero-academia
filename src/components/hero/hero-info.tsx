import { routes } from "@/constants/routes";
import { Hero } from "@/types/hero.type";
import classNames from "classnames";
import { Lexend } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const lexend = Lexend({ weight: "500", subsets: ["latin"] });

export const HeroInfo: FC<Hero & { nextHeroId: number }> = ({
  picture,
  card,
  firstName,
  lastName,
  description,
  rank,
  quirk,
  mainColor,
  secondaryColor,
  nextHeroId,
}) => {
  return (
    <section
      className="size-full lg:h-[520px] lg:w-[1080px] relative p-9 shadow-[20px_20px_20px_0_rgba(32,30,30,0.5)] animate-scaleUp overflow-hidden lg:overflow-visible"
      style={{ color: mainColor }}
    >
      <Image
        alt="card"
        fill
        src={card}
        objectFit="cover"
        className="lg:block hidden"
      />
      <img
        src={picture}
        alt={firstName + lastName}
        className="absolute left-1/2 -translate-x-1/4 top-12 animate-slideUp pointer-events-none"
      />
      <div className="z-10 relative flex flex-col justify-between size-full">
        <div className="text-3xl flex justify-between items-center">
          <Link href={routes.menu}>Menu</Link>
          <span style={{ color: secondaryColor }}>{rank}</span>
        </div>
        <div>
          <div className="mb-8 max-w-[377px] z-10 relative lg:static">
            <h1 className="text-4xl mb-4">
              {firstName}
              <br />
              {lastName}
            </h1>
            <p
              style={{ color: secondaryColor }}
              className={classNames("text-sm mb-4", lexend.className)}
            >
              {description}
            </p>
            <div className="text-xl">
              <span style={{ color: secondaryColor }}>Quirck: </span>
              {quirk}
            </div>
          </div>
          <div className="flex justify-end w-full">
            <Link
              href={`${routes.hero}/${nextHeroId}`}
              style={{ color: secondaryColor }}
              className="flex flex-col gap-1 text-sm"
            >
              Next Hero
              <span
                className="w-full h-[4px] rounded"
                style={{ backgroundColor: secondaryColor }}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
