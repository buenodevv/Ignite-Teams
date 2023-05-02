import styled from "styled-components/native";

export const Container = styled.View `
    width: 100% ;
    margin: 32px 0;
`;

export const Title = styled.Text`
    text-align: center;

    font-size: ${({ theme }) => theme.FONT_SIZE.GG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.CORES.BRANCO};
    
`
export const Subtitle = styled.Text`
    text-align: center;

    font-size: ${({ theme }) => theme.FONT_SIZE.DM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.CORES.GRAY_400};
    
`