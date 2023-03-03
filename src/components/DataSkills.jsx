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
        text: 'This is some text that I wanted as bullet point in languages section.',
      },
      {
        id: 1,
        text: 'On the other hand this is also a bullet point that I wanted to add.',
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
        text: 'This is some text that I wanted as bullet point in languages section.',
      },
      {
        id: 1,
        text: 'On the other hand this is also a bullet point that I wanted to add.',
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
        text: 'This is some text that I wanted as bullet point in languages section.',
      },
      {
        id: 1,
        text: 'On the other hand this is also a bullet point that I wanted to add.',
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
        text: 'This is some text that I wanted as bullet point in languages section.',
      },
      {
        id: 1,
        text: 'On the other hand this is also a bullet point that I wanted to add.',
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
