import Link from "next/link";

type buttonProps = {
    text: string;
    path: string;
}

export const Button: React.FC<buttonProps> = ({text, path}) => {
    return (
        <Link href={path}>
            <button>{text}</button>
        </Link>
    );
}