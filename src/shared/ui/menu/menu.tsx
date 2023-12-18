import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SCREENS = [
    {
        label: 'Home',
        icon: '',
    },
];

export const Menu = () => {
    return <Nav>
        {SCREENS.map((menuItem) => (
            <div key={menuItem.label}>{menuItem.label}</div>
        ))}
    </Nav>;
};
