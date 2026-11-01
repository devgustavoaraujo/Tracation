import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(16, 17, 21)",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    width: "100%",
    padding: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "800",
    fontSize: 21,
  },
  floatIcon: {
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    bottom: 100,
    right: 25,

    backgroundColor: "white",
    height: 50,
    width: 50,

    borderRadius: "50%",
  },
  menu: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "auto",

    width: "90%",
    height: 65,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    borderRadius: 25,

    backgroundColor: "rgb(29, 30, 36)",
  },
  botao: {
    width: 70,
    height: 50,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 50,
  },

  botaoAtivo: {
    backgroundColor: "#2542ab",
  },
  searchMenu: {
    position: "relative",
    bottom: 150,
  },
});
