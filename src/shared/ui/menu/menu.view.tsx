import { Home, ListChecks, Newspaper, User } from 'lucide-react';

import { Container, MenuItem, Nav } from './menu.styled.ts';
import { Screen, ScreenId } from './menu.types.ts';

const SCREENS: Screen[] = [
    {
        label: 'Home',
        icon: <Home />,
        id: 'home',
    },
    {
        label: 'Lenses',
        icon: <ListChecks />,
        id: 'lenses',
    },
    {
        label: 'News',
        icon: <Newspaper />,
        id: 'news',
    },
    {
        label: 'Profile',
        icon: <User />,
        id: 'profile',
    },
];

type Props = {
    onChangeScreen: (screenId: ScreenId) => void;
    activeScreen: ScreenId;
};

export const Menu = ({ onChangeScreen, activeScreen }: Props) => {
    return (
        <Container>
            <Nav>
                {SCREENS.map(({ icon, label, id }) => (
                    <MenuItem $isActive={activeScreen === id} onClick={() => onChangeScreen(id)} key={id}>
                        {icon} {label}
                    </MenuItem>
                ))}
            </Nav>
        </Container>
    );
};
