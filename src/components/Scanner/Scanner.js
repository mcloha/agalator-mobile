import { Alert, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

axios.defaults.baseURL = 'http://188.166.195.191';

const Scanner = () => {
    const [barCode, setBarCode] = useState('');

    useEffect(() => {
        getItemByItemCode();
    }, [barCode]);

    const handleBarCodeRead = ({ data }) => {
        if (barCode !== data) {
            setBarCode(data);
        }
    };
    const getItemByItemCode = async () => {
        try {
            const { data } = await axios.get(`/products/items/item/${barCode}`);
            console.log(data);
            Alert.alert(data.name, '', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return data;
        } catch (error) {
            console.log(error);
            setTimeout(() => {
                setBarCode('');
            }, 3000);
            return {};
        }
    };
    return (
        <View style={{ flex: 1 }}>
            <RNCamera
                defaultTouchToFocus
                flashMode={'auto'}
                mirrorImage={false}
                onBarCodeRead={handleBarCodeRead}
                captureAudio={false}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera phone',
                }}
                style={{ flex: 1 }}
            />
        </View>
    );
};

export default Scanner;
