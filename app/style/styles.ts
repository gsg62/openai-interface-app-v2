import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  baseContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    height: "100%",
  },
  messageContainer: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  textInputContainer: {
    margin: 10
  },
  titleText: {
    marginTop: 40,
    fontSize: 24,
    padding: 20,
  },
  textInput: {
    height: "auto",
  }
})

export default styles;
