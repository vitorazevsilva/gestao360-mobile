import { Text, StyleSheet, View, TextInput } from 'react-native';

export default function Page() {
  return (
    <>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Entrar em <Text style={styles.brandName}>Gestão 360</Text>
          </Text>
          <Text style={styles.subtitle}>Fugiat duis incididunt duis duis. Laboris aliquip voluptate fugiat duis adipisicing quis.</Text>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
            inputMode='email'
            returnKeyType="next"
            keyboardType='email-address'
            placeholder='alguem@exemplo.com'
            style={styles.input}
          />
          <Text style={styles.label}>Palavra-Passe:</Text>
          <TextInput
            ref={(input) => { this.secondTextInput = input; }}
            placeholder='**********'
            secureTextEntry={true}
            style={styles.input}
            returnKeyType="done"
          />
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
  },
  container: {
    margin: 15,
  },
  title: {
    fontSize: 24,
  },
  brandName: {
    fontWeight: 'bold',
    color: "orange"
  },
  subtitle: {
    fontSize: 15,
    color: '#949494',
  },
  label: {
    marginTop: 10,
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
});