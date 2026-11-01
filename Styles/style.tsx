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
  searchMenu: {
    position: "relative",
    bottom: 150,
  },
});
