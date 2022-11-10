import React, { useEffect, useState, useMemo } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import SearchBar from './SearchBar';

const Root = styled.View`
    flex: 1;
    padding: 10px;
    background: ${props => props.theme.background};
`;

const StyledList = styled.FlatList`
    flex: 1;
`;

const Item = styled.View`
    flex: 1;
    padding: 10px;
    background: ${props => props.theme.additional};
    border-radius: 4px;
`;

const Text = styled.Text`
    color: ${props => props.theme.primary};
`;

const ItemSeperator = styled.View`
    height: 10px;
`;

const Cart = props => {
    console.log(props);
    const { route } = props;
    const [products, setProducts] = useState([]);

    const { data } = route?.params || {};

    useEffect(() => {
        if (data) {
            const exists = products.find(
                existingProduct => existingProduct.itemCode === data.itemCode,
            );
            if (exists) {
                Alert.alert('Item Exists', 'Item already exists in the cart');
                return;
            }
            setProducts([...products, data]);
            route.params = {};
        }
    }, [data]);

    const total = useMemo(() => {
        return products.reduce((sum, product) => {
            const { priceHistory } = product;
            const { prices } = priceHistory[0];
            const priceObj = prices[0];
            const price = Number(priceObj?.price) || 0;
            return sum + price;
        }, 0);
    }, [products]);

    const renderProducts = ({ item }) => {
        const { name, itemCode, updatedAt, priceHistory } = item;
        const { prices } = priceHistory[0];
        const priceObj = prices[0];
        const price = Number(priceObj?.price) || 0;
        return (
            <Item>
                <Text>Name: {name}</Text>
                <Text>CODE: {itemCode}</Text>
                <Text>PRICE: {price}₪</Text>
                <Text>UPDATED: {updatedAt}</Text>
            </Item>
        );
    };
    return (
        <Root>
            <SearchBar />
            <ItemSeperator />
            <StyledList
                data={products}
                renderItem={renderProducts}
                keyExtractor={product =>
                    `${product.itemId}${new Date().getMilliseconds()}`
                }
                ItemSeparatorComponent={ItemSeperator}
            />
            <Text>Total: {total}</Text>
        </Root>
    );
};

export default Cart;
