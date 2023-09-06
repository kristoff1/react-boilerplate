import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ListScreenProps } from '../../routers/routes';

type Item = {
    id: number;
    title: string;
};

const generateData = (start: number, end: number): Item[] => {
    return Array.from({ length: end - start }).map((_, index) => ({
        id: start + index,
        title: `Item ${start + index}`
    }));
};

export default function ListScreen({ route, navigation }: ListScreenProps) {
    const [data, setData] = useState<Item[]>(generateData(0, 10));
    const [loading, setLoading] = useState<boolean>(false);

    const renderFooter = () => {
        if (!loading) return null;
        return (<Text>Loading...</Text>)
    }

    const renderHeader = () => {
        return (<View>
            <Text>{JSON.stringify(route.params.title)}</Text>
            <Text>{JSON.stringify(route.params.subTitle)}</Text>
        </View>)
    }

    const loadMore = useCallback(() => {
        if (!loading) {
            setLoading(true);

            setTimeout(() => {
                setData((prevData) => [
                    ...prevData,
                    ...generateData(prevData.length, prevData.length + 10)
                ]);
                setLoading(false);
            }, 1000);
        }
    }, [loading])
    return (
        <View style={listStyle.container}>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={renderHeader}
                onEndReached={loadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                data={data}
                renderItem={({ item }) => (<View style={{ flex: 1, padding: 16 }}>
                    <Text>{item.title}</Text>
                </View>)} />
        </View>
    );
}

const listStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});