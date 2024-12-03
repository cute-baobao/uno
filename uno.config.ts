import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import presetTheme from "unocss-preset-theme";
import type { Theme } from "unocss/preset-uno"
import { myTheme } from "./src/assets/myTheme"
export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
    presetTheme<Theme>({
        theme: myTheme,
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})