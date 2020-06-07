import styled from 'styled-components'

import { primaryButtonStyles, secondaryButtonStyles } from './button.variables'
import { ButtonStyleProps, ButtonVendorStyleProps } from './button.types'

export const PRIMARY = 'primary'
export const SECONDARY = 'secondary'

// TODO every style should use the same valueToDisplay function. Ticket here: https://paddle.atlassian.net/browse/BILL-905
export const valueToDisplay = (propertyValue:any, propertyName:any, variant:any) => {
    if (propertyValue) {
        return propertyValue
    }
    return variant === SECONDARY ? secondaryButtonStyles[propertyName] : primaryButtonStyles[propertyName]
}

export const StyledButton = styled.button<ButtonStyleProps & ButtonVendorStyleProps>`
    background-color: ${({ variant, theme }) =>
        variant === SECONDARY ? theme.cancelBtnBackgroundColor : theme.genericBtnBackgroundColor};
    border-radius: ${({ borderRadius, variant }) => valueToDisplay(borderRadius, 'borderRadius', variant)};
    border: ${({ variant, theme }) =>
        variant === SECONDARY
            ? `${primaryButtonStyles.borderWidth} ${primaryButtonStyles.borderStyle} ${theme.cancelBtnBorderColor}`
            : primaryButtonStyles.border};
    color: ${({ variant, theme }) => (variant === SECONDARY ? theme.cancelBtnColor : theme.uiWhite)};
    cursor: pointer;
    box-sizing: ${({ boxSizing, variant }) => valueToDisplay(boxSizing, 'boxSizing', variant)};
    box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : 'none')};
    line-height: ${({ lineHeight, variant }) => valueToDisplay(lineHeight, 'lineHeight', variant)};
    margin-bottom: ${({ withMarginBottom }) => (withMarginBottom ? primaryButtonStyles.marginBottom : 'auto')};
    min-height: ${({ variant }) => (variant === SECONDARY ? 'auto' : primaryButtonStyles.minHeight)};
    padding: ${({ padding, variant }) => valueToDisplay(padding, 'padding', variant)};
    font-size: ${({ fontSize, variant }) => valueToDisplay(fontSize, 'fontSize', variant)};
    text-align: ${({ textAlign, variant }) => valueToDisplay(textAlign, 'textAlign', variant)};
    font-weight: ${({ fontWeight, variant }) => valueToDisplay(fontWeight, 'fontWeight', variant)};
    width: ${({ width, variant }) => valueToDisplay(width, 'width', variant)};
    &:hover {
        background-color: ${({ variant, theme }) =>
            variant === SECONDARY ? theme.cancelBtnBackgroundHoverColor : theme.genericBtnHoverColor};
        border-color: ${({ variant, theme }) =>
            variant === SECONDARY ? theme.cancelBtnBorderHoverColor : primaryButtonStyles.border};
        color: ${({ variant, theme }) => (variant === SECONDARY ? theme.cancelBtnHoverColor : theme.uiWhite)};
    }
`
