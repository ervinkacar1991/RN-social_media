import { StyleSheet } from "react-native";
import colors from "../../../colorPalette/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.backgroundColor,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  bottomSheetContent: {
    width: "100%",
    padding: 20,
    backgroundColor: "#393737",
  },
  icon: {
    marginRight: 10,
  },
  bottomSheetItem: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  bottomSheetText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#ece9e9",
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
    padding: 5,
    color: colors.primaryTextColor,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.backgroundColor,
  },
});
