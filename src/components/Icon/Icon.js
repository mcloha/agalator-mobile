import React from 'react';
import { useTheme } from 'styled-components/native';

const Icon = props => {
    const theme = useTheme();
    const SVGIcon = props.svg;
    return <>{SVGIcon && <SVGIcon style={{ color: theme.primary }} />}</>;
};

export default Icon;
