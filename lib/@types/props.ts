import { Styles } from './types';
import { InputHTMLAttributes } from "react"

/**
 * @author Hernan Alvarado
 */
export interface LayoutProps {
    children: React.ReactNode
}

export type InputProps = Styles & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color">