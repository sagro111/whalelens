import { useUnit } from 'effector-react';
import { ReactNode } from 'react';

import { Layout } from '@/shared/ui/layout';
import { Menu, ScreenId } from '@/shared/ui/menu';

import { onChangeScreen, screenStore$ } from './screens.view-model.ts';

type Props = {
    screens: Record<ScreenId, ReactNode>;
};

export const ScreensWidget = ({ screens }: Props) => {
    const screenId = useUnit(screenStore$);

    return (
        <Layout
            contentComponent={screens[screenId]}
            menuComponent={<Menu activeScreen={screenId} onChangeScreen={onChangeScreen} />}
        />
    );
};
