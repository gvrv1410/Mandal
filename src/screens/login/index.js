import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TextInput } from '../../components';
import icons from '../../helper/iconConstant';
import images from '../../helper/imageConstant';
import Button from '../../components/common/Button';
import { colors } from '../../utils';
import { apiConstants, POST } from '../../helper/apiConstants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginFailure, loginSuccess } from '../../redux/reducer/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import makeAPIRequest from '../../helper/global';
import { login } from '../../actions/authActiones';

const LoginScreen = ({ navigation }) => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setemailError] = useState('')
  const [passwordError, setpasswordError] = useState('')
  const dispatch = useDispatch()

  const onLoginPress = () => {
    if (email.length === 0) {
      setemailError('User id required!')
    } else if (password.length === 0) {
      setpasswordError("Password required!")
    } else {
      const data = {
        member_id: email,
        member_password: password
      }


      navigate("Onboarding")


      // login(data).then(res => {
      //   navigate('Onboarding')

      //   console.log("res", res)
      // }).catch((err) => {
      //   alert("error")
      // })
    }
  }


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
        onFocus={() => { }}
        onBlur={() => { }}
        visible={false}
        onButtonPress={() => { }}
      />
      {emailError.length > 0 && (
        <Text style={style.errorText}>{emailError}</Text>
      )}
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
        onFocus={() => { }}
        onBlur={() => { }}
        visible={false}
        onButtonPress={() => { }}
      />
      {passwordError.length > 0 && (
        <Text style={style.errorText}>{passwordError}</Text>
      )}
      <Button
        onPress={() => navigate('Onboarding')}
        title={'પ્રવેશ કરો'}
        buttonStyle={style.buttonStyle}
        buttonTextStyle={{ color: colors.primaryWhite }}
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
  errorText: {
    color: 'red',
    marginRight: 150,
    fontSize: 12,
  },
});

export default LoginScreen;
