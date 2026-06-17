import localFont from "next/font/local"

export const primaryFont = localFont({
  src: [
    {
      path: "../public/fonts/TAN-NIMBUS.ttf",
    },
  ],
  variable: "--font-primary",
  display: "swap",
});

export const secondaryFont = localFont({
  src: [
    {
      path: "../public/fonts/Agrandir-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Agrandir-GrandHeavy.otf",
      weight: "900",
    },
  ],
  variable: "--font-secondary",
  display: "swap",
});

export const tertiaryFont = localFont({
  src: [
    {
      path: "../public/fonts/halimun.regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-tertiary",
  display: "swap",
});
