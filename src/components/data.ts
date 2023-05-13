import { TechName } from '@/components/tech-tag';
import { IWorkItem } from '@/components/experience';
import { IProjectItem } from './projects';

export const WORK_ITEMS: IWorkItem[] = [
  {
    companyName: 'Trace',
    dates: 'Mar 2021 - July 2022',
    position: 'Staff Software Engineer',
    location: 'Remote',
    logoImageName: '/images/logo_trace.png',
    description:
      'The headcount and spend platform built for teams.\n\ntracehq.com',
    techNames: [
      TechName.Go,
      TechName.GraphQL,
      TechName.React,
      TechName.TypeScript,
      TechName.AWS,
      TechName.MySQL,
      TechName.Terraform,
    ],
    imageNames: [
      '/images/work/trace_0.png',
      '/images/work/trace_1.png',
      '/images/work/trace_2.png',
      '/images/work/trace_0.png',
      '/images/work/trace_0.png',
      '/images/work/trace_0.png',
    ],
  },
  {
    companyName: 'Niantic',
    dates: 'Oct 2017 - Mar 2021',
    position: 'Staff Software Engineer',
    location: 'San Francisco, CA',
    logoImageName: '/images/logo_niantic.jpeg',
    description:
      'Building technologies and ideas that move us.\n\nnianticlabs.com',
    techNames: [
      TechName.Java,
      TechName.CSharp,
      TechName.Angular,
      TechName.Unity,
      TechName.GCP,
    ],
  },
  {
    companyName: 'Evertoon',
    dates: 'Aug 2015 - Oct 2017',
    position: 'Founding Lead Engineer',
    location: 'San Francisco, CA',
    logoImageName: '/images/logo_evertoon.png',
    description:
      'Bringing moviemaking to the masses. Acquired by Niantic in 2017.',
    techNames: [
      TechName.CSharp,
      TechName.Unity,
      TechName.ObjectiveC,
      TechName.Java,
      TechName.Python,
      TechName.Node,
      TechName.AWS,
    ],
  },
  {
    companyName: 'Digital Uzu',
    dates: 'Oct 2013 - Aug 2015',
    position: 'Founder, Lead Developer',
    location: 'Tokyo, Japan',
    logoImageName: '/images/logo_digitaluzu.png',
    description: 'Multi-platform game and app development and consulting.',
    techNames: [
      TechName.CSharp,
      TechName.Unity,
      TechName.JavaScript,
      TechName.Node,
      TechName.ThreeJS,
    ],
  },
  {
    companyName: 'GREE International',
    dates: 'May 2015 - July 2015',
    position: 'Software Engineer',
    location: 'San Francisco, CA',
    logoImageName: '/images/logo_gree.jpeg',
    description:
      'Server-side engineer and development operations on War of Nations (iOS/Android top-grossing app).\n\nGame Credits:\nWar of Nations',
    techNames: [TechName.PHP, TechName.Python],
  },
  {
    companyName: 'Kojima Productions (Konami)',
    dates: 'Sep 2009 - Sep 2013',
    position: 'Software Engineer',
    location: 'Tokyo, Japan',
    logoImageName: '/images/logo_konami.png',
    description:
      'Software development at Kojima Productions, working on the Fox Engine and Metal Gear series.\nGame Credits: Metal Gear Solid V: The Phantom Pain\nMetal Gear Solid V: Ground Zeroes\nMetal Gear Solid: Peace Walker\nkonami.jp',
    techNames: [
      TechName.CPlusPlus,
      TechName.CSharp,
      TechName.C,
      TechName.Lua,
      TechName.Python,
    ],
  },
  {
    companyName: 'Electronic Arts',
    dates: 'May 2008 - Aug 2008',
    position: 'Software Engineer Intern',
    location: 'Los Angeles, CA',
    logoImageName: '/images/logo_ea.jpeg',
    description:
      'Software development related to game systems, AI path-finding, user-interface, and tool development for a cancelled EA/Steven Spielberg game (LMNO).\nGame Credits:\nLMNO (Cancelled) - Programming Intern\nea.com',
    techNames: [
      TechName.CPlusPlus,
      TechName.UnrealEngine3,
      TechName.UnrealScript,
    ],
  },
  {
    companyName: 'Ohio Supercomputer Center',
    dates: 'Dec 2005 - Oct 2006',
    position: 'Student Research Associate',
    location: 'Columbus, OH',
    logoImageName: '/images/logo_osc.jpeg',
    description:
      'Software development for virtual reality systems (stereoscopic graphics, networking, physics, audio, user-interfaces and input devices).\nDeveloped virtual environment simulations under grants from the National Institutes of Health (NIH) and the Great Lakes Center for Agricultural Safety and Health.\nosc.edu',
    techNames: [
      TechName.CPlusPlus,
      TechName.OpenGL,
      TechName.GLSL,
      TechName.TorqueNetworkLibrary,
    ],
  },
];

// TODO: add the year? role?

export const PROJECT_ITEMS: IProjectItem[] = [
  {
    projectName: 'Karate Kata Visualizer',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Sequence Diagrams',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Habit Tracker - Template Generator',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'News Cloud',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'DiabloGL',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Wallpaper Algorithm Visualizer',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Recursive Image Search Twitter Bot',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Rank Me',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'HDL Atom Syntax Highlighter',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Grid Plotter',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Trace',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Pokémon GO',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Evertoon',
    techNames: [
      TechName.CSharp,
      TechName.Unity,
      TechName.ObjectiveC,
      TechName.Java,
      TechName.Python,
      TechName.Node,
      TechName.AWS,
    ],
    imageName: '/images/work/trace_0.png',
  },
  {
    projectName: 'Metal Gear Solid V: The Phantom Pain',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'War of Nations',
    techNames: [],
    imageName: '/images/work/trace_0.png',
  },
  {
    projectName: 'Monday Night Monsters',
    techNames: [TechName.CSharp, TechName.Unity],
    imageName: '/images/projects/mnm.jpeg',
  },
  {
    projectName: 'Metal Gear Solid V: Ground Zeroes',
    techNames: [],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'BEAT DRIFT',
    techNames: [TechName.CSharp, TechName.Unity, TechName.Node],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Nimble Bookmarks',
    techNames: [TechName.JavaScript, TechName.HTML, TechName.CSS],
    imageName: '/images/projects/nimblebookmarks.jpeg',
  },
  {
    projectName: 'Tiny Tapper',
    techNames: [TechName.CSharp, TechName.Unity],
    imageName: '/images/projects/tinytapper.jpeg',
  },
  {
    projectName: 'Happy Bard',
    techNames: [TechName.CSharp, TechName.Unity],
    imageName: '/images/projects/happybard.jpeg',
  },
  {
    projectName: 'Shirt Visualizer',
    techNames: [TechName.JavaScript, TechName.ThreeJS],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Metal Gear Solid: Peace Walker',
    techNames: [TechName.C],
    imageName: '/images/projects/peacewalker.jpeg',
  },
  {
    projectName: 'Artemis Chronicle',
    techNames: [TechName.CSharp, TechName.XNA],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'LMNO',
    techNames: [
      TechName.CPlusPlus,
      TechName.UnrealEngine3,
      TechName.UnrealScript,
    ],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Procedural Clouds',
    techNames: [TechName.CPlusPlus, TechName.OpenGL, TechName.GLSL],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'World of Warcraft Addons',
    techNames: [TechName.Lua],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Virtual Environment Simulator',
    techNames: [
      TechName.CPlusPlus,
      TechName.OpenGL,
      TechName.GLSL,
      TechName.TorqueNetworkLibrary,
    ],
    imageName: '/images/projects/dummy.jpeg',
  },
  {
    projectName: 'Self-Organizing Maps',
    techNames: [TechName.CSharp],
    imageName: '/images/projects/dummy.jpeg',
  },
];
