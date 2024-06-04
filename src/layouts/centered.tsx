import { FC, PropsWithChildren } from "react";

export const Centered: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center max-w-[1280px] mx-auto">{children}</div>
  );
};
