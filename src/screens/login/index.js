import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TextInput} from '../../components';
import icons from '../../helper/iconConstant';
import images from '../../helper/imageConstant';
import Button from '../../components/common/Button';
import {colors} from '../../utils';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={style.mainContainer}>
      <Image
        source={images.logo}
        style={style.imageLogoStyel}
        resizeMode="contain"
      />
      <Text style={style.title}>સ્વાગત છે!</Text>

      <Text style={style.subTitle}>લૉગ ઇન કરવાનું ચાલુ રાખો</Text>
      <TextInput
        inputStyle={{}}
        placeholder={'તમારું યુઝર નામ દાખલ કરો'}
        placeholderTextColor={colors.primary}
        value={email}
        isIconView={true}
        icon={icons.ic_user}
        onChangeText={val => setEmail(val)}
        secureTextEntry={false}
        onFocus={() => {}}
        onBlur={() => {}}
        visible={false}
        onButtonPress={() => {}}
      />
      <View style={style.divider} />
      <TextInput
        inputStyle={{}}
        placeholder={'તમારો પાસવર્ડ નાખો'}
        placeholderTextColor={colors.primary}
        value={password}
        isIconView={true}
        icon={icons.ic_lock}
        onChangeText={val => setPassword(val)}
        secureTextEntry={true}
        onFocus={() => {}}
        onBlur={() => {}}
        visible={false}
        onButtonPress={() => {}}
      />

      <Button
        title={'પ્રવેશ કરો'}
        buttonStyle={style.buttonStyle}
        buttonTextStyle={{color: colors.primaryWhite}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryWhite,
    paddingHorizontal: 16,
  },
  imageLogoStyel: {
    height: 236,
    width: 188,
  },
  buttonStyle: {
    marginTop: 15,
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 5,
    marginTop: 57,
  },
  divider: {
    height: 37,
  },
  subTitle: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: '400',
    marginBottom: 55,
  },
  title: {
    fontSize: 40,
    color: colors.primary,
    fontWeight: '600',
  },
});

export default LoginScreen;
