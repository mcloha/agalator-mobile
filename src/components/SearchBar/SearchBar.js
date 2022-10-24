import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, IconButton } from '@react-native-material/core';
import { BarCode } from '../../assets/icons';

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
            <TextInput
                placeholder="Search..."
                variant="outlined"
                value={searchBarValue}
                onChangeText={setSearchBarValue}
                trailing={props => (
                    <IconButton
                        icon={props => <ScanButton {...props} />}
                        {...props}
                    />
                )}
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
