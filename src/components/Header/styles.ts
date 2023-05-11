import { CaretLeft } from 'phosphor-react-native';
import styled from 'styled-components/native'

export const Container = styled.View`
width: 100%;
padding: 12px;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`
export const BackButton = styled.TouchableOpacity`
 flex: 1;
 size: 32px;
`

export const BackIcon = styled(CaretLeft).attrs(({theme})=>({ 
    color: theme.COLOR.WHITE,
    size: 32,
}))``;


