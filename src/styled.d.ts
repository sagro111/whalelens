import 'styled-components';

import { ApplicationTheme } from 'src/shared/theme/types';

declare module 'styled-components' {
    interface DefaultTheme extends ApplicationTheme {
    }
}
