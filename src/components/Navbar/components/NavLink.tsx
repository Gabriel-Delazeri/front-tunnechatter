import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    href: string
    title: string
}

export default function NavLink({ href, title } : Props) {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${
        router.pathname == href ? "text-indigo-300" : "text-white"
      } flex hover:text-indigo-400 transition-colors px-3 py-2 rounded-md text-sm font-medium`}
    >
        {title}
    </Link>
  );
}
