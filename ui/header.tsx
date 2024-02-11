import logo from "@/public/logo.svg"
import Image from "next/image"

const Header = () => {

    return (
        <header>
            <nav className="w-11/12 h-20 mx-auto flex items-center">
                <Image width={120} height={50} src={logo} alt="logo icon" priority />
            </nav>
        </header>
    )
}

export { Header }