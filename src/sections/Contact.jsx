import {
  Container,
  Button,
  useMantineColorScheme,
  ActionIcon,
} from '@mantine/core';
import {
  IconMail,
  IconBrandWhatsapp,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons';

import OnScrollFadeIn from '../components/OnScrollFadeIn';

function Contact() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <OnScrollFadeIn delay={0.2}>
      <Container className="min-h-[500px] bg-rose-00 flex justify-center items-center">
        <div className="flex flex-col items-center max-w-xl ">
          <span className="font-mono mb-3">What&apos;s next?</span>
          <span className="font-extrabold text-3xl md:text-5xl mb-5">
            Get In Touch
          </span>
          <p className="text-center mb-5 px-5 md:px-0">
            Let&apos;s connect! If you have a project you&apos;d like to discuss
            or just want to say hello, feel free to get in touch. I&apos;m
            always excited to hear from new people and explore new
            opportunities.
          </p>
          <div className="space-x-2 flex flex-col md:flex-row mx-auto mb-7 ">
            <Button
              className="bg-[#1A1B1E] dark:bg-white dark:text-black"
              component="a"
              href="mailto:rashidkalwar1456@gmail.com?subject=Hello!"
              variant="filled"
              color={colorScheme === 'dark' ? 'gray' : 'dark'}
              radius="xl"
              size="md"
              aria-label="email"
            >
              Say Hello!
            </Button>
            <Button
              component="a"
              href="/resume.pdf"
              target="_blank"
              variant="light"
              color={colorScheme === 'dark' ? 'gray' : 'dark'}
              radius="xl"
              size="md"
              aria-label="download resume"
            >
              Download Resume
            </Button>
          </div>
          <div className="space-x-3 flex items-center">
            <ActionIcon
              color="dark"
              component="a"
              href="mailto:rashidkalwar1456@gmail.com?subject=Hello!"
              radius="xl"
              variant="default"
              size="lg"
              title="Email"
              aria-label="email"
            >
              <IconMail size="1.25rem" />
            </ActionIcon>
            <ActionIcon
              color="dark"
              component="a"
              href="https://wa.me/923421456345"
              radius="xl"
              variant="default"
              size="lg"
              title="WhatsApp"
              aria-label="whatsapp"
            >
              <IconBrandWhatsapp size="1.25rem" />
            </ActionIcon>
            <ActionIcon
              color="dark"
              component="a"
              href="https://twitter.com/RashidAliKalwar"
              radius="xl"
              variant="default"
              size="lg"
              title="Twitter"
              aria-label="twitter"
            >
              <IconBrandTwitter size="1.25rem" />
            </ActionIcon>
            <ActionIcon
              color="dark"
              href="https://github.com/rashidkalwar"
              component="a"
              radius="xl"
              variant="default"
              size="lg"
              title="GitHub"
              aria-label="github"
            >
              <IconBrandGithub size="1.25rem" />
            </ActionIcon>
            <ActionIcon
              color="dark"
              href="https://www.linkedin.com/in/-rashidali"
              component="a"
              radius="xl"
              variant="default"
              size="lg"
              title="Linkedin"
              aria-label="linkedin"
            >
              <IconBrandLinkedin size="1.25rem" />
            </ActionIcon>
          </div>
        </div>
      </Container>
    </OnScrollFadeIn>
  );
}

export default Contact;
