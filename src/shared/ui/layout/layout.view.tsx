import { ReactNode } from 'react';

import { Menu } from '@/shared/ui/menu';

import { Container, Content, MenuContainer } from './layout.styled.ts';

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Container>
            <Content>{children}</Content>
            <MenuContainer>
                <Menu />
            </MenuContainer>
        </Container>
    );
};
