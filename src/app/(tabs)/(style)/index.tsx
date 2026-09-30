import { ScrollView, Text, View } from "react-native";

import { useAppTheme } from "@/components/theme-provider";

const highlights = [
  { label: "COLOR", value: "Violeta" },
  { label: "TONO", value: "Nocturno" },
];

export default function StyleScreen() {
  const { colors, isDark } = useAppTheme();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ gap: 20, padding: 20, paddingBottom: 36 }}
      style={{ backgroundColor: colors.background }}
    >
      <View style={{ gap: 8 }}>
        <Text selectable style={{ color: colors.accent, fontSize: 13, fontWeight: "800", letterSpacing: 1.8 }}>
          NUEVA PESTAÑA
        </Text>
        <Text selectable style={{ color: colors.text, fontSize: 34, fontWeight: "800", letterSpacing: -1 }}>
          Un estilo diferente.
        </Text>
        <Text selectable style={{ color: colors.muted, fontSize: 16, lineHeight: 23 }}>
          Una interfaz más intensa, con contraste alto y detalles vibrantes.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: isDark ? "#6D4AFF" : "#5B3BE0",
          borderCurve: "continuous",
          borderRadius: 28,
          gap: 14,
          padding: 24,
        }}
      >
        <Text selectable style={{ color: "#EAE5FF", fontSize: 13, fontWeight: "800", letterSpacing: 1.4 }}>
          DESTACADO
        </Text>
        <Text selectable style={{ color: "#FFFFFF", fontSize: 26, fontWeight: "800", letterSpacing: -0.6 }}>
          Diseñado para llamar la atención.
        </Text>
        <View style={{ alignSelf: "flex-start", backgroundColor: "#FFFFFF", borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8 }}>
          <Text selectable style={{ color: "#6D4AFF", fontSize: 13, fontWeight: "800" }}>
            Explorar ahora
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 12 }}>
        {highlights.map((highlight) => (
          <View
            key={highlight.label}
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
              borderCurve: "continuous",
              borderRadius: 20,
              borderWidth: 1,
              flex: 1,
              gap: 6,
              padding: 16,
            }}
          >
            <Text selectable style={{ color: colors.muted, fontSize: 11, fontWeight: "800", letterSpacing: 1.1 }}>
              {highlight.label}
            </Text>
            <Text selectable style={{ color: colors.text, fontSize: 17, fontWeight: "700" }}>
              {highlight.value}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
