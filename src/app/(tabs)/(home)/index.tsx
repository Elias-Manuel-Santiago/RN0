import { ScrollView, Text, View } from "react-native";

import { useAppTheme } from "@/components/theme-provider";

export default function HomeScreen() {
  const { colors, isDark } = useAppTheme();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 24 }}
      style={{ backgroundColor: colors.background }}
    >
      <View style={{ alignItems: "center", gap: 12 }}>
        <View
          style={{
            alignItems: "center",
            backgroundColor: colors.softAccent,
            borderCurve: "continuous",
            borderRadius: 28,
            height: 84,
            justifyContent: "center",
            width: 84,
          }}
        >
          <Text style={{ color: colors.accent, fontSize: 34 }}>{isDark ? "☾" : "👋"}</Text>
        </View>
        <Text selectable style={{ color: colors.text, fontSize: 32, fontWeight: "700", letterSpacing: -0.8 }}>
          Hola mundo
        </Text>
        <Text selectable style={{ color: colors.muted, fontSize: 16, textAlign: "center" }}>
          Una pantalla simple que se adapta al tema que elijas.
        </Text>
      </View>
    </ScrollView>
  );
}
