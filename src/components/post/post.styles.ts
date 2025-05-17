import styled from "styled-components";

export const PostComponent = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
`;

export const Thumbnail = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  object-fit: cover;
  margin-right: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  text-decoration: none;
`;

export const Description = styled.span`
  font-size: 0.8rem;
  color: #666;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Votes = styled.button<{ isVoted: boolean }>`
  transform: translateX(30px);
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  color: #000;
  background-color: ${({ isVoted }) => (isVoted ? "red" : "#fff")};
`;
