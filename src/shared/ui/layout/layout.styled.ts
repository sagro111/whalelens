import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 1rem 2rem;
  margin: 0 -1rem;
  overflow-y: auto;
  height: calc(100vh - 4rem);
`;

export const MenuContainer = styled.div`
  flex: 1;
`;
