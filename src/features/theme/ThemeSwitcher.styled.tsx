import styled from "styled-components";

export const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  padding: 0.3rem;

  &:hover,
  &:focus {
    box-shadow: var(--shadow-hovered);
  }
`;
