import { FC, PropsWithChildren } from "react";

export const GridItem: FC<PropsWithChildren> = ({ children }) => {
  return <li>{children}</li>;
};
