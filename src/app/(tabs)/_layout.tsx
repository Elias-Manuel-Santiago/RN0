import { NativeTabs } from "expo-router/unstable-native-tabs";

import { useAppTheme } from "@/components/theme-provider";

export default function TabsLayout() {
  const { colors } = useAppTheme();

  return (
    <NativeTabs
      backgroundColor={colors.background}
      iconColor={{ default: colors.muted, selected: colors.accent }}
      labelStyle={{ default: { color: colors.muted }, selected: { color: colors.accent } }}
      tintColor={colors.accent}
    >
      <NativeTabs.Trigger name="(home)">
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
        <NativeTabs.Trigger.Label>Inicio</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(style)">
        <NativeTabs.Trigger.Icon sf="sparkles" md="auto_awesome" />
        <NativeTabs.Trigger.Label>Estilo</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
