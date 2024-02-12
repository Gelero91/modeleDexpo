import Link from "next/link";
import btnStyle from './Button.module.css';

type buttonProps = {
    text: string;
    path: string;
    className?: string;
}

export const Button: React.FC<buttonProps> = ({text, path, className}) => {
    return (
        <Link href={path}>
            <button className={`${btnStyle.btn} ${className}`}>{text}</button>
        </Link>
    );
}