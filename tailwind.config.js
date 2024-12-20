/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        priPink: "#ff52bf",
        priLightPink: "#ff8fd8",
        priLightRed: "#ff4242",
        // Neutral
        neuVeryDarkCyan: "#00252e",
        neuVeryPaleBlue: "	#f5faff",
        // Fonts
        textColor: "#808e9a",
        iconContact: "#00C7FA",
      },
      boxShadow: {
        btnHeroTif: "0px 0px 5px rgba(255, 82, 193, 0.218778)",
        btnDesktopHeroTif: "0px 0px 9px rgba(255, 82, 193, 0.218778);",
        btnContentGsff: "0px 3px 7px rgba(0, 37, 46, 0.223053)",
        btnDesktopContentGsff: "0px 6px 13px rgba(0, 37, 46, 0.223053)",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "stm1": "url('/src/assets/images/bg-section-top-mobile-1.svg')",
        "stm2": "url('/src/assets/images/bg-section-top-mobile-2.svg')",
        "sbm1": "url('/src/assets/images/bg-section-bottom-mobile-1.svg')",
        "sbm2": "url('/src/assets/images/bg-section-bottom-mobile-2.svg')",
        "std1": "url('/src/assets/images/bg-section-top-desktop-1.svg')",
        "std2": "url('/src/assets/images/bg-section-top-desktop-2.svg')",
        "sbd1": "url('/src/assets/images/bg-section-bottom-desktop-1.svg')",
        "sbd2": "url('/src/assets/images/bg-section-bottom-desktop-2.svg')",
        "ftm": "url('/src/assets/images/bg-footer-top-mobile.svg')",
        "ftd": "url('/src/assets/images/bg-footer-top-desktop.svg')",
      },
      backgroundSize: {
        'full-width': '100%',
      },
      backgroundPosition: {
        'bottom-5': 'center bottom -0.125rem',
      },
      screens: {
        // Tablet
        'tab': '426px',
      },
    },
  },
  plugins: [],
};
