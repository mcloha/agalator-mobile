import React from 'react';
import styled from 'styled-components/native';
import { Icon } from '../Icon';
const IconButtonRoot = styled.TouchableOpacity`
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const IconButton = props => {
    return (
        <IconButtonRoot onPress={props.onPress}>
            <Icon {...props} />
        </IconButtonRoot>
    );
};

export default IconButton;
