import "@/theme/global.css";

import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();
export default function Layout() {
  SplashScreen.hideAsync();
  return (
    <>
      <StatusBar style="dark" />
      <Slot />
    </>
  );
}
