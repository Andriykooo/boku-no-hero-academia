import { FC, PropsWithChildren } from "react";

export const GridList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 pb-16 pt-0 gap-5 size-full lg:h-auto overflow-auto">
      {children}
    </ul>
  );
};
