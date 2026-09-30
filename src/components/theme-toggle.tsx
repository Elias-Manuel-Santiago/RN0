import { Pressable, Text, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useAppTheme } from "@/components/theme-provider";

const wideLayoutBreakpoint = 768;

export function ThemeToggle() {
  const { colors, isDark, mode, toggleTheme } = useAppTheme();
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const isWideLayout = width >= wideLayoutBreakpoint;

  return (
    <Pressable
      accessibilityLabel={`Cambiar a tema ${isDark ? "claro" : "oscuro"}`}
      accessibilityRole="button"
      hitSlop={10}
      onPress={toggleTheme}
      style={({ pressed }) => ({
        alignItems: "center",
        backgroundColor: colors.surface,
        borderColor: colors.border,
        borderCurve: "continuous",
        borderRadius: 22,
        borderWidth: 1,
        bottom: isWideLayout ? Math.max(insets.bottom, 16) + 16 : undefined,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.16)",
        height: 44,
        justifyContent: "center",
        left: isWideLayout ? undefined : 16,
        opacity: pressed ? 0.8 : 1,
        position: "absolute",
        right: isWideLayout ? 24 : undefined,
        top: isWideLayout ? undefined : insets.top + 10,
        width: 44,
        zIndex: 20,
      })}
    >
      <Text style={{ color: colors.text, fontSize: 20 }}>
        {mode === "light" ? "☾" : "☀︎"}
      </Text>
    </Pressable>
  );
}
