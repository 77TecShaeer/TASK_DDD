import {Dimensions, StatusBar, Platform} from 'react-native';

const isAndroid = Platform.OS === 'android' && Platform.Version > 26;
const {width: screenWidth, height: screenHeight} = Dimensions.get(
  isAndroid ? 'screen' : 'window',
);


const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const sWidth = screenWidth;

const sHeight = isAndroid
  ? screenHeight + StatusBar.currentHeight!
  : screenHeight;

const hScale = (size:number) => (sWidth / guidelineBaseWidth) * size;

const vScale = (size:number) => (sHeight / guidelineBaseHeight) * size;

const fScale = (size:number, factor = 1.25) => size + (hScale(size) - size) * factor;

export {sHeight, sWidth, hScale as HS, vScale as VS, fScale as FS};
