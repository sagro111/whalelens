import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 1rem;
`;

export const Nav = styled.nav`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MenuItem = styled.button<{ $isActive: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme, $isActive }) => ($isActive ? theme.icon.active : theme.icon.primary)};
    background-color: transparent;
    border: 0;
    font-size: 0.75rem;

    & svg {
        margin-bottom: 0.125rem;
    }
`;
