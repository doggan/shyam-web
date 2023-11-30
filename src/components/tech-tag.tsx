import { clsx } from 'clsx';

export enum TechName {
  Angular = 'Angular',
  AWS = 'AWS',
  C = 'C',
  CoffeeScript = 'CoffeeScript',
  CPlusPlus = 'C++',
  CSharp = 'C#',
  CSS = 'CSS',
  GCP = 'Google Cloud (GCP)',
  GLSL = 'GLSL',
  Go = 'Go',
  GraphQL = 'GraphQL',
  HTML = 'HTML',
  Java = 'Java',
  JavaScript = 'JavaScript',
  Lua = 'Lua',
  MongoDB = 'MongoDB',
  MQTT = 'MQTT (IoT)',
  MySQL = 'MySQL',
  NextJS = 'Next.js',
  Node = 'Node.js',
  ObjectiveC = 'Obj-C',
  OpenGL = 'OpenGL',
  PHP = 'PHP',
  Python = 'Python',
  RaspberryPi = 'Raspberry Pi',
  React = 'React',
  TailwindCSS = 'Tailwind CSS',
  Terraform = 'Terraform',
  ThreeJS = 'three.js (WebGL)',
  TorqueNetworkLibrary = 'Torque Network Library',
  TypeScript = 'TypeScript',
  Unity = 'Unity',
  UnrealEngine3 = 'Unreal Engine 3',
  UnrealScript = 'UnrealScript',
  Vue = 'Vue',
  XNA = 'Microsoft XNA',
}

interface ITechTagProps {
  name: TechName;
}

function getTechTagColors(_: TechName): string {
  // I originally thought of returning a different color depending on the tech; for now
  // just keep them all the same.
  return 'text-blue-600 bg-blue-200';
}

export default function TechTag({ name }: ITechTagProps) {
  const style = clsx(
    'text-xs font-semibold inline-block py-0.5 px-1.5 rounded-full last:mr-0 mr-1',
    getTechTagColors(name),
  );

  return <span className={style}>{name}</span>;
}
