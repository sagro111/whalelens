import { ApplicationTheme } from 'src/shared/theme/types';
import 'styled-components';

declare module 'styled-components' {
    interface DefaultTheme extends ApplicationTheme {}
}
