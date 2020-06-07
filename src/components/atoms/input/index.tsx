import React from 'react'

export const Input = React.forwardRef(
    (props) => {
        const { children, ...rest } = props
        return (
            <input type="text" {...rest}>
                {children}
            </input>
        )
    },
)

