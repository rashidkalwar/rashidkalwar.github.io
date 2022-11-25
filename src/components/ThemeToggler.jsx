import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

function ThemeToggler() {
  const { setTheme } = useTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const [mounted, setMounted] = useState(false);
  const dark = colorScheme === "dark";

  useEffect(() => {
    setMounted(true);
    setTheme(dark);
  }, []);
  if (!mounted) return null;

  return (
    <ActionIcon
      variant="default"
      className="text-gray-700 dark:text-gray-300"
      size="lg"
      radius="xl"
      color={dark ? "gray" : "dark"}
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
