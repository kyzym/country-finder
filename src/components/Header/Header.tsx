import { useCleanup } from "../../features/controls/use-cleanup";
import { ThemeSwitcher } from "../../features/theme/ThemeSwitcher";
import { Container } from "../Container/Container.styled";
import { HeaderEl, Title, Wrapper } from "./Header.styled";
import { FcGlobe } from "react-icons/fc";

export const Header = () => {
  const cleanUp = useCleanup();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={cleanUp}>
            <FcGlobe size={56} />
            What country is this?
          </Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
