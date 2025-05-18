import styled from "styled-components";
import { Link, type LinkProps } from "@tanstack/react-router";

export const PostComponent = styled(Link)<LinkProps>`
  text-decoration: none;
  position: relative;
  padding-right: 8px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
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
  padding-right: 1rem;
`;

export const Votes = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0px;
  top: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  color: #000;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const UpIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7.5px solid black;
`;
