import React from "react";
import type { PropsWithChildren } from "react";

import {
    View, 
    Text,
    StyleSheet,
} from 'react-native'

type CurBtnProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurBtn = (props: CurBtnProps): JSX.Element => {
    return(
        <View style={styles.BtnContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    BtnContainer :{
        alignItems: 'center'
    },
    flag :{
        fontSize: 28,
        color:"#ffffff",
        marginBottom: 4
    },
    country : {
        fontSize: 14,
        color:"#28ff20",
        marginBottom: 4
    }
})

export default CurBtn