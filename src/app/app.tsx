import { GlobalStyles } from '@/app/app.styled.ts';
import { ThemeProvide } from '@/shared/theme/theme.view.tsx';
import { Layout } from '@/shared/ui/layout';

export const App = () => (
    <ThemeProvide>
        <GlobalStyles />
        <Layout>Hello</Layout>
    </ThemeProvide>
);
