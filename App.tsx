import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./Styles/style";
import { Ionicons, Feather } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SearchDisplay } from "./components/search/index";
import { Card } from "./components/cards/index";
import Animated, { FadeInDown, FadeInUp, FadeOutDown, Easing, FadeOutUp, ReduceMotion } from "react-native-reanimated";

export default function App() {
  const [menuAtivo, setMenuAtivo] = useState("pedidos");
  const [search, setSearch] = useState(false);
  const [criarPedido, setCriarPedido] = useState(true);

  const pedidoNovo = () => {
    setCriarPedido(!criarPedido);
  };
  const searchMenu = () => {
    setSearch((prev) => !prev);
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
    adicionar: Card,
    check: Card,
  };

  const ComponenteAtivo = display[menuAtivo] || Card; // FALLBACK || Card, Caso não Encontre nada Retornar o Card!
  const tituloAtual = titulos[menuAtivo] || "Menu Atual";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>{tituloAtual}</Text>
        <TouchableOpacity onPress={searchMenu}>
          <Ionicons name="search" size={26} color="white" />
        </TouchableOpacity>
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
            pedidoNovo();
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

      <StatusBar style="auto" />
    </View>
  );
}
