import { useState, useEffect } from 'react';
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons';
import Link from 'next/link';
import ThemeToggler from './ThemeToggler';
import { motion } from 'framer-motion';

const useStyles = createStyles((theme) => ({
  dropdown: {
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
      marginTop: 0,
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',

    [theme.fn.largerThan('sm')]: {
      borderRadius: theme.radius.lg,
    },

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

const links = [
  { link: '#', label: 'Home' },
  { link: '#portfolio', label: 'Portfolio' },
  { link: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [extended, setExtended] = useState(true);
  const { classes, cx } = useStyles();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 7) {
        setExtended(false);
      } else {
        setExtended(true);
      }
    });
  }, []);

  const items = links.map((link) => (
    <motion.a
      key={link.label}
      href={link.link}
      className={`${cx(
        classes.link
      )} text-gray-800 dark:text-gray-100 font-medium text-sm align-middle no-underline`}
      onClick={(event) => {
        close();
      }}
    >
      {link.label}
    </motion.a>
  ));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -25 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Header
        className="fixed z-10 bg-white dark:bg-[#1A1B1E] bg-opacity-70 backdrop-blur-md transition-all ease-in-out duration-700 border-b border-zinc-100 dark:border-zinc-800"
        style={{ marginTop: extended ? 30 : 0 }}
      >
        <Container className={`${classes.inner} bg-transparent`}>
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
            <h1 className="font-logo font-light text-[25px] sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-100">
              Rashid Ali
            </h1>
          </Link>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon
              className="text-gray-800 dark:text-gray-100 mx-1"
              href="https://twitter.com/RashidAliKalwar"
              component="a"
              size="md"
              radius="xl"
              variant="default"
              title="Twitter"
              aria-label="twitter"
            >
              <IconBrandTwitter size={17} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              className="text-gray-800 dark:text-gray-100 mx-1"
              href="https://github.com/rashidkalwar"
              component="a"
              size="md"
              radius="xl"
              variant="default"
              title="GitHub"
              aria-label="github"
            >
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              className="text-gray-800 dark:text-gray-100 mx-1"
              href="https://www.linkedin.com/in/-rashidali"
              component="a"
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
