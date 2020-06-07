import React from 'react'

import { StyledButton } from './button.styled'
import { ButtonProps, ButtonStyleProps, ButtonVendorStyleProps } from './button.types'

export const Button = React.forwardRef(
    (props: ButtonProps & ButtonStyleProps & ButtonVendorStyleProps, ref: React.Ref<HTMLButtonElement>) => {
        const { children, type, ...rest } = props
        return (
            <StyledButton type={type} ref={ref} {...rest}>
                {children}
            </StyledButton>
        )
    },
)
