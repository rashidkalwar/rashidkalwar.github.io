import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex justify-center items-center py-5">
      <Link
        href="https://github.com/rashidkalwar"
        className="font-mono text-center text-xs md:text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
      >
        Designed &amp; Developed by Rashid Ali
      </Link>
    </div>
  );
};

export default Footer;
