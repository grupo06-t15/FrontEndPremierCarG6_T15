import { ReactNode } from "react";

interface IBaseTextProps {
    children: ReactNode;
    tag: "h1" | "p" | "ul" | "li";
    className?: string;
}

const BaseText = ({ children, tag, className }: IBaseTextProps) => (
    <>
        {tag === "h1" && <h1 className={className}>{children}</h1>}
        {tag === "p" && <p className={className}>{children}</p>}
        {tag === "ul" && <ul className={className}>{children}</ul>}
        {tag === "li" && <li className={className}>{children}</li>}
    </>
);

export default BaseText;
