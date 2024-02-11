import logo from "@/public/logo.svg"
import Image from "next/image"

/**
 * Displays the header of the page, containing the logo.
 * 
 * @returns {React.ReactNode} A React element that render a header section
 */
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