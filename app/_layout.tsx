import { migrateDbIfNeeded } from "@/utils/db";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

export default function RootLayout() {
  return (
    <SQLiteProvider onInit={migrateDbIfNeeded} databaseName="todos.db">
      <Stack screenOptions={{ headerShown: false }} />
    </SQLiteProvider>
  );
}
