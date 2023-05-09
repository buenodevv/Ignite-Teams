import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${({ theme})=> theme.COLOR.GRAY_600};

`;
export const LoadIndicator = styled.ActivityIndicator.attrs(({theme})=>({ color: theme.COLOR.GREEN_700}))``;