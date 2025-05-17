import styled from "styled-components";

export const NavBarComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
`;

export const Avatar = styled.img`
  min-width: 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #c0c0c0;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid #c0c0c0;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;
