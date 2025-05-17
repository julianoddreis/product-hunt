import styled from "styled-components";

export const ScrollArea = styled.div`
  flex: 1;
  max-height: 100%;
  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
