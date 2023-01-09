import { ReactNode } from "react";
import { Container } from "../Container/Container.styled";
import { Wrapper } from "./Main.styled";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
