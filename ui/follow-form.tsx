"use client"
import Image from "next/image"
import { ChangeEvent, FormEvent, useState } from "react"
import { Input } from "@/ui/custom/input"
import arrowIcon from "@/public/icon-arrow.svg"
import wrongIcon from "@/public/icon-error.svg"


/**
 * This form allows users to register on the website to receive updates
 * and stay informed about the latest news and events.
 * 
 * @returns {React.ReactNode} A react element that renders a form
 */
const FollowForm = () => {
    const [email, setEmail] = useState("")

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setEmail("")
    }

    return (
        <form className="w-full max-w-sm mx-auto mt-8" onSubmit={handleSubmit}>
            <label className="block relative" htmlFor="email">
                <Input className="peer indent-4" type="email" value={email} size="3xl" color="red" name="email" placeholder="Email Address" onChange={handleChangeEmail} />
                <div className="w-min flex items-center justify-center absolute top-0 right-0 z-10">
                    <Input className="w-16 indent-0 rounded-full" type="submit" size="3xl" value="" color="red-grd-200" />
                    <Image className="absolute pointer-events-none" width={16} height={16} src={arrowIcon} alt="arrow icon"  />
                    <Image className="hidden absolute right-20 peer-invalid:block" src={wrongIcon} alt="wrong icon" />
                </div>
                <span className="mr-auto mt-2 block  invisible text-red-100 text-left peer-invalid:visible">Pleas provide a valid email</span>
            </label>
        </form>
    )
}

export { FollowForm }