import { colors, spacingUnit, typography } from '../../../theme/variables'

const { green, white } = colors
const { lineHeight, size, weight } = typography

export const button = {
    default: {
        borderRadius: `${spacingUnit}px`,
        borderWidth: '1px',
        borderStyle: 'solid',
        boxSizing: 'border-box',
        marginBottom: `${spacingUnit * 2}px`,
        minHeight: '4.4rem',
        textAlign: 'center',
        width: '100%',
    },
    primary: {
        backgroundColor: green[400],
        backgroundColorHover: green[450],
        border: 'none',
        color: white,
        lineHeight: lineHeight.xs,
        fontSize: size.md,
        fontWeight: weight.bold,
        padding: `${spacingUnit * 3}px`,
    },
    secondary: {
        backgroundColor: white,
        backgroundColorHover: white,
        border: `1px solid ${green[400]}`,
        borderColorHover: green[450],
        color: green[400],
        colorHover: green[450],
        lineHeight: lineHeight.sm,
        fontSize: size.sm,
        fontWeight: weight.bold,
        padding: `${spacingUnit * 1.5}px`,
    },
}

export const defaultButtonStyles = { ...button.default }
export const primaryButtonStyles = { ...defaultButtonStyles, ...button.primary }
export const secondaryButtonStyles = { ...defaultButtonStyles, ...button.secondary }
