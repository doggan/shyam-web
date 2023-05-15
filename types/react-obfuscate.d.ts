declare module 'react-obfuscate' {
    export class Obfuscate extends React.Component<ObfuscateProps, any> { }

    export interface ObfuscateProps {
        children?: any;
        className?: string;
        'aria-label'?: string;
        email: string;
    }

    export default Obfuscate;
}
