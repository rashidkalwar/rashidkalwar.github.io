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
  }, []);
  if (!mounted) return null;

  return (
    <ActionIcon
      variant="default"
      className="text-slate-700 dark:text-slate-300 ml-1"
      size="md"
      radius="xl"
      color={dark ? "gray" : "dark"}
      onClick={() => {
        setTheme(dark ? "light" : "dark");
        toggleColorScheme();
      }}
      title="Toggle Theme"
      aria-label="toggle-theme"
    >
      {dark ? <IconSun size={16} /> : <IconMoonStars size={16} />}
    </ActionIcon>
  );
}

export default ThemeToggler;
