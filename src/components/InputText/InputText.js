import React from 'react';
import styled from 'styled-components/native';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';

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

const InputText = ({
    value,
    onChangeText,
    placeholder,
    leftIconSVG,
    rightIconSVG,
    onLeftIconPress,
    onRightIconPress,
}) => {
    return (
        <InputTextRoot>
            {leftIconSVG && (
                <IconButton svg={leftIconSVG} onPress={onLeftIconPress} />
            )}
            <StyledTextInput
                placeholder={placeholder}
                variant="outlined"
                value={value}
                onChangeText={onChangeText}
            />
            {rightIconSVG && (
                <IconButton svg={rightIconSVG} onPress={onRightIconPress} />
            )}
        </InputTextRoot>
    );
};

export default InputText;
