import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Ionicons, Feather } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface FloatMenuProps {
  menuAtivo: string;
  alterarMenu: (nomeMenu: string) => void;
}

export function FloatMenu({ menuAtivo, alterarMenu }: FloatMenuProps) {
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.floatIcon}>
        <Ionicons name="search" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          alterarMenu("pedidos");
        }}
        style={[styles.botao, menuAtivo === "pedidos" ? styles.botaoAtivo : null]}
      >
        <Ionicons name="car" size={25} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          alterarMenu("adicionar");
        }}
        style={[styles.botao, menuAtivo === "adicionar" ? styles.botaoAtivo : null]}
      >
        <Ionicons name="add" size={25} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alterarMenu("check")}
        style={[styles.botao, menuAtivo === "check" ? styles.botaoAtivo : null]}
      >
        <FontAwesome name="check-square-o" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}
