import { clsx, ClassValue } from "clsx"
import { twMerge } from "tw-merge"

/**
 * This function unifies and joins the classes sorted by their priority and importance
 * in the way they are inserted into the function. It facilitates better development
 * by eliminating the need to worry about the order or duplicate classes inside the component.
 * 
 * @param classes The utilities inserted previously.
 * @returns {string} The unified class string without repeated classes
 * 
 */
export const merge = (...classes: ClassValue[]): string => {
    return twMerge(clsx(classes.filter(Boolean)))
}