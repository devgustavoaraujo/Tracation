import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "rgb(29, 30, 36)",

    width: 330,
    height: 60,
    borderRadius: 15,
  },
  searchMenu: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",

    gap: 20,
  },

  searchInput: {
    width: 250,
    borderRadius: 12,
    paddingHorizontal: 15,

    backgroundColor: "rgb(48, 48, 52)",
    color: "white",
  },
});
