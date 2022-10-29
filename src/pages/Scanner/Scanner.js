import React, { useState, useEffect, useCallback } from 'react';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

axios.defaults.baseURL = 'http://188.166.195.191';

const Root = styled.View`
    flex: 1;
    padding: 10px;
    background: ${props => props.theme.background};
`;

const BarCodeScanner = styled(RNCamera)`
    flex: 1;
`;

const Scanner = () => {
    const navigation = useNavigation();

    const [barCode, setBarCode] = useState('');

    useEffect(() => {
        getItemByItemCode();
    }, [getItemByItemCode, barCode]);

    const handleBarCodeRead = ({ data }) => {
        if (data && barCode !== data) {
            setBarCode(data);
        }
    };
    const getItemByItemCode = useCallback(async () => {
        try {
            if (!barCode) {
                return;
            }
            const { data: item } = await axios.get(
                `/products/items/item/${barCode}`,
            );
            const { data: product } = await axios.get(
                `/products/${item.itemId}`,
            );
            navigation.navigate({
                name: 'Cart',
                params: {
                    data: product,
                },
            });
        } catch (error) {
            console.log(error);
            navigation.navigate({
                name: 'Cart',
            });
        }
    }, [barCode]);

    return (
        <Root>
            <BarCodeScanner
                defaultTouchToFocus
                flashMode={'auto'}
                mirrorImage={false}
                onBarCodeRead={handleBarCodeRead}
                captureAudio={false}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera phone',
                }}
            />
        </Root>
    );
};

export default Scanner;
