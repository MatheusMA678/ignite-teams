import { StatusBar } from "expo-status-bar";

import { Groups } from "./src/screens/Groups";
import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "@/styles/defaultTheme";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Groups />
      <StatusBar style="light" translucent />
    </ThemeProvider>
  );
}
