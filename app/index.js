import { Link } from 'expo-router';
import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Switch, TouchableOpacity } from 'react-native';

export default function Page() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  return (
    <>
      <View style={styles.main}>
        <Link style={[styles.textLink, { alignSelf: "center" }]} href={{ pathname: "/auth/signin" }}>Sign in</Link>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f6f7fc',
  },
  textLink: {
    marginTop: 8,
    textDecorationLine: 'underline',
    color: '#495057',
    marginTop: 13,
  },

});