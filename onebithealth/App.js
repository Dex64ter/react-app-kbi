import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Tittle from './src/components/Tittle';

export default function App() {
  return (
    <View style={styles.container}>
      <Tittle/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4eea9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




// * Exemplo de butão
// <View style={styles.butoes}>
//  <Button text="Selecione" sobrenome="eduardo" onClick={funcaoPrint} />
// </View> 


// const Button = (cu) => {
//   return (
//     <TouchableOpacity style={{
//       paddingHorizontal:10,
//       paddingVertical: 4,
//       backgroundColor: "#f0f",
//       justifyContent: "center",
//       alignItems: "center",
//       borderRadius: 8
//     }}
//       onPress={cu.onClick}
//     >
//       <Text style={{fontWeight: "bold"}}>
//         {cu.text} {" "}
//         {cu.sobrenome}
//       </Text>
//     </TouchableOpacity>
//   )
// }


// * Função utilizada dentro do escopo da função principal "function App"
// *const funcaoPrint = () => {
// *  console.log("Entendendo funções hehe");
// *}