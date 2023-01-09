import styled from "styled-components";

export const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  cursor: text;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  &:hover,
  &:focus {
    box-shadow: var(--shadow-hovered);
  }

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

export const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 1rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;
