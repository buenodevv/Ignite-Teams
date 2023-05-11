import { TextInputProps } from 'react-native';

import { Container } from './styles';
import { useTheme } from 'styled-components/native';

export function Input({ ...rest }: TextInputProps) {

    const { COLOR } = useTheme();

    return (
        <Container
            placeholderTextColor={COLOR.GRAY_300}
            {...rest}
        />
    )
}