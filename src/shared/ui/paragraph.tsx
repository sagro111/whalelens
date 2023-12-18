import { HTMLAttributes } from 'react';
import styled from 'styled-components';

type TextSize = 'l' | 'm' | 's' | 'xs';

const Text = styled.p<{ $size: TextSize }>`
    color: ${({ theme }) => theme.textColor};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

type Props = HTMLAttributes<HTMLParagraphElement> & {
    bold?: boolean;
    size?: TextSize;
};

export const Paragraph = ({ children, size = 'm', ...rest }: Props) => {
    return (
        <Text {...rest} $size={size}>
            {children}
        </Text>
    );
};
