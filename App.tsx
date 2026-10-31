import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./Styles/style";
import { Ionicons, Feather } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SearchDisplay } from "./components/search/index";
import Animated, { FadeInDown, FadeInUp, FadeOutDown, Easing, FadeOutUp, ReduceMotion } from "react-native-reanimated";

export default function App() {
  const [menuAtivo, setMenuAtivo] = useState("pedidos");
  const [search, setSearch] = useState(true);

  const searchMenu = () => {
    setSearch(!search);
  };

  const alterarMenu = (nomeMenu: string) => {
    setMenuAtivo(nomeMenu);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>Pedidos Realizados</Text>
        <View>
          <TouchableOpacity onPress={searchMenu}>
            <Ionicons name="search" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        {search && (
          <Animated.View
            entering={FadeInUp.duration(400).reduceMotion(ReduceMotion.Never)}
            exiting={FadeOutUp.duration(400).reduceMotion(ReduceMotion.Never)}
            style={styles.searchMenu}
          >
            <SearchDisplay />
          </Animated.View>
        )}
      </View>

      <TouchableOpacity style={styles.floatIcon}>
        <Ionicons name="search" size={20} color="black" />
      </TouchableOpacity>

      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => alterarMenu("pedidos")}
          style={[styles.botao, menuAtivo === "pedidos" ? styles.botaoAtivo : null]}
        >
          <Ionicons name="car" size={25} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alterarMenu("adicionar")}
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

      <StatusBar style="auto" />
    </View>
  );
}
