import { motion } from 'framer-motion';
import { Image, Container, Text } from '@mantine/core';

const Intro = () => {
  return (
    <Container>
      <div className="text-center text-lg max-w-md mx-auto leading-1">
        <motion.p
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="font-main text-lg mt-8"
        >
          Hi, I'm{' '}
          <span className="text-3xl font-logo font-normal tracking-wide mr-7">
            Rashid Ali.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-2 text-base"
        >
          I am a Software Developer with a passion for developing digital
          experiences that make people&apos;s lives simple :)
        </motion.p>
      </div>

      <div className="flex justify-center md:grid grid-cols-11 gap-5">
        <div className="hidden md:flex flex-col text-left self-center col-span-3">
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="h-36 border border-zinc-300 dark:border-zinc-800 shadow-lg dark:shadow-md py-3 px-5 rounded-3xl mb-5"
          >
            <Text className="font-logo text-xl lg:text-2xl text-slate-600 dark:text-slate-300 tracking-wider">
              Biography
            </Text>
            <p className="mt-1 text-sm lg:text-base font-medium tracking-tight">
              I&apos;m a Full-stack Software Developer based in Karachi,
              Pakistan.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="h-36 border border-zinc-300 dark:border-zinc-800 shadow-lg dark:shadow-md py-3 px-5 rounded-3xl"
          >
            <p className="font-logo text-xl lg:text-2xl text-slate-600 dark:text-slate-300 tracking-wider">
              Contact
            </p>
            <p className="mt-1 text-sm lg:text-base font-medium tracking-tight overflow-clip">
              Email@email.com
              <br />
              +92 342 1456345
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="col-span-5 self-center border border-zinc-300 shadow-lg dark:shadow-md dark:border-zinc-800 inline-flex justify-center items-center p-10 rounded-full my-10 md:my-12 mx-3 md:mx-0"
        >
          <Image
            className="bg-gradient-to-b from-neutral-300 dark:from-neutral-500 to-neutral-700 dark:to-neutral-800 max-w-[300px] md:max-w-md max-h-[600px] md:max-h-[600px] mx-auto rounded-[215px] pt-5 md:pt-20"
            alt="profile-picture"
            src="/profile-picture.png"
            width="480"
            height="545"
            withPlaceholder
            radius={215}
          />
        </motion.div>
        <div className="hidden md:flex flex-col text-right self-center col-span-3">
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="h-36 border border-zinc-300 dark:border-zinc-800 shadow-lg dark:shadow-md py-3 px-5 rounded-3xl mb-5"
          >
            <p className="font-logo text-xl lg:text-2xl text-slate-600 dark:text-slate-300 tracking-wider">
              Years of Experience
            </p>
            <p className="text-3xl mt-1 font-light">02+</p>
          </motion.div>
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="h-36 border border-zinc-300 dark:border-zinc-800 shadow-lg dark:shadow-md py-3 px-5 rounded-3xl"
          >
            <p className="font-logo text-xl lg:text-2xl text-slate-600 dark:text-slate-300 tracking-wider">
              Completed projects
            </p>
            <p className="text-3xl mt-1 font-light">04+</p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Intro;
