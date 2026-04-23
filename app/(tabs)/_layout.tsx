import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color="#007AFF" />
          ),
        }}
      />
      <Tabs.Screen
        name="primeiro"
        options={{
          title: "primeiro",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="looks-one" size={24} color="#007AFF" />
          ),
        }}
      />
      <Tabs.Screen
        name="segundo"
        options={{
          title: "segundo",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="looks-two" size={24} color="#007AFF" />
          ),
        }}
      />
      <Tabs.Screen
        name="terceiro"
        options={{
          title: "terceiro",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="looks-3" size={24} color="#007AFF" />
          ),
        }}
      />
    </Tabs>
  );
}
