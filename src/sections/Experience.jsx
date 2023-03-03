import { Container, Timeline, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import {
  IconBrowser,
  IconTriangle,
  IconBriefcase,
  IconPencil,
} from '@tabler/icons';

import OnScrollFadeIn from '../components/OnScrollFadeIn';

const Bullet = ({ children }) => {
  return (
    <span className="mt-2 flex text-sm">
      <IconTriangle
        size={12}
        strokeWidth={3}
        className="stroke-none fill-zinc-900 dark:fill-zinc-100 rotate-90 mr-2 mt-[4px]"
      />

      {children}
    </span>
  );
};

function Experience() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <OnScrollFadeIn delay={0.2}>
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
                <span className="font-medium">Personal Portfolio Website</span>
                <span className="text-sm text-zinc-500">
                  Dec 2022 - Mar 2023
                </span>
              </div>

              <Bullet>
                <span>
                  Designed and developed a responsive personal portfolio website
                  using HTML, CSS, and JavaScript.
                </span>
              </Bullet>
              <Bullet>
                <span>
                  Designed and developed a responsive personal portfolio website
                  using HTML, CSS, and JavaScript.
                </span>
              </Bullet>
              <Bullet>
                <span>
                  Designed and developed a responsive personal portfolio website
                  using HTML, CSS, and JavaScript.
                </span>
              </Bullet>
            </div>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconBriefcase className="text-white" size={20} />}
            className="min-h-[100px] max-w-lg"
          >
            <div className="flex flex-col text-zinc-800 dark:text-zinc-300 ml-5">
              <div className="flex justify-between items-center">
                <span className="font-medium">
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

              <Bullet>
                <span>
                  Designed and developed a responsive personal portfolio website
                  using HTML, CSS, and JavaScript.
                </span>
              </Bullet>
              <Bullet>
                <span>
                  Designed and developed a responsive personal portfolio website
                  using HTML, CSS, and JavaScript.
                </span>
              </Bullet>
              <Bullet>
                <span>
                  Designed and developed a responsive personal portfolio website
                  using HTML, CSS, and JavaScript.
                </span>
              </Bullet>
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
                  className="font-medium hover:underline"
                >
                  Tech Blogger
                </Link>
                <span className="text-sm text-zinc-500">
                  May 2022 - Present
                </span>
              </div>

              <Bullet>
                <span>
                  Designed and developed a responsive personal portfolio website
                  using HTML, CSS, and JavaScript.
                </span>
              </Bullet>
              <Bullet>
                <span>
                  Designed and developed a responsive personal portfolio website
                  using HTML, CSS, and JavaScript.
                </span>
              </Bullet>
              <Bullet>
                <span>
                  Designed and developed a responsive personal portfolio website
                  using HTML, CSS, and JavaScript.
                </span>
              </Bullet>
            </div>
          </Timeline.Item>
        </Timeline>
      </Container>
    </OnScrollFadeIn>
  );
}

export default Experience;
