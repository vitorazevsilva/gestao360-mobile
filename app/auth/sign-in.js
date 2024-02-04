import { Link } from 'expo-router';
import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Switch, TouchableOpacity, Platform, Dimensions } from 'react-native';

export default function Signin() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  return (
    <>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Entrar em <Text style={styles.brandName}>Gestão 360</Text>
          </Text>
          <Text style={styles.subtitle}>Podes entrar usado a tua palavra-passe ou atraves de um codigo enviado por email</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              inputMode='email'
              returnKeyType="next"
              keyboardType='email-address'
              placeholder='alguem@exemplo.com'
              style={styles.input}
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Palavra-Passe:</Text>
            <TextInput
              inputMode='text'
              placeholder='**********'
              secureTextEntry={true}
              style={styles.input}
              returnKeyType="done"
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
            />
          </View>
          <View style={styles.formFooter}>
            <View style={{ flexDirection: 'row' }}>
              <Switch
                style={Platform.select({ web: styles.switch, default: undefined })}
                trackColor={{ false: '#767577', true: '#F7A224' }}
                thumbColor={'#ff8329'}
                value={form.rememberMe}
                onValueChange={(value) => setForm({ ...form, rememberMe: value })}
              />
              <Text style={{ color: '#495057', marginTop: 14 }}>Memorizar-me</Text>
            </View>
            <Link style={[styles.textLink, { marginTop: Dimensions.get('window').width <= 365 ? Platform.select({ web: 8, default: 0 }) : 13 }]} href={{ pathname: "/auth/recovery" }}>Esqueci-me a Palavra-Passe</Link>
          </View>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Entrar com Palavra-Passe</Text>
          </TouchableOpacity>
          <Text style={{ alignSelf: "center" }}>OU</Text>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Entrar sem Palavra-Passe</Text>
          </TouchableOpacity>
          <Link style={[styles.textLink, { alignSelf: "center" }]} href={{ pathname: "/auth/sign-up" }}>Quero começar a usar o Gestão 360</Link>
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({

  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f6f7fc',
    alignItems: 'center',
  },
  container: {
    margin: 15,
    width: Dimensions.get('window').width >= 500 ? Platform.select({ web: 500, default: undefined }) : undefined,
  },
  title: {
    fontSize: 24,
  },
  brandName: {
    fontWeight: 'bold',
    color: "#ff8329"
  },
  subtitle: {
    fontSize: 15,
    color: '#949494',
  },
  inputContainer: {
    marginTop: 10,
  },
  label: {
    fontSize: 17,
    marginBottom: 5
  },
  input: {
    color: '#495057',
    borderColor: '#fff',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000',
    borderRadius: 4,
    elevation: 2,
    height: 40,
    backgroundColor: '#fff',
    fontSize: 17,
    paddingHorizontal: 10,
  },
  textLink: {
    marginTop: 8,
    textDecorationLine: 'underline',
    color: '#495057',
  },
  formFooter: {
    justifyContent: 'space-between',
    flexDirection: Dimensions.get('window').width <= 365 ? 'grid' : 'row'
  },
  button: {
    backgroundColor: '#ff8329',
    padding: 10,
    borderRadius: 4,
    elevation: 2,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  switch: {
    marginTop: 14,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  }
});