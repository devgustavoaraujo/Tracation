import { View, TextInput, TouchableOpacity } from "react-native";
import { style } from "./style";
import { Ionicons, Feather } from "@expo/vector-icons";

export function SearchDisplay() {
  return (
    <View style={style.container}>
      <View style={style.searchMenu}>
        <TextInput
          autoFocus={true}
          style={style.searchInput}
          placeholderTextColor={"#5b5b5b"}
          placeholder="Nome da Encomenda:"
        />

        <TouchableOpacity>
          <Ionicons name="search" size={26} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
