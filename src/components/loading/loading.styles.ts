import styled from "styled-components";

export const LoadingComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
