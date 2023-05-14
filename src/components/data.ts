import { TechName } from '@/components/tech-tag';
import { IWorkItem } from '@/components/experience';
import { IProjectItem } from './projects';

const TRACE_TECH = [
  TechName.Go,
  TechName.GraphQL,
  TechName.React,
  TechName.TypeScript,
  TechName.AWS,
  TechName.MySQL,
  TechName.Terraform,
];

const NIANTIC_TECH = [
  TechName.Java,
  TechName.CSharp,
  TechName.Angular,
  TechName.Unity,
  TechName.GCP,
];

const EVERTOON_TECH = [
  TechName.CSharp,
  TechName.Unity,
  TechName.ObjectiveC,
  TechName.Java,
  TechName.Python,
  TechName.Node,
  TechName.AWS,
];

export const WORK_ITEMS: IWorkItem[] = [
  {
    companyName: 'Trace',
    dates: 'Mar 2021 - July 2022',
    position: 'Staff Software Engineer',
    location: 'Remote',
    logoImageName: '/images/logo_trace.png',
    description: 'The headcount and spend platform built for teams.',
    techNames: TRACE_TECH,
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
    description: 'Building technologies and ideas that move us.',
    techNames: NIANTIC_TECH,
  },
  {
    companyName: 'Evertoon',
    dates: 'Aug 2015 - Oct 2017',
    position: 'Founding Lead Engineer',
    location: 'San Francisco, CA',
    logoImageName: '/images/logo_evertoon.png',
    description:
      'Bringing moviemaking to the masses. Acquired by Niantic in 2017.',
    techNames: EVERTOON_TECH,
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

export const PROJECT_ITEMS: IProjectItem[] = [
  {
    projectName: 'Karate Kata Visualizer',
    techNames: [TechName.HTML, TechName.JavaScript],
    imageName: '/images/projects/kata.png',
    description: 'A tool for visualizing karate kata foot movements.',
    year: '2023',
    url: 'https://doggan.github.io/kata-vis/',
  },
  {
    projectName: 'Trace',
    techNames: [
      TechName.Go,
      TechName.GraphQL,
      TechName.React,
      TechName.TypeScript,
      TechName.AWS,
      // Saving some space...
      TechName.MySQL,
      // TechName.Terraform,
    ],
    imageName: '/images/projects/trace.png',
    description:
      'A headcount and spend platform built for teams. I worked as a full-stack engineer on core headcount planning features, reports, and external integrations.',
    year: '2021 - 2022',
  },
  {
    projectName: 'Pokémon GO',
    techNames: NIANTIC_TECH,
    imageName: '/images/projects/pgo.png',
    description:
      'An augmented reality (AR) mobile game, based on the Pokémon franchise. I worked as a full-stack engineer and tech lead on social, accounts, and event ticketing systems.',
    year: '2017 - 2021',
  },
  {
    projectName: 'Sequence Diagrams',
    techNames: [TechName.Vue, TechName.JavaScript],
    imageName: '/images/projects/sequence.png',
    description: 'A web app for turning text into sequence diagrams.',
    year: '2020',
    url: 'https://doggan.github.io/sequence-app/',
  },
  {
    projectName: 'Habit Tracker - Template Generator',
    techNames: [TechName.React],
    imageName: '/images/projects/habit.png',
    description:
      'A tool for generating monthly calendar views for tracking habits.',
    year: '2021',
    url: 'https://doggan.github.io/habit-template-gen/',
  },
  {
    projectName: 'News Cloud',
    techNames: [TechName.Node, TechName.Python],
    imageName: '/images/projects/newscloud.png',
    description: 'Compare news media bias with word clouds.',
    year: '2017',
    url: 'https://doggan.github.io/news-cloud/',
  },
  {
    projectName: 'Evertoon',
    techNames: EVERTOON_TECH,
    imageName: '/images/projects/evertoon.png',
    description:
      'Helped build and launch Evertoon, a movie-making and story-telling app, peaking at #100 in Entertainment on the App Store.',
    year: '2015 - 2017',
    url: 'https://www.youtube.com/watch?v=rapPbCXWFHY',
  },
  {
    projectName: 'HDL Atom Syntax Highlighter',
    techNames: [TechName.CoffeeScript],
    imageName: '/images/projects/hdl.gif',
    description: 'Atom editor language support for HDL files.',
    year: '2017',
    url: 'https://github.com/doggan/language-hdl',
  },
  {
    projectName: 'DiabloGL',
    techNames: [TechName.Node, TechName.CPlusPlus],
    imageName: '/images/projects/diablo.gif',
    description: 'A re-implementation of the original Diablo for the web.',
    year: '2015',
    url: 'https://github.com/doggan/diablogl',
  },
  {
    projectName: 'Recursive Image Twitter Bot',
    techNames: [TechName.Node],
    imageName: '/images/projects/recurrimg.png',
    description: 'A Twitter bot for performing recursive image searches.',
    year: '2015',
    url: 'https://github.com/doggan/recurrimg-bot',
  },
  {
    projectName: 'Monday Night Monsters',
    techNames: [TechName.CSharp, TechName.Unity],
    imageName: '/images/projects/mnm.jpeg',
    description:
      'A semi-turn-based football game. Originally a Ludum Dare game jam entry that came in 13 out of 2.5K+ entries.',
    year: '2015',
    url: 'https://github.com/doggan/ld-33',
  },
  {
    projectName: 'War of Nations',
    techNames: [TechName.PHP, TechName.Python],
    imageName: '/images/projects/warofnations.jpg',
    description:
      'A free-to-play MMO strategy game for iOS and Android. I worked on an overhaul of the translation and localization pipeline',
    year: '2015',
  },
  {
    projectName: 'Metal Gear Solid V: The Phantom Pain',
    techNames: [TechName.CPlusPlus, TechName.CSharp, TechName.Lua],
    imageName: '/images/projects/mgs5.jpg',
    description:
      'An action-adventure stealth video game for consoles. I worked on core engine and AI systems, with contributions to gameplay, editor and tools.',
    year: '2015',
    url: 'https://www.youtube.com/watch?v=A9JV0EvCkMI',
  },
  {
    projectName: 'Shirt Visualizer',
    techNames: [TechName.JavaScript, TechName.ThreeJS],
    imageName: '/images/projects/shirt.png',
    description: 'Browser-based visualizer for a dress shirt design company.',
    year: '2015',
    url: 'https://www.youtube.com/watch?v=0jUYjxaucwA',
  },
  {
    projectName: 'Nimble Bookmarks',
    techNames: [TechName.JavaScript, TechName.HTML, TechName.CSS],
    imageName: '/images/projects/nimblebookmarks.jpeg',
    description:
      'A Chrome extension for quick and compact access to your bookmarks.',
    year: '2015',
    url: 'https://chrome.google.com/webstore/detail/nimble-bookmarks/mmfbkidhlepkdlpnepfimdhnojafkcog?hl=en',
  },
  {
    projectName: 'Tiny Tapper',
    techNames: [TechName.CSharp, TechName.Unity],
    imageName: '/images/projects/tinytapper.jpeg',
    description: 'A game designed and created for toddlers and young kids.',
    year: '2014',
  },
  {
    projectName: 'Happy Bard',
    techNames: [TechName.CSharp, TechName.Unity],
    imageName: '/images/projects/happybard.jpeg',
    description:
      'An epic hat-collecting adventure. Originally created in 24 hours for an indie game jam.',
    year: '2014',
  },
  {
    projectName: 'Rank Me',
    techNames: [TechName.Node],
    imageName: '/images/projects/leaderboard.png',
    description:
      'A leaderboard package for the ranking of non-unique usernames.',
    year: '2014',
    url: 'https://github.com/doggan/rank-me',
  },
  {
    projectName: 'Metal Gear Solid V: Ground Zeroes',
    techNames: [
      TechName.CPlusPlus,
      TechName.CSharp,
      TechName.Lua,
      TechName.Python,
    ],
    imageName: '/images/projects/mgs5gz.png',
    description:
      'An action-adventure stealth video game for consoles. I worked on core engine and AI systems, with contributions to gameplay, editor and tools.',
    year: '2014',
    url: 'https://www.youtube.com/watch?v=ltH1eWxZutE',
  },
  {
    projectName: 'BEAT DRIFT',
    techNames: [TechName.CSharp, TechName.Unity, TechName.Node],
    imageName: '/images/projects/beatdrift.png',
    description:
      'A fast-paced action game with unforgiving rhythm-based gameplay for iOS and Android.',
    year: '2013',
    url: 'https://www.youtube.com/watch?v=seidCy_WvJQ',
  },
  {
    projectName: 'Grid Plotter',
    techNames: [TechName.Python],
    imageName: '/images/projects/grid.png',
    description:
      'A script for plotting data onto a grid and generating an image.',
    year: '2012',
    url: 'https://github.com/doggan/grid-plot',
  },
  {
    projectName: 'Metal Gear Solid: Peace Walker',
    techNames: [TechName.C],
    imageName: '/images/projects/peacewalker.jpeg',
    description:
      'An action-adventure stealth video game for consoles. I performed AI debugging, playtesting and boss/weapon balancing support.',
    year: '2010',
    url: 'https://www.youtube.com/watch?v=x0kQYYuVvSA',
  },
  {
    projectName: 'Artemis Chronicle',
    techNames: [TechName.CSharp, TechName.XNA],
    imageName: '/images/projects/artemis.png',
    description:
      'An indie game developed as part of a student team. My roles were physics, AI, editor and gameplay, while providing support to the core engine developer.',
    year: '2009',
    url: 'https://www.youtube.com/watch?v=m7z0qUIBqug',
  },
  {
    projectName: 'LMNO',
    techNames: [
      TechName.CPlusPlus,
      TechName.UnrealEngine3,
      TechName.UnrealScript,
    ],
    imageName: '/images/projects/lmno.png',
    description:
      'A video game that was in development by Electronic Arts with Steven Spielberg. I contributed to gameplay systems related to character movement and UI menu navigation.',
    year: '2008',
    url: 'https://www.youtube.com/watch?v=zT35UsSYqS8',
  },
  {
    projectName: 'Procedural Clouds',
    techNames: [TechName.CPlusPlus, TechName.OpenGL, TechName.GLSL],
    imageName: '/images/projects/clouds.jpeg',
    description:
      'A module for procedurally generated, real-time, GPU-based clouds.',
    year: '2007',
    url: 'https://github.com/doggan/code-dump/tree/master/clouds',
  },
  {
    projectName: 'WoWCalc',
    techNames: [TechName.Lua],
    imageName: '/images/projects/wowcalc.jpeg',
    year: '2007',
    description: 'An in-game calculator add-on for World of Warcraft.',
    url: 'https://github.com/doggan/wow-calc',
  },
  {
    projectName: 'WoWSlang',
    techNames: [TechName.Lua],
    imageName: '/images/projects/wowslang.jpeg',
    year: '2007',
    description:
      'A in-game dictionary add-on of commonly used World of Warcraft slang.',
    url: 'https://github.com/doggan/wow-slang',
  },
  {
    projectName: 'Virtual Environment Simulator',
    techNames: [
      TechName.CPlusPlus,
      TechName.OpenGL,
      TechName.GLSL,
      TechName.TorqueNetworkLibrary,
    ],
    imageName: '/images/projects/ve.jpg',
    description:
      'Developed software for virtual reality simulations, supporting stereoscopic graphics, networking, physics, audio, user-interfaces and input devices.',
    year: '2006',
    url: 'https://pubmed.ncbi.nlm.nih.gov/18391354/',
  },
  {
    projectName: 'Self-Organizing Maps',
    techNames: [TechName.CSharp],
    imageName: '/images/projects/som.jpg',
    description:
      'Self-Organizing Map (SOM) algorithm and demo apps using unsupervised learning.',
    year: '2005',
    url: 'https://github.com/doggan/som-demos',
  },
  {
    projectName: 'Wallpaper Algorithm Visualizer',
    techNames: [TechName.CSharp],
    imageName: '/images/projects/wallpaper.png',
    description:
      'An implementation of the Wallpaper Algorithm as described in The New Turing Omnibus.',
    year: '2005',
    url: 'https://github.com/doggan/wallpaper-algorithm',
  },
];
