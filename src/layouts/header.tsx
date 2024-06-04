import Image from "next/image";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="p-5 w-full flex items-center justify-center">
      <Image src={"/images/logo.svg"} width={350} height={176} alt="logo" />
    </header>
  );
};
