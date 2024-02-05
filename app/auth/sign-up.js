import { Link } from 'expo-router';
import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { countries } from '../../utils/static-data';

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
      country: 'Portugal',
      phone: '',
      phone2: '',
      fax: '',
      website: '',
    }
  })
  const [page, setPage] = useState(1);

  return (
    <>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Registar-se em <Text style={styles.brandName}>Gestão 360</Text>
          </Text>
          <Text style={styles.subtitle}>Podes te registar aqui caso sejas o responsavel pela empresa, caso contrario deves pedir ao responsavel para te adicionar á empresa</Text>
          {page === 1 && <PersonalForm data={[setForm, form]} />}
          {page === 2 && <EnterpriseForm data={[setForm, form]} />}
          {page === 3 && <AddressForm data={[setForm, form]} />}
          {page === 4 && <ContactForm data={[setForm, form]} />}
          {page <= 4 && <FormControl pages={[setPage, page]} />}
          <Link style={[styles.textLink, { alignSelf: "center" }]} href={{ pathname: "/auth/sign-in" }}>Já tenho conta, quero entrar no Gestão 360</Link>
        </View>
      </View>
    </>
  );
}

const FormControl = ({ pages: [setPage, page] }) => {
  return (
    <>
      <Text style={[styles.subtitle, { alignSelf: 'center', marginTop: 10 }]}>Pag. {page} de 4</Text>
      <View style={page !== 1 ? { flexDirection: 'row', justifyContent: 'space-between' } : {}}>
        {page > 1 && page <= 4 && (<TouchableOpacity style={[styles.button, { width: "49%", backgroundColor: '#fff', borderColor: '#ff8329', borderWidth: 3, padding: 0 }]} onPress={() => setPage(page - 1)}>
          <Text style={{ color: '#ff8329' }}>Voltar</Text>
        </TouchableOpacity>)}
        {page <= 1 && (<TouchableOpacity style={styles.button} onPress={() => setPage(page + 1)}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>)}
        {(page > 1 && page < 4) && (<TouchableOpacity style={[styles.button, { width: "49%" }]} onPress={() => setPage(page + 1)}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>)}
        {page >= 4 && (<TouchableOpacity style={[styles.button, { width: "49%" }]} onPress={() => console.log('%cHello sign-up.js line:65 ', 'background: green; color: white; display: block;')}>
          <Text style={styles.buttonText}>Submeter</Text>
        </TouchableOpacity>)}

      </View >
    </>
  )
}

const ContactForm = ({ data: [setData, getData] }) => {

  return (
    <>
      <Text style={styles.formTitle}>Contactos da Empresa</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telemovel:</Text>
        <TextInput
          autoComplete='tel'
          inputMode='tel'
          returnKeyType="next"
          keyboardType='phone-pad'
          placeholder='+351912345678'
          maxLength={13}
          style={styles.input}
          value={getData.enterprise.phone}
          onChangeText={(text) => setData({ ...getData, enterprise: { ...getData.enterprise, phone: text } })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          autoComplete='tel'
          inputMode='tel'
          returnKeyType="next"
          keyboardType='phone-pad'
          placeholder='+351212345678'
          maxLength={13}
          style={styles.input}
          value={getData.enterprise.phone}
          onChangeText={(text) => setData({ ...getData, enterprise: { ...getData.enterprise, phone: text } })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fax:</Text>
        <TextInput
          autoComplete='tel'
          inputMode='tel'
          returnKeyType="next"
          keyboardType='phone-pad'
          placeholder='+351212345678'
          maxLength={13}
          style={styles.input}
          value={getData.enterprise.phone}
          onChangeText={(text) => setData({ ...getData, enterprise: { ...getData.enterprise, phone: text } })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Website:</Text>
        <TextInput
          autoComplete='url'
          inputMode='url'
          returnKeyType="done"
          keyboardType='url'
          placeholder='minhaempresa.com'
          maxLength={13}
          style={styles.input}
          value={getData.enterprise.phone}
          onChangeText={(text) => setData({ ...getData, enterprise: { ...getData.enterprise, phone: text } })
          }
        />
      </View>

    </>
  );
}

const AddressForm = ({ data: [setData, getData] }) => {
  const [twoLines, setTwoLines] = useState(false)
  return (
    <>
      <Text style={styles.formTitle}>Morada da Empresa</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Morada:</Text>
        <TextInput
          autoComplete='street-address'
          multiline={true}
          numberOfLines={2}
          inputMode='text'
          returnKeyType="next"
          keyboardType='default'
          placeholder='R. da Empresa, 123'
          style={[styles.input, twoLines ? { height: 62 } : {}]}
          value={getData.enterprise.address}
          onChangeText={(text) => {

            if (text.split('\n').length <= 2) {
              if (text.split('\n').length === 2) {
                setTwoLines(true)
              } else {
                setTwoLines(false)
              }
              setData({ ...getData, enterprise: { ...getData.enterprise, address: text } })
            }

          }
          }
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={[styles.inputContainer, { width: "25%" }]}>
          <Text style={styles.label}>C. Postal:</Text>
          <TextInput
            autoComplete='postal-code'
            inputMode='numeric'
            returnKeyType="next"
            keyboardType='numeric'
            placeholder='1234-567'
            maxLength={8}
            style={styles.input}
            value={getData.enterprise.cp}
            onChangeText={(text) => setData({ ...getData, enterprise: { ...getData.enterprise, cp: text } })}
          />
        </View>
        <View style={[styles.inputContainer, { width: "73%" }]}>
          <Text style={styles.label}>Localidade:</Text>
          <TextInput
            inputMode='text'
            returnKeyType="next"
            keyboardType='default'
            placeholder='Braga'
            style={styles.input}
            value={getData.enterprise.locality}
            onChangeText={(text) => setData({ ...getData, enterprise: { ...getData.enterprise, locality: text } })}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>País:</Text>
        <Picker
          selectedValue={getData.enterprise.country}
          onValueChange={(itemValue, itemIndex) => setData({ ...getData, enterprise: { ...getData.enterprise, country: itemValue } })}
          style={styles.input}
          dropdownIconColor="#ff8329"

        >
          {countries.map((country, index) => (
            <Picker.Item key={index} label={country} value={country} />
          ))}
        </Picker>
      </View>
    </>
  );
}

const EnterpriseForm = ({ data: [setData, getData] }) => {

  return (
    <>
      <Text style={styles.formTitle}>Informações da Empresa</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          autoComplete='organization'
          inputMode='text'
          returnKeyType="next"
          keyboardType='default'
          placeholder='Empresa Lda. ...'
          style={styles.input}
          value={getData.enterprise.name}
          onChangeText={(text) => setData({ ...getData, enterprise: { ...getData.enterprise, name: text } })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Geral:</Text>
        <TextInput
          autoComplete='email'
          inputMode='email'
          returnKeyType="next"
          keyboardType='email-address'
          placeholder='geral@empresa.com'
          style={styles.input}
          value={getData.enterprise.email}
          onChangeText={(text) => setData({ ...getData, enterprise: { ...getData.enterprise, email: text } })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NIPC:</Text>
        <TextInput
          inputMode='numeric'
          returnKeyType="next"
          keyboardType='number-pad'
          placeholder='512345678'
          maxLength={9}
          style={styles.input}
          value={getData.enterprise.nif}
          onChangeText={(text) => setData({ ...getData, enterprise: { ...getData.enterprise, nif: text } })}
        />
      </View>
    </>
  );
}

const PersonalForm = ({ data: [setData, getData] }) => {

  return (
    <>
      <Text style={styles.formTitle}>Informações Pessoais</Text>
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
    backgroundColor: '#fff',
    fontSize: 17,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 40,
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
  formTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  }
});

