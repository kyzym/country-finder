import { ReactNode } from "react";
import { Wrapper } from "./List.styled";

interface ListProps {
  children: ReactNode;
}

export const List = ({ children }: ListProps) => {
  return <Wrapper>{children}</Wrapper>;
};
