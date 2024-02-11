import { clsx, ClassValue } from "clsx"
import { twMerge } from "tw-merge"

export const merge = (...classes: ClassValue[]) => {
    return twMerge(clsx(classes.filter(Boolean)))
}