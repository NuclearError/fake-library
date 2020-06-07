import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Button } from 'components/atoms'
import { PRIMARY, SECONDARY, valueToDisplay } from 'components/atoms/button/button.styled'
import { primaryButtonStyles, secondaryButtonStyles } from 'components/atoms/button/button.variables'
import { getPrimaryColourTheme } from 'styles/themes/custom'
import { light } from 'styles/themes/modes'

describe('Button atom component', () => {
    const text = 'Hello G'

    it('renders a button element with correct text', () => {
        const { getByText } = render(
            <ThemeProvider theme={light}>
                <Button type="button">{text}</Button>
            </ThemeProvider>,
        )
        expect(getByText(text, { selector: 'button' })).toBeInTheDocument()
    })

    it('renders a primary button with the correct styles', () => {
        const { container } = render(
            <ThemeProvider theme={light}>
                <Button type="button">{text}</Button>
            </ThemeProvider>,
        )

        expect(container.firstChild).toHaveStyle(`background-color: ${light.genericBtnBackgroundColor}`)
        expect(container.firstChild).toHaveStyle(`border-radius: ${primaryButtonStyles.borderRadius}`)
        expect(container.firstChild).toHaveStyle(`box-sizing: ${primaryButtonStyles.boxSizing}`)
        expect(container.firstChild).toHaveStyle(`color: ${light.uiWhite}`)
        expect(container.firstChild).toHaveStyle(`line-height: ${primaryButtonStyles.lineHeight}`)
        expect(container.firstChild).toHaveStyle(`padding: ${primaryButtonStyles.padding}`)
        expect(container.firstChild).toHaveStyle(`font-size: ${primaryButtonStyles.fontSize}`)
        expect(container.firstChild).toHaveStyle(`text-align: ${primaryButtonStyles.textAlign}`)
        expect(container.firstChild).toHaveStyle(`font-weight: ${primaryButtonStyles.fontWeight}`)
        expect(container.firstChild).toHaveStyle(`width: ${primaryButtonStyles.width}`)
    })

    it('renders a secondary button with the correct styles', () => {
        const { container } = render(
            <ThemeProvider theme={light}>
                <Button type="button" variant="secondary">
                    {text}
                </Button>
            </ThemeProvider>,
        )

        expect(container.firstChild).toHaveStyle(`background-color: ${light.cancelBtnBackgroundColor}`)
        expect(container.firstChild).toHaveStyle(`border: 1px solid ${light.cancelBtnColor}`)
        expect(container.firstChild).toHaveStyle(`border-radius: ${secondaryButtonStyles.borderRadius}`)
        expect(container.firstChild).toHaveStyle(`box-sizing: ${secondaryButtonStyles.boxSizing}`)
        expect(container.firstChild).toHaveStyle(`color: ${light.cancelBtnColor}`)
        expect(container.firstChild).toHaveStyle(`line-height: ${secondaryButtonStyles.lineHeight}`)
        expect(container.firstChild).toHaveStyle(`padding: ${secondaryButtonStyles.padding}`)
        expect(container.firstChild).toHaveStyle(`font-size: ${secondaryButtonStyles.fontSize}`)
        expect(container.firstChild).toHaveStyle(`text-align: ${secondaryButtonStyles.textAlign}`)
        expect(container.firstChild).toHaveStyle(`font-weight: ${secondaryButtonStyles.fontWeight}`)
        expect(container.firstChild).toHaveStyle(`width: ${secondaryButtonStyles.width}`)
    })

    it('renders a button with custom props', () => {
        const customBrandColor = '#FF0'
        const customBorderRadius = '50%'
        const customBoxSizing = 'content-box'
        const customBoxShadow = '10px 5px 5px red'
        const customLineHeight = '100px'
        const customPadding = '300px'
        const customSize = '30px'
        const customTextAlign = 'right'
        const customWeight = 100
        const customWidth = '200px'
        const customTheme = { ...light, ...getPrimaryColourTheme(customBrandColor) }

        const { container } = render(
            <ThemeProvider theme={customTheme}>
                <Button
                    borderRadius={customBorderRadius}
                    boxShadow={customBoxShadow}
                    boxSizing={customBoxSizing}
                    fontSize={customSize}
                    fontWeight={customWeight}
                    lineHeight={customLineHeight}
                    padding={customPadding}
                    textAlign={customTextAlign}
                    type="button"
                    width={customWidth}
                >
                    {text}
                </Button>
            </ThemeProvider>,
        )

        expect(container.firstChild).toHaveStyle(`background-color: ${customTheme.genericBtnBackgroundColor}`)
        expect(container.firstChild).toHaveStyle(`border: ${primaryButtonStyles.border}`)
        expect(container.firstChild).toHaveStyle(`border-radius: ${customBorderRadius}`)
        expect(container.firstChild).toHaveStyle(`box-sizing: ${customBoxSizing}`)
        expect(container.firstChild).toHaveStyle(`color: ${customTheme.uiWhite}`)
        expect(container.firstChild).toHaveStyle(`line-height: ${customLineHeight}`)
        expect(container.firstChild).toHaveStyle(`padding: ${customPadding}`)
        expect(container.firstChild).toHaveStyle(`font-size: ${customSize}`)
        expect(container.firstChild).toHaveStyle(`text-align: ${customTextAlign}`)
        expect(container.firstChild).toHaveStyle(`font-weight: ${customWeight}`)
        expect(container.firstChild).toHaveStyle(`width: ${customWidth}`)
    })

    it('should call onClick handler when button is clicked', () => {
        const mockFunction = jest.fn()
        const { getByText } = render(
            <ThemeProvider theme={light}>
                <Button type="button" onClick={mockFunction}>
                    {text}
                </Button>
            </ThemeProvider>,
        )

        fireEvent.click(getByText(text, { selector: 'button' }))
        expect(mockFunction).toHaveBeenCalled()
    })

    it('returns a button component with margin bottom set', () => {
        const { container } = render(
            <ThemeProvider theme={light}>
                <Button type="button" withMarginBottom={true}>
                    {text}
                </Button>
            </ThemeProvider>,
        )
        expect(container.firstChild).toHaveStyle(`margin-bottom: ${primaryButtonStyles.marginBottom}`)
    })
})

describe('valueToDisplay function', () => {
    it('returns a primary CSS value', () => {
        expect(valueToDisplay(null, 'backgroundColor', PRIMARY)).toBe(primaryButtonStyles.backgroundColor)
    })
    it('returns a secondary CSS value', () => {
        expect(valueToDisplay(null, 'backgroundColor', SECONDARY)).toBe(secondaryButtonStyles.backgroundColor)
    })
    it('returns a custom CSS value', () => {
        const RED = 'red'
        expect(valueToDisplay(RED, 'backgroundColor', null)).toBe(RED)
    })
})
