import styled from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
  flex: 1;
`;

export const TabListComponent = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1rem;
`;

export const TabComponent = styled.button<{ isSelected: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ isSelected }) => (isSelected ? "#0f172a" : "#64748b")};
  border-bottom: 2px solid ${({ isSelected }) => (isSelected ? "#0f172a" : "transparent")};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #334155;
  }
`;

export const TabPanelComponent = styled.div`
  padding: 1rem 0;
`;
