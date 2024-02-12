import heroMobile from "@/public/hero-mobile.jpg"
import heroDesktop from "@/public/hero-desktop.jpg"
import Image from "next/image"
import { FollowForm } from "@/ui/follow-form"

/**
 * Displays an interactive form where users can register to receive updates
 * about the latest versions and features introduced on the page.
 * The form provides a simple, interactive, and creative user experience.
 * 
 * @returns {React.ReactNode} A React element that display the main page
 */
const Home = () => {
 
    return (
        <main className="base:w-[60vw]">
            <figure className="">
                <Image className="base:hidden" width={900} height={500} src={heroMobile} alt="hero version mobiel" priority />
                <Image className="hidden base:w-[40vw] base:h-full base:block base:absolute base:top-0 base:right-0" src={heroDesktop} alt="hero version desktop" priority />
            </figure>
            <section className="w-11/12 mx-auto mt-10 mb-16 text-red text-center sm:mt-12 md:mt-14 md:mb-20 base:w-2/3 base:my-0 base:text-start">
                <div>
                    <div className="mb-4 text-[clamp(3rem,_15vw,_3.6rem)] leading-none tracking-widest uppercase sm:mb-6 md:mb-8 base:text-[clamp(3.6rem,_16vw,_5rem)]">
                        <h1 className="font-light">we're</h1>
                        <p className="text-red-200 font-semibold">coming soon</p>
                    </div>
                    <p className="sm:text-lg md:text-xl base:max-w-md">
                        Hello fellow shoppers! We're currently building our new fashion. Add your email below
                        to stay up-to-date with announcements and our launch deals.
                    </p>
                </div>
                <FollowForm />
            </section>
        </main>
    )
}

export default Home