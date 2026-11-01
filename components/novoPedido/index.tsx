import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { style } from "./style";
import { useState } from "react";
import { Transportes } from "../../utils/transportadoras";
import Feather from "@expo/vector-icons/Feather";

export function NovoPedido() {
  const [exibirOpcoes, setExibirOpcoes] = useState(false);
  const [opcaoEscolhida, setOpcaoEscolhida] = useState("Selecione a Transportadora");
  const [nomePedido, setNomePedido] = useState("");
  const [codigoRastreio, setCodigoRastreio] = useState("");

  const dados = [
    {
      Transportadora: opcaoEscolhida,
      CodigoRastreio: codigoRastreio,
      NomePedido: nomePedido,
    },
  ];

  const exibirMenu = () => {
    setExibirOpcoes(!exibirOpcoes);
  };

  return (
    <View style={style.container}>
      <TextInput
        autoFocus={true}
        spellCheck={false}
        placeholder="Nome do Pedido:"
        placeholderTextColor={"white"}
        style={style.inputStyle}
        onChangeText={(texto) => setNomePedido(texto)}
      ></TextInput>

      <TextInput
        spellCheck={false}
        placeholder="Código de Rastreio:"
        placeholderTextColor={"white"}
        onChangeText={(texto) => setCodigoRastreio(texto)}
        style={style.inputStyle}
      ></TextInput>

      <TouchableOpacity style={style.options} onPress={exibirMenu}>
        {exibirOpcoes === true ? (
          <Feather name="arrow-down" size={12} color="white" />
        ) : (
          <Feather name="arrow-up" size={12} color="white" />
        )}

        <Text style={style.optionText}>{opcaoEscolhida}</Text>
      </TouchableOpacity>

      {exibirOpcoes &&
        Transportes.map((item) => (
          <TouchableOpacity
            style={style.optionStyle}
            onPress={() => {
              setOpcaoEscolhida(item.nome);
            }}
          >
            <Text style={style.textButton} key={item.nome}>
              {item.nome}
            </Text>
          </TouchableOpacity>
        ))}

      <TouchableOpacity
        onPress={() => {
          console.log(dados);
        }}
        style={style.button}
      >
        <Text style={style.textButton}>Criar novo Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}
