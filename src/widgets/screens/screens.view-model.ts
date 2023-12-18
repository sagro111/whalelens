import { createEvent, createStore } from 'effector';

import { ScreenId } from '@/shared/ui/menu';

export const onChangeScreen = createEvent<ScreenId>();

export const screenStore$ = createStore<ScreenId>('home').on(onChangeScreen, (_, screenId) => screenId);
