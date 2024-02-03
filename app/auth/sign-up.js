import { Link } from 'expo-router';
import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Platform, Dimensions } from 'react-native';

export default function Signup() {
  const [form, setForm] = useState({
    personal: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    enterprise: {
      name: '',
      email: '',
      nif: '',
      address: '',
      cp: '',
      locality: '',
      country: '',
      phone: '',
      phone2: '',
      fax: '',
      website: '',
    }
  })
  const [status, setStatus] = useState('personal');

  return (
    <>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Registar-se em <Text style={styles.brandName}>Gestão 360</Text>
          </Text>
          <Text style={styles.subtitle}>Podes te registar aqui caso sejas o responsavel pela empresa, caso contrario deves pedir ao responsavel para te adicionar á empresa</Text>
          {status === 'personal' && <PersonalForm data={[setForm, form]} status={[setStatus, status]} />}
          <Link style={[styles.textLink, { alignSelf: "center" }]} href={{ pathname: "/auth/sign-in" }}>Já tenho conta, quero entrar no Gestão 360</Link>
        </View>
      </View>
    </>
  );
}

const PersonalForm = ({ data: [setData, getData], status: [setStatus] }) => {

  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome Completo:</Text>
        <TextInput
          autoComplete='name'
          inputMode='text'
          returnKeyType="next"
          keyboardType='default'
          placeholder='Alguem ...'
          style={styles.input}
          value={getData.personal.name}
          onChangeText={(text) => setData({ ...getData, personal: { ...getData.personal, name: text } })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          autoComplete='email'
          inputMode='email'
          returnKeyType="next"
          keyboardType='email-address'
          placeholder='alguem@exemplo.com'
          style={styles.input}
          value={getData.personal.email}
          onChangeText={(text) => setData({ ...getData, personal: { ...getData.personal, email: text } })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Palavra-Passe:</Text>
        <TextInput
          autoComplete='new-password'
          inputMode='text'
          returnKeyType="next"
          keyboardType='default'
          placeholder='**********'
          style={styles.input}
          value={getData.personal.password}
          secureTextEntry={true}
          onChangeText={(text) => setData({ ...getData, personal: { ...getData.personal, password: text } })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Repetir Palavra-Passe:</Text>
        <TextInput
          autoComplete='new-password'
          inputMode='text'
          returnKeyType="done"
          keyboardType='default'
          placeholder='**********'
          style={styles.input}
          value={getData.personal.confirmPassword}
          secureTextEntry={true}
          onChangeText={(text) => setData({ ...getData, personal: { ...getData.personal, confirmPassword: text } })}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setStatus('enterprise')}>
        <Text>Continuar</Text>
      </TouchableOpacity>
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
    marginTop: 20,
    textDecorationLine: 'underline',
    color: '#495057',
  },
  button: {
    backgroundColor: '#ff8329',
    padding: 10,
    borderRadius: 4,
    elevation: 2,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
});