import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Onsenccupe — palette plus chaude
        brand: {
          DEFAULT: "#1a2f4a",
          dark: "#0c1a2b",
          light: "#2a4a6e",
        },
        // Orange CTA marketing (plus vif)
        accent: {
          DEFAULT: "#f07a2e",
          hover: "#d96a22",
          foreground: "#ffffff",
        },
        surface: "#faf8f5",
        // Tokens shadcn (CSS variables)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // Alias pour hover shadcn (ne remplace pas accent orange)
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(26, 47, 74, 0.07)",
        glow: "0 0 40px -8px rgba(240, 122, 46, 0.45)",
        elevate: "0 24px 60px -20px rgba(12, 26, 43, 0.32)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "shiny-text": "shiny-text 5s ease-in-out infinite",
        "shimmer-slide": "shimmer-slide 2.4s ease-in-out infinite",
        ripple: "ripple 3.2s ease-out infinite",
        "float-soft": "float-soft 6s ease-in-out infinite",
        aurora: "aurora 12s ease infinite",
        "border-spin":
          "border-spin var(--beam-duration, 8s) linear infinite var(--beam-delay, 0s)",
        "ken-burns": "ken-burns 22s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundSize: {
        "300%": "300% 300%",
      },
    },
  },
  plugins: [
    // Charge uniquement si installé (évite de casser Tailwind avant `npm install`)
    (() => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        return require("tailwindcss-animate");
      } catch {
        return null;
      }
    })(),
  ].filter(Boolean),
};

export default config;
