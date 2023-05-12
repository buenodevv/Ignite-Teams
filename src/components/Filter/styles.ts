import { TouchableOpacity } from 'react-native';
import styled, {css} from 'styled-components/native'

export type FilterStylesProps = {
    isActive?: boolean;
}

export const Container =styled(TouchableOpacity)<FilterStylesProps>`
    
`;