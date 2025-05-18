import styled from "styled-components";

export const TabListComponent = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #e2e8f0;
  background-color: #fff;
`;

export const TabComponent = styled.button<{ selected: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ selected }) => (selected ? "#0f172a" : "#64748b")};
  border-bottom: 2px solid ${({ selected }) => (selected ? "#0f172a" : "transparent")};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #334155;
  }
`;

export const TabPanelComponent = styled.div`
  padding: 1rem 0.5rem;
`;
