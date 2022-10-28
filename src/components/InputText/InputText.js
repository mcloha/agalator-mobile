import React from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { BarCode } from '../../assets/icons';

const InputTextRoot = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    background: ${props => props.theme.additional};
    height: 50px;
    border-radius: 4px;
`;

const StyledTextInput = styled.TextInput`
    flex: 9;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.primary};
`;

const IconButton = styled.TouchableOpacity`
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const StyledBarCode = styled(BarCode)`
    color: ${props => props.theme.primary};
`;

const InputText = ({ value, onChangeText }) => {
    return (
        <InputTextRoot>
            <StyledTextInput
                placeholder="Search..."
                variant="outlined"
                value={value}
                onChangeText={onChangeText}
            />
            <IconButton>
                <StyledBarCode />
            </IconButton>
        </InputTextRoot>
    );
};

export default InputText;
