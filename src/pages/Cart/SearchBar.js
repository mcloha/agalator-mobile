import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { InputText } from '../../components/InputText';
import { BarCode } from '../../assets/icons';

const SearchBarRoot = styled.View`
    width: 100%;
`;

const SearchBar = () => {
    const navigation = useNavigation();
    const handleScanClick = () => {
        navigation.navigate({
            name: 'Scanner',
        });
    };
    const [searchBarValue, setSearchBarValue] = useState('');
    return (
        <SearchBarRoot>
            <InputText
                placeholder="Search..."
                variant="outlined"
                value={searchBarValue}
                onChangeText={setSearchBarValue}
                rightIconSVG={BarCode}
                leftIconSVG={null}
                onRightIconPress={handleScanClick}
            />
        </SearchBarRoot>
    );
};

export default SearchBar;
