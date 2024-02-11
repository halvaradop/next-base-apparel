
export type Sizes = "xs" | "sm" | "md" | "xl" | "2xl" | "3xl"

export interface Styles {
    size: Sizes,
    color?: string
}

export type Variant<T extends string> = Partial<Record<Sizes | T, string>>