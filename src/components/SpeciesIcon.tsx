import React from 'react';
import Male from '../../assets/human-male.svg';
import Female from '../../assets/human-female.svg';
import Wookiee from '../../assets/wookiee.svg';
import Droid from '../../assets/droid.svg';
import Hutt from '../../assets/hutt.svg';
import {ICON_HEIGHT, ICON_WIDTH} from '../utils/dimensionUtil';

interface Map {
  [key: string]: JSX.Element;
}

const iconTypes: Map = {
  male: <Male width={ICON_WIDTH} height={ICON_HEIGHT} />,
  female: <Female width={ICON_WIDTH} height={ICON_HEIGHT} />,
  Wookiee: <Wookiee width={ICON_WIDTH} height={ICON_HEIGHT} />,
  Droid: <Droid width={ICON_WIDTH} height={ICON_HEIGHT} />,
  Hutt: <Hutt width={ICON_WIDTH} height={ICON_HEIGHT} />,
};

const IconComponent = (speciesName: string, gender: string) => {
  if (speciesName === 'Human') {
    let Icon = iconTypes[gender];
    return Icon;
  }
  let Icon = iconTypes[speciesName];
  return Icon;
};

export default IconComponent;
