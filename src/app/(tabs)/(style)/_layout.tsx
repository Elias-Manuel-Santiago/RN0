import { Stack } from "expo-router";

import { useAppTheme } from "@/components/theme-provider";

export default function StyleLayout() {
  const { colors } = useAppTheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Estilo",
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          headerTitleStyle: { color: colors.text },
          contentStyle: { backgroundColor: colors.background },
        }}
      />
    </Stack>
  );
}
