import { Link } from "react-router-dom";

interface IProps {
    to: string;
    text: string;
}

export function NavLink(props: IProps) {
    return (
      <Link
        to={props.to}
        className="hover:tracking-widest transition-all hover:text-slate-400"
      >
        {props.text}
      </Link>
    );
}