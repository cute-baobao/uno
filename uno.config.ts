import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetIcons,
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
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
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