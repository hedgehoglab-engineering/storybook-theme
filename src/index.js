import { create, color, typography } from 'storybook/theming';
import { addons } from 'storybook/manager-api';
import brandImage from './logo.svg';

const theme = create({
    base: 'dark',

    // Logo
    brandImage,

    // Storybook-specific color palette
    colorPrimary: 'rgb(24, 115, 242)',
    colorSecondary: 'rgb(24, 115, 242)',

    // UI
    appBg: 'rgb(11, 21, 31)',
    appContentBg: 'rgba(255, 255, 255, 0.05)',
    appPreviewBg: color.lightest,
    appBorderColor: 'rgba(255, 255, 255, .1)',
    appBorderRadius: 4,

    // Fonts
    fontBase: typography.fonts.base,
    fontCode: typography.fonts.mono,

    // Text colors
    textColor: 'rgb(201, 205, 207)',
    textInverseColor: 'rgb(34, 36, 37)',
    textMutedColor: 'rgb(148, 255, 194)',

    // Toolbar default and active colors
    barTextColor: 'rgb(121, 129, 134)',
    barHoverColor: color.secondary,
    barSelectedColor: color.secondary,
    barBg: 'rgba(255, 255, 255, 0.05)',

    // Form colors
    buttonBg: 'rgb(34, 36, 37)',
    buttonBorder: 'rgba(255, 255, 255, .1)',
    booleanBg: 'rgb(34, 36, 37)',
    booleanSelectedBg: 'rgb(46, 52, 56)',
    inputBg: 'rgb(27, 28, 29)',
    inputBorder: 'rgba(255, 255, 255, .1)',
    inputTextColor: color.lightest,
    inputBorderRadius: 16,
});

addons.setConfig({
    theme,
});
