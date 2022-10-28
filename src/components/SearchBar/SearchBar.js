import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InputText } from '../InputText';
import { BarCode } from '../../assets/icons';
import styled from 'styled-components/native';

const ScanButton = ({ props }) => {
    const navigation = useNavigation();
    const handleScanClick = () => {
        navigation.navigate({
            name: 'Scanner',
        });
    };
    return (
        <TouchableOpacity onPress={handleScanClick}>
            <BarCode width={30} height={30} fill="black" {...props} />
        </TouchableOpacity>
    );
};

const SearchBar = () => {
    const [searchBarValue, setSearchBarValue] = useState('');
    return (
        <View style={styles.searchBarRoot}>
            <InputText
                placeholder="Search..."
                variant="outlined"
                value={searchBarValue}
                onChangeText={setSearchBarValue}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarRoot: {
        flex: 1,
        width: '100%',
    },
    searchBarInput: {},
});

export default SearchBar;
