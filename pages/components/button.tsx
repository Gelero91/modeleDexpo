import Link from "next/link";
import btnStyle from './button.module.css';

type buttonProps = {
    text: string;
    path: string;
    className?: string;
}

export const Button: React.FC<buttonProps> = ({text, path, className}) => {
    return (
        <Link href={path}>
            <button className={`${className} ${btnStyle.btn}`}>{text}</button>
        </Link>
    );
}