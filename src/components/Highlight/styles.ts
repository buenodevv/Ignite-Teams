import styled, { css } from "styled-components/native";

export const Container = styled.View `
    width: 100% ;
    margin: 32px 0;
`;

export const Title = styled.Text`
text-align: center;

    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.GG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLOR.WHITE};
    `};
    

    
`
export const Subtitle = styled.Text`
    text-align: center;
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLOR.GRAY_400};
    `};
`