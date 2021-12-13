import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const ratio = 228 / 362;
export const ICON_WIDTH = width * 0.15;
export const ICON_HEIGHT = ICON_WIDTH * ratio;

export const CARD_WIDTH = width * 0.7;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
