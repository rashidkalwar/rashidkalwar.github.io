import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  console.log(colorScheme);
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "indigo" : "blue"}
      onClick={() => {
        setTheme(dark ? "light" : "dark");
        toggleColorScheme();
      }}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  );
}

export default ThemeToggler;
