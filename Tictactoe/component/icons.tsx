import React from 'react'
import type { PropsWithChildren } from 'react'
import { Switch } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProp = PropsWithChildren <{
    name : string;
}>

const icons = ({name}) => {
switch (name) {
    case 'circle':
        return <Icon name="circle-thin" size={38} color = "#F7CD2E" ></Icon>
        break;

    default:
        break;
}
}

export default icons