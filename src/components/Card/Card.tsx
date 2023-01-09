import styled from "styled-components";
import { CountryInfo } from "types";
import {
  CardBody,
  CardImage,
  CardList,
  CardTitle,
  Wrapper,
} from "./Card.styled";

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;

interface CardProps extends CountryInfo {
  onClick: () => void;
}

export const Card = ({ img, name, info = [], onClick }: CardProps) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
