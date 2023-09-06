import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    ListScreen: { title: string, subTitle: string };
};

export type ListScreenProps = NativeStackScreenProps<RootStackParamList, 'ListScreen'>;

