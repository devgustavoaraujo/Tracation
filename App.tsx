import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./Styles/style";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SearchDisplay } from "./components/search/index";
import { Card } from "./components/cards/index";
import Animated, { FadeInUp, FadeOutUp, ReduceMotion } from "react-native-reanimated";
import { NovoPedido } from "./components/novoPedido/index";
import { FloatMenu } from "./components/FloatMenu/index";

export default function App() {
  const [menuAtivo, setMenuAtivo] = useState("pedidos");
  const [search, setSearch] = useState(false);

  const searchMenu = () => {
    setSearch((prev) => !prev);

    if (menuAtivo != "pedidos") {
      searchMenu();
    }
  };

  const alterarMenu = (nomeMenu: string) => {
    setMenuAtivo(nomeMenu);
  };

  const titulos: Record<string, string> = {
    pedidos: "Pedidos Realizados",
    adicionar: "Novo Pedido",
    check: "Pedidos Concluídos",
  };

  const display: Record<string, React.ComponentType> = {
    pedidos: Card,
    adicionar: NovoPedido,
    check: Card,
  };

  const ComponenteAtivo = display[menuAtivo] || Card; // FALLBACK || Card, Caso não Encontre nada Retornar o Card!
  const tituloAtual = titulos[menuAtivo] || "Menu Atual";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>{tituloAtual}</Text>

        {menuAtivo === "pedidos" && (
          <TouchableOpacity onPress={searchMenu}>
            <Ionicons name="search" size={26} color="white" />
          </TouchableOpacity>
        )}
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

        <ComponenteAtivo />
      </View>

      <FloatMenu menuAtivo={menuAtivo} alterarMenu={alterarMenu} />

      <StatusBar style="light" />
    </View>
  );
}
