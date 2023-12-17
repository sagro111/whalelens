import { ReactNode } from 'react';

import { Container, Content, MenuContainer } from './layout.styled.ts';

type Props = {
    contentComponent: ReactNode;
    menuComponent: ReactNode;
};

export const Layout = ({ contentComponent, menuComponent }: Props) => {
    return (
        <Container>
            <Content>{contentComponent}</Content>
            <MenuContainer>{menuComponent}</MenuContainer>
        </Container>
    );
};
