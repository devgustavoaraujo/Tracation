import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerLista: {
    alignItems: "center",
    gap: 15,
    marginTop: 10,
  },
  trackCard: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",

    width: 320,
    height: 70,
    gap: 30,
    paddingHorizontal: 20,
    borderRadius: 10,

    backgroundColor: "rgb(29, 30, 36)",
  },
  tituloPedido: {
    color: "white",
    fontWeight: "800",
  },
  statusPedido: {
    color: "white",
  },
  iconTrack: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "rgb(48, 48, 52)",

    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
