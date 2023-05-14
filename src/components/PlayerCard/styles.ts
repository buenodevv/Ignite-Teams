import styled, {css} from "styled-components/native";
import { MaterialIcons} from '@expo/vector-icons'

export const Container = styled.View`
    width: 100%;
    height: 56px;

    background-color: ${({theme})=> theme.COLOR.GRAY_500};

    flex-direction: row;
    align-items: center;

    border-radius: 6px;
    margin-bottom: 16px;
`;

export const Name = styled.Text`
    flex: 1;
    ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.MD};
        color: ${theme.COLOR.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;

export const Icon = styled(MaterialIcons).attrs(({theme})=> ({
    size: 24,
    color: theme.COLOR.GRAY_200
}))`
    margin-left: 16px;
    margin-top: 4px;
`;