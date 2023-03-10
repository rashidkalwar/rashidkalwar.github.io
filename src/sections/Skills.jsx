import { Container, Tabs, List } from '@mantine/core';
import Link from 'next/link';
import { IconTriangle } from '@tabler/icons';
import { useState } from 'react';

import SectionTitle from '../components/SectionTitle';
import tabs, { tabsContent } from '../components/DataSkills';
import OnScrollFadeIn from '../components/OnScrollFadeIn';

export default function Skills() {
  const [selected, setSelected] = useState(0);
  return (
    <Container>
      <SectionTitle text="Portfolio" />
      <OnScrollFadeIn
        delay={0.2}
        className="text-center px-5 md:px-0 text-base md:text-base max-w-3xl mx-auto mb-0 md:mb-16"
      >
        <p>
          I am a skilled developer with a passion for creating efficient and
          scalable solutions that meet the unique needs of my clients. I am
          dedicated to understanding their needs and delivering results that
          exceed expectations.
        </p>
      </OnScrollFadeIn>

      <OnScrollFadeIn className="mb-20">
        <div className="relative flex items-center my-4 px-5 md:px-0 mx-auto max-w-3xl mb-5">
          <span className="mr-4 text-lg font-semibold font-mono">
            1. Skills
          </span>
          <div className="flex-grow border-t border-gray-400 dark:border-zinc-600 max-w-xs"></div>
        </div>
        <Tabs
          defaultValue="languages"
          unstyled
          orientation="vertical"
          className="grid grid-cols-4 max-w-3xl mx-5 md:mx-auto mb-20"
        >
          <Tabs.List className="relative min-h-[288px] col-span-1 border-l-2 border-zinc-300 dark:border-zinc-800">
            <span
              className="absolute -left-[2px] h-12 w-full ease-out transition-transform transition-medium border-l-2 border-zinc-800 dark:border-zinc-300"
              style={{ transform: `translateY(calc(100% * ${selected}))` }}
            />
            {tabs.map((tab) => (
              <Tabs.Tab
                key={`tab-${tab.name}`}
                className={`h-12 px-1 md:px-4 font-mono text-sm md:text-sm w-full hover:bg-zinc-200 dark:hover:bg-zinc-800 border-none flex justify-start items-center ${
                  selected === tab.id
                    ? 'bg-zinc-200 dark:bg-zinc-800'
                    : 'bg-white dark:bg-[#1A1B1E]'
                } transition-all duration-300`}
                value={tab.name}
                onClick={() => setSelected(tab.id)}
              >
                {tab.title}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          <div className="w-full col-span-3 ">
            {tabsContent.map((tab) => (
              <Tabs.Panel
                key={`tab-content-${tab.name}`}
                className=""
                value={tab.name}
              >
                <div className="text-sm py-2 pl-5 md:px-8 min-h-[288px]">
                  <h2 className="text-sm md:text-base font-semibold mb-5">
                    {tab.title}:
                  </h2>
                  <List
                    spacing="xs"
                    size="sm"
                    icon={
                      <IconTriangle
                        size={10}
                        className="stroke-none fill-gray-800 dark:fill-gray-200 rotate-90 mt-[6px]"
                      />
                    }
                  >
                    {tab.bullets.map((bullet) => (
                      <List.Item
                        key={`tab-content-${tab.name}-point-${bullet.id}`}
                      >
                        {bullet.text}
                      </List.Item>
                    ))}
                  </List>
                  <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3">
                    {tab.icons.map((icon) => (
                      <div
                        key={`tab-content-${tab.name}-icon-${icon.iconText}`}
                        className="flex items-center"
                      >
                        <Link
                          href={icon.url}
                          className="flex items-center saturate-0 hover:saturate-100"
                        >
                          <icon.icon />
                          <p className="ml-2 py-1 text-xs md:text-sm font-mono hover:underline">
                            {icon.iconText}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </Tabs.Panel>
            ))}
          </div>
        </Tabs>
      </OnScrollFadeIn>
    </Container>
  );
}
