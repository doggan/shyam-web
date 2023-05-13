import { UnreachableCaseError } from '@/utils/unreachable-error';
import { clsx } from 'clsx';

export enum TechName {
  Angular = 'Angular',
  AWS = 'AWS',
  C = 'C',
  CPlusPlus = 'C++',
  CSharp = 'C#',
  GCP = 'Google Cloud (GCP)',
  GLSL = 'GLSL',
  Go = 'Go',
  GraphQL = 'GraphQL',
  Java = 'Java',
  JavaScript = 'JavaScript',
  Lua = 'Lua',
  MySQL = 'MySQL',
  Node = 'Node.js',
  ObjectiveC = 'Objective-C',
  OpenGL = 'OpenGL',
  PHP = 'PHP',
  Python = 'Python',
  React = 'React',
  Terraform = 'Terraform',
  ThreeJS = 'three.js (WebGL)',
  TorqueNetworkLibrary = 'Torque Network Library',
  TypeScript = 'TypeScript',
  Unity = 'Unity',
  UnrealEngine3 = 'Unreal Engine 3',
  UnrealScript = 'UnrealScript',
}

interface ITechTagProps {
  name: TechName;
}

function getTechTagColors(name: TechName): string {
  switch (name) {
    // TODO(shyam): different color schemes for each tag type
    case TechName.Angular:
      return 'text-blue-600 bg-blue-200';
    case TechName.AWS:
      return 'text-blue-600 bg-blue-200';
    case TechName.C:
      return 'text-blue-600 bg-blue-200';
    case TechName.CPlusPlus:
      return 'text-blue-600 bg-blue-200';
    case TechName.CSharp:
      return 'text-blue-600 bg-blue-200';
    case TechName.GCP:
      return 'text-blue-600 bg-blue-200';
    case TechName.GLSL:
      return 'text-blue-600 bg-blue-200';
    case TechName.Go:
      return 'text-blue-600 bg-blue-200';
    case TechName.GraphQL:
      return 'text-blue-600 bg-blue-200';
    case TechName.Java:
      return 'text-blue-600 bg-blue-200';
    case TechName.JavaScript:
      return 'text-blue-600 bg-blue-200';
    case TechName.Lua:
      return 'text-blue-600 bg-blue-200';
    case TechName.MySQL:
      return 'text-blue-600 bg-blue-200';
    case TechName.Node:
      return 'text-blue-600 bg-blue-200';
    case TechName.ObjectiveC:
      return 'text-blue-600 bg-blue-200';
    case TechName.OpenGL:
      return 'text-blue-600 bg-blue-200';
    case TechName.PHP:
      return 'text-blue-600 bg-blue-200';
    case TechName.Python:
      return 'text-blue-600 bg-blue-200';
    case TechName.React:
      return 'text-blue-600 bg-blue-200';
    case TechName.Terraform:
      return 'text-blue-600 bg-blue-200';
    case TechName.ThreeJS:
      return 'text-blue-600 bg-blue-200';
    case TechName.TorqueNetworkLibrary:
      return 'text-blue-600 bg-blue-200';
    case TechName.TypeScript:
      return 'text-blue-600 bg-blue-200';
    case TechName.Unity:
      return 'text-blue-600 bg-blue-200';
    case TechName.UnrealEngine3:
      return 'text-blue-600 bg-blue-200';
    case TechName.UnrealScript:
      return 'text-blue-600 bg-blue-200';
    default:
      throw new UnreachableCaseError(name);
  }
}

export default function TechTag({ name }: ITechTagProps) {
  const style = clsx(
    'text-xs font-semibold inline-block py-1 px-2 rounded-full last:mr-0 mr-1',
    getTechTagColors(name),
  );

  return <span className={style}>{name}</span>;
}
