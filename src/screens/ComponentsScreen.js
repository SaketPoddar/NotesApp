import react from 'react';
import {Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const ComponentsScreen = () =>{
    return <Text style={styles.textStyle}>This is a Components Screen</Text>;
};

const styles= StyleSheet.create({
    textStyle: {
        fontSize: moderateScale(25),
    }
});

export default ComponentsScreen;