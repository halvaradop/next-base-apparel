import heroMobile from "@/public/hero-mobile.jpg"
import heroDesktop from "@/public/hero-desktop.jpg"
import Image from "next/image"
import { FollowForm } from "@/ui/follow-form"


const Home = () => {
 
    return (
        <main>
            <figure>
                <Image width={900} height={500} src={heroMobile} alt="hero version mobiel" priority />
            </figure>
            <section className="w-11/12 mx-auto mt-10 mb-16 text-red text-center">
                <div>
                    <div className="mb-4 text-5xl tracking-widest uppercase">
                        <h1 className="font-light">we're</h1>
                        <p className="text-red-200 font-semibold">coming soon</p>
                    </div>
                    <p className="">
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