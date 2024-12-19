import { ImageSourcePropType } from 'react-native';

export interface IPokemon {
    id: number;
    name: string;
    image: ImageSourcePropType
    description: string;
}
