import styled from "styled-components";

export const Header = styled.div`
  padding: 1rem;
  padding-top: 2rem;
  margin-bottom: 1rem;
`;

export const Spacing = styled.div`
  padding: 0 1rem;
`;

export const Media = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  margin: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  gap: 1rem;
`;

export const Button = styled.button`
  flex: 1;
  background-color: #fff;
  color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e0e0e0;
`;
