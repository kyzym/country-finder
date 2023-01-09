import styled from "styled-components";

export const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--color-text);
  font-size: var(--fs-sm);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--colors-bg);
    box-shadow: var(--shadow-hovered);
  }
`;
