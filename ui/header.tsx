import logo from "@/public/logo.svg"
import Image from "next/image"

/**
 * Displays the header of the page, containing the logo.
 * 
 * @returns {React.ReactNode} A React element that render a header section
 */
const Header = () => {

    return (
        <header className="base:w-[60vw]">
            <nav className="w-11/12 h-20 mx-auto flex items-center base:w-2/3">
                <Image width={120} height={50} src={logo} alt="logo icon" priority />
            </nav>
        </header>
    )
}

export { Header }