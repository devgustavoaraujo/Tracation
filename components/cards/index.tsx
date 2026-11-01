import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Transportes } from "../../utils/transportadoras";

const seusPedidos = [
  {
    id: 1,
  },
];

export function Card() {
  return (
    <View style={styles.containerLista}>
      <View style={styles.trackCard}>
        <Text></Text>
      </View>
    </View>
  );
}
