import {
  JavaScriptLogo,
  TypeScriptLogo,
  PythonLogo,
  SqlLogo,
  HtmlLogo,
  CssLogo,
  ReactLogo,
  NextjsLogo,
  FirebaseLogo,
  NodejsLogo,
  MuiLogo,
  TailwindLogo,
  DjangoLogo,
  MongodbLogo,
  MysqlLogo,
  PostgresqlLogo,
  FirestoreLogo,
  GithubLogo,
  DockerLogo,
  VercelLogo,
  NetlifyLogo,
  ExpressjsLogo,
} from './Svgs';

const tabs = [
  { id: 0, name: 'languages', title: 'Languages' },
  { id: 1, name: 'frameworks', title: 'Frameworks' },
  { id: 2, name: 'databases', title: 'Databases' },
  { id: 3, name: 'others', title: 'Others' },
];

const tabsContent = [
  {
    id: 0,
    name: 'languages',
    title: 'Programming languages',
    bullets: [
      {
        id: 0,
        text: 'I have strong foundational knowledge in Python as my first language, with demonstrated ability to develop efficient and effective code.',
      },
      {
        id: 1,
        text: 'Proficient in JavaScript specially in MERN stack, with experience in developing and implementing complex applications for web development and beyond.',
      },
    ],
    icons: [
      { id: 0, icon: JavaScriptLogo, iconText: 'JavaScript-ES6', url: '#' },
      { id: 1, icon: TypeScriptLogo, iconText: 'TypeScript', url: '#' },
      { id: 2, icon: PythonLogo, iconText: 'Python', url: '#' },
      { id: 3, icon: SqlLogo, iconText: 'SQL', url: '#' },
      { id: 4, icon: HtmlLogo, iconText: 'HTML5', url: '#' },
      { id: 5, icon: CssLogo, iconText: 'CSS3', url: '#' },
    ],
  },
  {
    id: 1,
    name: 'frameworks',
    title: 'Libraries and Frameworks',
    bullets: [
      {
        id: 0,
        text: 'Over the course of several years, I have worked extensively with various frameworks and libraries, and I am particularly proficient in React.js, having leveraged it to develop numerous dynamic and responsive web applications.',
      },
    ],
    icons: [
      { id: 0, icon: ReactLogo, iconText: 'React.js', url: '#' },
      { id: 1, icon: NextjsLogo, iconText: 'Next.js', url: '#' },
      { id: 2, icon: ExpressjsLogo, iconText: 'Express.js', url: '#' },
      { id: 3, icon: NodejsLogo, iconText: 'Node.js', url: '#' },
      { id: 4, icon: FirebaseLogo, iconText: 'Firebase', url: '#' },
      { id: 5, icon: MuiLogo, iconText: 'MUI', url: '#' },
      { id: 6, icon: TailwindLogo, iconText: 'TailwindCSS', url: '#' },
      { id: 7, icon: DjangoLogo, iconText: 'Django', url: '#' },
    ],
  },
  {
    id: 2,
    name: 'databases',
    title: 'Database Technologies',
    bullets: [
      {
        id: 0,
        text: 'Skilled in both SQL and NoSQL databases, able to design efficient data models, optimize queries, and integrate data from multiple sources, with expertise in SQL systems such as MySQL and PostgreSQL, and NoSQL databases like MongoDB.',
      },
    ],
    icons: [
      { id: 0, icon: MongodbLogo, iconText: 'MongoDB', url: '#' },
      { id: 1, icon: MysqlLogo, iconText: 'MySQL', url: '#' },
      { id: 2, icon: PostgresqlLogo, iconText: 'PostgreSQL', url: '#' },
      { id: 3, icon: FirestoreLogo, iconText: 'Firestore', url: '#' },
    ],
  },
  {
    id: 3,
    name: 'others',
    title: 'Other Development Tools',
    bullets: [
      {
        id: 0,
        text: 'Familiar with Git version control system and experienced with cloud hosting platforms like Vercel and Netlify, with experience in deploying and managing web applications using modern front-end frameworks and libraries.',
      },
      {
        id: 1,
        text: 'Experienced in containerization technology, with experience using Docker to create portable development environments and deploy applications to production servers, and familiar with DevOps practices for automating software testing, deployment, and maintenance.',
      },
    ],
    icons: [
      { id: 0, icon: GithubLogo, iconText: 'GitHub', url: '#' },
      { id: 1, icon: DockerLogo, iconText: 'Docker', url: '#' },
      { id: 2, icon: VercelLogo, iconText: 'Vercel', url: '#' },
      { id: 3, icon: NetlifyLogo, iconText: 'Netlify', url: '#' },
    ],
  },
];

export default tabs;
export { tabsContent };
