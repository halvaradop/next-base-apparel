import { Styles } from './types';
import { InputHTMLAttributes } from "react"

/**
 * This file contains the props required by the custom components within the project.
 * It documents the creation of new props or the extension of existing ones.
 * @author Hernan Alvarado
 * @global
*/
export interface LayoutProps {
    children: React.ReactNode
}

export type InputProps = Styles & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color">