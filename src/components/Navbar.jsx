import { useState, useEffect } from "react";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggler from "./ThemeToggler";
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  outer: {
    backgroundColor: theme.colorScheme === "dark" ? "#1A1B1E" : "#fff",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
      marginTop: 0,
    },

    transition: "ease-in-out",
    transitionDuration: "0.7s",
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  logo: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[1]
        : theme.colors.gray[7],
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",

    [theme.fn.largerThan("sm")]: {
      borderRadius: theme.radius.lg,
    },

    // textDecoration: "none",
    // color:
    //   theme.colorScheme === "dark"
    //     ? theme.colors.dark[0]
    //     : theme.colors.gray[7],
    // fontSize: theme.fontSizes.sm,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      // backgroundColor: theme.fn.variant({
      //   variant: "light",
      //   color: theme.colors.gray[5],
      // }).background,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2],
      // color: theme.fn.variant({ variant: "light", color: theme.colors.gray[7] })
      //   .color,
      // color:
      //   theme.colorScheme === "dark"
      //     ? theme.colors.dark[0]
      //     : theme.colors.gray[8],
    },
  },
}));

const links = [
  { link: "/", label: "Home" },
  { link: "/#", label: "Portfolio" },
  { link: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [extended, setExtended] = useState(true);
  const { classes, cx } = useStyles();
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setExtended(false);
      } else {
        setExtended(true);
      }
    });
  }, []);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={`${cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })} text-gray-700 dark:text-gray-300 font-semibold text-sm align-middle no-underline`}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
        // router.push(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <motion.div
      initial={{ opacity: 0.1, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed w-full h-14 ${classes.outer}`}
    >
      <Header height={56} className={classes.root}>
        <Container
          className={classes.inner}
          style={{ marginTop: extended ? 30 : 0 }}
        >
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            className={classes.burger}
          />
          <Group className={`${classes.links} w-max`} spacing={5}>
            {items}
          </Group>

          <Link href="/">
            <h1
              className={`font-logo font-light text-[25px] sm:text-3xl md:text-4xl ${classes.logo}`}
            >
              Rashid Ali
            </h1>
          </Link>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon
              className="text-gray-700 dark:text-gray-300 mx-1"
              size="md"
              radius="xl"
              variant="default"
            >
              <IconBrandTwitter size={17} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              className="text-gray-700 dark:text-gray-300 mx-1"
              size="md"
              radius="xl"
              variant="default"
            >
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              className="text-gray-700 dark:text-gray-300 mx-1"
              size="md"
              radius="xl"
              variant="default"
            >
              <IconBrandLinkedin size={19} stroke={1.5} />
            </ActionIcon>
            <ThemeToggler />
          </Group>

          <Transition transition="slide-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    </motion.div>
  );
}
