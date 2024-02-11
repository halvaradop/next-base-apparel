import { InputProps } from "@/lib/@types/props"
import { Sizes, Variant } from "@/lib/@types/types"
import { merge } from "@/lib/merge"

/**
 * Contains the variants for the size property used in the input component.
 */
const sizeVariants: Variant<Sizes> = {
    md: "h-10 indent-4 border rounded-md",
    "3xl": "w-full h-10 border rounded-full"
}

/**
 * Contains the variants for the color property used in the input component.
 */
const colorVariants: Variant<string> = {
    "red": "text-red border-red placeholder-red user-invalid:border-red-100 user-invalid:ring-1 user-invalid:ring-red-100",
    "red-grd-200": "border-transparent bg-grd-200"
}

/**
 * Custom input component that allows us to have a variety of variants and
 * styles based on two props and the charge. Renders the input tag
 * with the given variants.
 * 
 * @param props the props required for the component in its called 
 * @returns {React.ReactNode} A react component thats renders the input tag
 */
const Input = ({ className, type = "text", value, size, color, name, id, placeholder, disabled = false, required = false, onClick, onChange }: InputProps) => {

    return (
        <input 
            className={merge(sizeVariants[size], colorVariants[color ?? ""], className)}
            type={type}
            value={value}
            id={id} 
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            onClick={onClick}
            onChange={onChange}
        />
    )
}

export { Input }