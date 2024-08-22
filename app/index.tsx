import { router, useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useSQLiteContext } from "expo-sqlite";

import { useTodos } from "@/hooks/useTodos";

export default function Index() {
  const rootNavigationState = useRootNavigationState();
  const db = useSQLiteContext();
  const { getTodos } = useTodos();

  const { data } = useQuery({
    queryKey: ["get-todos"],
    queryFn: () => getTodos(db),
  });

  useEffect(() => {
    if (rootNavigationState?.key) {
      if (data) {
        router.replace("/pending");
      }
    }
  }, [rootNavigationState?.key, data]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
