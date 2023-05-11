import { UnreachableCaseError } from '@/utils/unreachable-error';
import { clsx } from 'clsx';

export enum TechName {
    AWS = "AWS",
    CSharp = 'C#',
    Java = "Java",
    Node = "Node.js",
    ObjectiveC = "Obj-C",
    Python = "Python",
    Unity = 'Unity',
}

interface ITechTagProps {
    name: TechName;
}

function getTechTagColors(name: TechName): string {
    switch (name) {
        // TODO(shyam): different color schemes for each tag type
        case TechName.AWS: return "text-blue-600 bg-blue-200";
        case TechName.CSharp: return "text-blue-600 bg-blue-200";
        case TechName.Java: return "text-blue-600 bg-blue-200";
        case TechName.Node: return "text-blue-600 bg-blue-200";
        case TechName.ObjectiveC: return "text-blue-600 bg-blue-200";
        case TechName.Python: return "text-blue-600 bg-blue-200";
        case TechName.Unity: return "text-blue-600 bg-blue-200";
        default:
            throw new UnreachableCaseError(name);
    }
}

export default function TechTag({ name }: ITechTagProps) {
    const style = clsx(
        "text-xs font-semibold inline-block py-1 px-2 rounded-full last:mr-0 mr-1",
        getTechTagColors(name));

    return (
        <span className={style}>
            {name}
        </span>
    );
}