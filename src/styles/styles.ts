import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  //* Containers
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  //* Text Styles
  title: {
    fontWeight: "600",
    fontSize: 18,
    color: colors.text,
  },
  subTitle: {
    fontWeight: "500",
    fontSize: 16,
    color: colors.text,
  },
  text: {
    fontWeight: "400",
    fontSize: 14,
    color: colors.textDark,
  },
  dangerText: {
    fontWeight: "500",
    fontSize: 14,
    color: colors.primary,
  },



  //* Button Styles
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },

  //* Setting Styles
  //! Header
  profileHeader: {
    width: "100%",
    padding: 10,
    paddingVertical: 20,
    borderRadius: 16,
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    backgroundColor: colors.background2,
  },
  picturePlacer: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButton: {
    backgroundColor: "#00000010",
    padding: 5,
    borderRadius: 16,
    alignSelf: "flex-start",
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButtonText: {
    color: "red",
    fontWeight: "500",
  },
  //! Settings
  settingsContainer: {
    width: "100%",
    height: "auto",
    flexGrow: 1,
    borderRadius: 16,
  },
  settingsComponent: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: colors.background2,
    marginBottom: 10,
  },
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    height: 50,
  },
  selectorItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export const componentStyles = StyleSheet.create({
  //* Divider Component
  divider: {
    height: 1,
    width: "95%",
    backgroundColor: colors.textLight,
    alignSelf: "center",
  },
  //* Switch Component
  switchContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    padding: 4,
    backgroundColor: colors.textLight,
  },
  switchContainerEnabled: {
    backgroundColor: "#4cd964",
  },
  switchToggle: {
    backgroundColor: "white",
    borderRadius: 16,
  },
  //* Picker Component
  //! Modal
  pickerModalContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
  },
  pickerOptionsContainer: {
    backgroundColor: colors.background2,
    borderRadius: 10,
    flexDirection: "column",
    width: "50%",
  },
  //! Modal Item
  pickerModalItem: {
    padding: 15,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  pickerModalDivider: {
    height: 1,
    width: "90%",
    backgroundColor: colors.divider,
    alignSelf: "center",
  },

  //! Button
  pickerButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  pickerButtonText: {
    fontSize: 16,
    color: colors.textDark,
  },
});
