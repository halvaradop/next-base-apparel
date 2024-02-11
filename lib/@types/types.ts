/**
 * This file contains various types that orchestrate the project. 
 * They are separated by type to leverage the advantages of TypeScript,
 * facilitating the growth of the project and clarifying the required data.
 * 
 * @author Hernan Alvarado
 * @global
 */

export type Sizes = "xs" | "sm" | "md" | "xl" | "2xl" | "3xl"

export interface Styles {
    size: Sizes,
    color?: string
}

export type Variant<T extends string> = Partial<Record<Sizes | T, string>>