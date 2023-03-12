import {
  Container,
  Timeline,
  useMantineColorScheme,
  List,
  Badge,
} from '@mantine/core';
import Link from 'next/link';
import {
  IconBrowser,
  IconTriangle,
  IconBriefcase,
  IconPencil,
} from '@tabler/icons';

import OnScrollFadeIn from '../components/OnScrollFadeIn';

function Experience() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <OnScrollFadeIn delay={0.2} amount={0.5}>
      <Container>
        <div className="relative flex items-center my-4 px-5 md:px-0 mx-auto max-w-3xl mb-10">
          <span className="mr-4 text-lg font-semibold font-mono">
            3. Projects &amp; Experience
          </span>
          <div className="flex-grow border-t border-gray-400 dark:border-zinc-600 max-w-xs"></div>
        </div>
        <Timeline
          active={2}
          bulletSize={30}
          lineWidth={2}
          className="max-w-2xl md:mx-auto mr-10"
          color={colorScheme === 'dark' ? 'gray' : 'dark'}
        >
          <Timeline.Item
            bullet={<IconBrowser className="text-white" size={20} />}
            className="min-h-[100px] max-w-lg"
          >
            <div className="flex flex-col text-zinc-800 dark:text-zinc-300 ml-5">
              <div className="flex justify-between items-center">
                <span className="font-semibold">
                  Personal Portfolio Website
                </span>
                <span className="text-sm text-zinc-500">
                  Dec 2022 - Mar 2023
                </span>
              </div>
              <List
                spacing="xs"
                size="sm"
                icon={
                  <IconTriangle
                    size={8}
                    className="stroke-none fill-gray-800 dark:fill-gray-200 rotate-90 mt-[6px]"
                  />
                }
              >
                <List.Item>
                  Designed and developed a personal portfolio website using
                  React (Next.js) to showcase my skills and experience.
                </List.Item>
                <List.Item>
                  Implemented a responsive and clean design with optimized
                  performance for a seamless user experience
                </List.Item>
                <List.Item>
                  Utilized Git for version control and hosted the website on
                  GitHub pages for accessibility
                </List.Item>
              </List>
              <div className="mt-1 space-x-1">
                <Badge color="dark" variant="dot">
                  Javascript
                </Badge>
                <Badge color="dark" variant="dot">
                  Next.js (React)
                </Badge>
                <Badge color="dark" variant="dot">
                  TailwindCSS
                </Badge>
                <Badge color="dark" variant="dot">
                  Mantine
                </Badge>
              </div>
            </div>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconBriefcase className="text-white" size={20} />}
            className="min-h-[100px] max-w-lg"
          >
            <div className="flex flex-col text-zinc-800 dark:text-zinc-300 ml-5">
              <div className="flex justify-between items-center">
                <span className="font-semibold">
                  Data Engineer (
                  <Link
                    className="hover:underline"
                    href="https://www.upwork.com/freelancers/~016c05bde145215456?viewMode=1"
                  >
                    Freelance
                  </Link>
                  ) <br />
                  <Link
                    className="hover:underline text-sm"
                    href="https://www.proflow.ai/"
                  >
                    Flow.ai - Proptech
                  </Link>
                </span>
                <span className="text-sm text-zinc-500">
                  Dec 2021 - Aug 2022
                </span>
              </div>
              <List
                spacing="xs"
                size="sm"
                icon={
                  <IconTriangle
                    size={8}
                    className="stroke-none fill-gray-800 dark:fill-gray-200 rotate-90 mt-[6px]"
                  />
                }
              >
                <List.Item>
                  Developed proficiency in Python programming and data
                  engineering through freelance work with an Australian prop
                  tech startup, collecting and organizing data from multiple
                  sources using web APIs and web scraping.
                </List.Item>
                <List.Item>
                  Applied data cleaning and cross-checking procedures to ensure
                  accuracy and quality of data sets.
                </List.Item>
                <List.Item>
                  Created comprehensive data frames and Excel files to
                  facilitate the analysis and interpretation of large volumes of
                  data.
                </List.Item>
              </List>
              <div className="mt-1 space-x-1">
                <Badge color="dark" variant="dot">
                  Python
                </Badge>
                <Badge color="dark" variant="dot">
                  Pandas
                </Badge>
                <Badge color="dark" variant="dot">
                  Selenium
                </Badge>
                <Badge color="dark" variant="dot">
                  Rest apis
                </Badge>
              </div>
            </div>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconPencil className="text-white" size={20} />}
            className="min-h-[100px] max-w-lg"
          >
            <div className="flex flex-col text-zinc-800 dark:text-zinc-300 ml-5">
              <div className="flex justify-between items-center">
                <Link
                  href="https://dev.to/rashidalikalwar"
                  className="font-semibold hover:underline"
                >
                  Tech Blogger
                </Link>
                <span className="text-sm text-zinc-500">
                  May 2022 - Present
                </span>
              </div>

              <List
                spacing="xs"
                size="sm"
                icon={
                  <IconTriangle
                    size={8}
                    className="stroke-none fill-gray-800 dark:fill-gray-200 rotate-90 mt-[6px]"
                  />
                }
              >
                <List.Item>
                  Wrote tech articles that broke down complex web development
                  problems in a clear and easy-to-understand way, demonstrating
                  my expertise in both technology and writing.
                </List.Item>
                <List.Item>
                  Showed off my creative side by crafting articles that appealed
                  to a wide range of readers, including non-technical audiences,
                  proving that tech can be fun and accessible for everyone.
                </List.Item>
              </List>
            </div>
          </Timeline.Item>
        </Timeline>
      </Container>
    </OnScrollFadeIn>
  );
}

export default Experience;
