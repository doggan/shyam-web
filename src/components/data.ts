import { TechName } from '@/components/tech-tag';
import { IWorkItem } from '@/components/experience';

export const WORK_ITEMS: IWorkItem[] = [
  {
    companyName: 'Trace',
    dates: 'Mar 2021 - July 2022',
    position: 'Staff Software Engineer',
    location: 'Remote',
    logoImageName: 'logo_trace.png',
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
  },
  {
    companyName: 'Niantic',
    dates: 'Oct 2017 - Mar 2021',
    position: 'Staff Software Engineer',
    location: 'San Francisco, CA',
    logoImageName: 'logo_niantic.jpeg',
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
    logoImageName: 'logo_evertoon.png',
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
    logoImageName: 'logo_digitaluzu.png',
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
    logoImageName: 'logo_gree.jpeg',
    description:
      'Server-side engineer and development operations on War of Nations (iOS/Android top-grossing app).\n\nGame Credits:\nWar of Nations',
    techNames: [TechName.PHP, TechName.Python],
  },
  {
    companyName: 'Kojima Productions (Konami)',
    dates: 'Sep 2009 - Sep 2013',
    position: 'Software Engineer',
    location: 'Tokyo, Japan',
    logoImageName: 'logo_konami.png',
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
    logoImageName: 'logo_ea.jpeg',
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
    logoImageName: 'logo_osc.jpeg',
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
