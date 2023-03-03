import { Container, Timeline, Avatar } from '@mantine/core';
import Link from 'next/link';

import OnScrollFadeIn from '../components/OnScrollFadeIn';

function Education() {
  return (
    <OnScrollFadeIn delay={0.2}>
      <Container>
        <div className="relative flex items-center my-4 px-5 md:px-0 mx-auto max-w-3xl mb-10">
          <div className="flex-grow border-t border-gray-400 dark:border-zinc-600 max-w-xs ml-auto"></div>
          <span className="ml-4 text-lg font-mono font-semibold">
            2. Education
          </span>
        </div>
        <Timeline
          active={2}
          bulletSize={50}
          lineWidth={3}
          align="right"
          className="max-w-2xl md:mx-auto mr-10"
          // color="gray"
          color="blue"
          reverseActive
        >
          <Timeline.Item
            lineVariant="dashed"
            className="saturate-0 hover:saturate-100 md:h-20"
            bullet={
              <Avatar
                size={50}
                radius="xl"
                alt="salu-logo"
                src="/salu-logo.png"
              />
            }
          >
            <div className="flex flex-col text-zinc-800 dark:text-zinc-300 mr-5">
              <Link
                href="https://en.wikipedia.org/wiki/Shah_Abdul_Latif_University"
                className="font-medium"
              >
                Shah Abdul Latif University Khairpur
              </Link>
              <span className="text-sm">
                Bachelor&apos;s degree, Computer Science
              </span>
              <span className="text-sm text-zinc-500">
                2020 - 2024(Expected)
              </span>
            </div>
          </Timeline.Item>
          <Timeline.Item
            className="saturate-0 hover:saturate-100 md:h-20"
            bullet={
              <Avatar
                size={50}
                radius="xl"
                alt="google-logo"
                src="/google-logo.png"
              />
            }
          >
            <div className="flex flex-col text-zinc-800 dark:text-zinc-300 mr-5">
              <Link
                href="/certificate.pdf"
                target="_blank"
                className="font-medium"
              >
                Google Data Analytics Certificate
              </Link>
              <span className="text-sm">
                Finished 6-month{' '}
                <Link
                  href="/certificate.pdf"
                  target="_blank"
                  className="font-semibold hover:underline inline-flex items-center"
                >
                  Google/Coursera
                </Link>{' '}
                Data Analytics training for entry-level role.
              </span>
              <span className="text-sm text-zinc-500">September 2021</span>
            </div>
          </Timeline.Item>
          <Timeline.Item
            className="saturate-0 hover:saturate-100 bg-transparent"
            bullet={
              <Avatar
                className=""
                size={50}
                radius="xl"
                alt="rocket-logo"
                src="/rocket.png"
              />
            }
          >
            <div className="flex flex-col text-zinc-800 dark:text-zinc-300 mr-5">
              <span className="font-medium">Self Taught Programmer</span>
              <span className="text-sm">
                Started my coding journey as self taught programmer
              </span>
              <span className="text-sm text-zinc-500">2019</span>
            </div>
          </Timeline.Item>
        </Timeline>
      </Container>
    </OnScrollFadeIn>
  );
}

export default Education;
