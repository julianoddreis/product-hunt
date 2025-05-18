import styled from "styled-components";

export const Thumbnail = styled.img<{
  readonly size?: number;
}>`
  width: ${({ size }) => size ?? 2}rem;
  height: ${({ size }) => size ?? 2}rem;
  border-radius: 0.5rem;
  object-fit: cover;
  margin-right: 0.5rem;
`;
