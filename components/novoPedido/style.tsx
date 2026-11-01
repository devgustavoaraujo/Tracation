import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  inputStyle: {
    backgroundColor: "rgb(29, 30, 36)",
    color: "white",
    fontWeight: "800",
    fontSize: 15,

    width: 330,
    height: 60,
    marginTop: 10,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  button: {
    width: 330,
    height: 50,
    marginTop: 10,
    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2542ab",
  },
  textButton: {
    color: "white",
    fontWeight: "800",
    fontSize: 15,
  },
  options: {
    backgroundColor: "rgb(29, 30, 36)",
    width: 330,
    height: 60,
    borderRadius: 12,
    marginTop: 8,

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  optionStyle: {
    backgroundColor: "rgb(29, 30, 36)",

    width: 330,
    height: 30,
    borderRadius: 12,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontSize: 16,
  },
});
