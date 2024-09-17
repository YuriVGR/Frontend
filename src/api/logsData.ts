export interface ScreenTypes {
  title: string;
  navigation: string;
  onPress?: () => void;
}

export const logsData: ScreenTypes[] = [
  {
    title: "Updates",
    navigation: "Updates",
    onPress: () => {
      console.log("Updates");
    },
  },
  {
    title: "Logs",
    navigation: "Logs",
    onPress: () => {
      console.log("Logs");
    },
  },
  {
    title: "History",
    navigation: "History",
    onPress: () => {
      console.log("History");
    },
  },
];