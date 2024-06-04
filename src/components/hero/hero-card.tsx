import { routes } from "@/constants/routes";
import { Hero } from "@/types/hero.type";
import Link from "next/link";
import { FC } from "react";

export const HeroCard: FC<Hero> = ({
  backgroundColor,
  id,
  secondaryColor,
  firstName,
  lastName,
  rank,
  picture,
}) => {
  return (
    <div
      className="min-h-[300px] group flex justify-center items-centers relative size-full p-8 overflow-hidden animate-scaleUp"
      style={{ backgroundColor }}
    >
      <Link href={`${routes.hero}/${id}`} className="size-full">
        <div
          style={{ color: secondaryColor }}
          className="flex justify-between w-full group-hover:opacity-50 duration-300"
        >
          <h4 className="relative z-10">
            {firstName}
            <br />
            {lastName}
          </h4>
          <span>{rank}</span>
        </div>
        <img
          alt={firstName + lastName}
          src={picture}
          className="absolute top-0 animate-slideUp scale-95 group-hover:scale-100 duration-300"
        />
      </Link>
    </div>
  );
};
