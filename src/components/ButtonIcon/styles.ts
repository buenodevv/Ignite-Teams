import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import styled from "styled-components/native";
import theme from "src/theme";

export type ButtoniconTypesStyleProps = 'PRIMARY' | 'SECUNDARY';

type Props = {
    type: ButtoniconTypesStyleProps;
}

export const Container = styled(TouchableOpacity)`
height: 56px;
width: 56px;

justify-content: center;
align-items: center;

margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLOR.GREEN_700 : theme.COLOR.VERMELHO
}))``;