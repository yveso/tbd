import Link from "next/link";
import NavStyles from "./styled/NavStyles";

function Nav() {
  return (
    <NavStyles>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </NavStyles>
  );
}

export default Nav;
