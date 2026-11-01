import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Ionicons, Feather } from "@expo/vector-icons";

const seusPedidos = [
  {
    id: 1,
  },
];

export function Card() {
  return (
    <View style={styles.containerLista}>
      {seusPedidos.map((pedido) => (
        <View key={pedido.id} style={styles.trackCard}>
          <Text> Hello</Text>
        </View>
      ))}
    </View>
  );
}
