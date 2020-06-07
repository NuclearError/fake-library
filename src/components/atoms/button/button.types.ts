type ButtonVariants = 'primary' | 'secondary'

export interface ButtonProps {
    children: React.ReactNode
    ref?: React.Ref<HTMLButtonElement>
    type: 'button' | 'submit' | 'reset'
    'data-testid'?: string
    withMarginBottom?: boolean
    onClick?(event: React.MouseEvent<HTMLButtonElement>): void
}

export interface ButtonStyleProps {
    boxSizing?: string
    lineHeight?: string
    textAlign?: string
    variant?: ButtonVariants
    width?: string
    // TODO replace withMarginBottom with layout component
    withMarginBottom?: boolean
}

export interface ButtonVendorStyleProps {
    backgroundColor?: string
    backgroundColorHover?: string
    border?: string
    borderColorHover?: string
    borderRadius?: string
    boxShadow?: string
    color?: string
    colorHover?: string
    fontSize?: string
    fontWeight?: number
    padding?: string
    size?: string
}
