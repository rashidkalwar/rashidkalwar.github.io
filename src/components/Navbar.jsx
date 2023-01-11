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
  Menu,
  Collapse,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconChevronDown,
} from "@tabler/icons";
import Link from "next/link";
// import { useRouter } from "next/router";
import ThemeToggler from "./ThemeToggler";
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: 56,
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

  linkLabel: {
    marginRight: 5,
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

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2],
    },
  },
}));

const links = [
  { link: "/", label: "Home" },
  {
    link: "/#portfolio",
    links: [
      { link: "/#skills", label: "Skills" },
      { link: "/#education", label: "Education" },
      { link: "/#experience", label: "Experience" },
    ],

    label: "Portfolio",
  },
  { link: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [extended, setExtended] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const { classes, cx } = useStyles();
  // const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setExtended(false);
      } else {
        setExtended(true);
      }
    });
  }, []);

  const items = links.map((link) => {
    const collapseItems = link.links?.map((item) => (
      <Link
        key={item.label}
        href={item.link}
        className={`${cx(
          classes.link
        )} text-gray-800 dark:text-gray-200 text-sm tracking-wide font-medium align-middle no-underline`}
        onClick={(event) => {
          event.preventDefault();
          // router.push(item.link);
        }}
      >
        {item.label}
      </Link>
    ));

    const menuItems = link.links?.map((item) => (
      <Menu.Item className="rounded-2xl" key={item.link}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          classNames="flex flex-col"
          key={link.label}
          exitTransitionDuration={0}
        >
          <Menu.Target>
            <Link
              href={link.link}
              className={`${cx(
                classes.link
              )} text-gray-800 dark:text-gray-200 text-sm tracking-wide font-medium align-middle no-underline`}
              onClick={(event) => {
                event.preventDefault();
                setExpanded(!expanded);
              }}
            >
              <div className="flex items-center">
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown className="" size={15} />
              </div>
            </Link>
          </Menu.Target>
          <Menu.Dropdown className="hidden md:flex rounded-2xl">
            {menuItems}
          </Menu.Dropdown>
          {opened ? (
            <Collapse
              className={`${
                !opened ? "hidden" : ""
              } bg-gray-100 dark:bg-zinc-800`}
              in={expanded}
            >
              {collapseItems}
            </Collapse>
          ) : (
            <></>
          )}
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={`${cx(
          classes.link
        )} text-gray-800 dark:text-gray-200 text-sm tracking-wide font-medium align-middle no-underline`}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -25 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
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
              className={`font-logo font-light text-[25px] sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-100`}
            >
              Rashid Ali
            </h1>
          </Link>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon
              className="text-gray-800 dark:text-gray-200 mx-1"
              size="md"
              radius="xl"
              variant="default"
              title="Twitter"
              aria-label="twitter"
            >
              <IconBrandTwitter size={17} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              className="text-gray-800 dark:text-gray-200 mx-1"
              size="md"
              radius="xl"
              variant="default"
              title="GitHub"
              aria-label="github"
            >
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              className="text-gray-800 dark:text-gray-200 mx-1"
              size="md"
              radius="xl"
              variant="default"
              title="Linkedin"
              aria-label="linkedin"
            >
              <IconBrandLinkedin size={19} stroke={1.5} />
            </ActionIcon>
            <ThemeToggler />
          </Group>

          <Transition transition="slide-right" duration={300} mounted={opened}>
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
