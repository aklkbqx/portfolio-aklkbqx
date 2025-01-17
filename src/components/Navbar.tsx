import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0">
            <div className="flex flex-row items-center justify-between p-10 py-5">
                <h1 className="text-3xl font-medium cursor-pointer">LOGO</h1>
                <ul className="flex-row flex gap-10 items-center">
                    <Link href={"/"}>
                        <li>HOME</li>
                    </Link>
                    <Link href={"/about"}>
                        <li>ABOUT</li>
                    </Link>
                    <Link href={"/blog"}>
                        <li>BLOG</li>
                    </Link>
                    <Link href={"/contact"}>
                        <li>CONTACT ME</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;