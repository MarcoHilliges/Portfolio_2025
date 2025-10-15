function pxToRem(px: number, base = 16) {
  return (1 / base) * px + "rem";
}

module.exports = {
  prefix: "",
  mode: "jit",
  darkMode: "selector",
  fontFamily: {
    sans: ["Poppins", "sans-serif"],
  },
  content: [
    "./app/components/**/*.{vue,js,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      zIndex: {
        "1": "1",
      },
      colors: {
        page: "#fffaeb",
        pageDark: "#00000d",

        primary: {
          DEFAULT: "#010029",
          light: "#f0f0f0",
        },
        secondary: {
          DEFAULT: "#1489FE",
        },
        paragraph: {
          DEFAULT: "#84869C",
        },
        success: {
          DEFAULT: "#15D3A5",
        },
        warning: {
          DEFAULT: "#EB7F00",
        },
        error: {
          DEFAULT: "#E51F2B",
        },
        border: {
          DEFAULT: "#D5D5E2",
        },
        inputs: {
          DEFAULT: "#484962",
        },
      },
      fontSize: {
        h1: pxToRem(50),
        h2: pxToRem(18),
        h3: pxToRem(16),
        h4: pxToRem(12),
        p: pxToRem(12),
        8: pxToRem(8),
        9: pxToRem(9),
        10: pxToRem(10),
        11: pxToRem(11),
        12: pxToRem(12),
        13: pxToRem(13),
        14: pxToRem(14),
        15: pxToRem(15),
        16: pxToRem(16),
        18: pxToRem(18),
        20: pxToRem(20),
        22: pxToRem(22),
        24: pxToRem(24),
        26: pxToRem(26),
        28: pxToRem(28),
        30: pxToRem(30),
        34: pxToRem(34),
        48: pxToRem(48),
      },
      spacing: {
        0: 0,
        1: pxToRem(1),
        2: pxToRem(2),
        3: pxToRem(3),
        4: pxToRem(4),
        5: pxToRem(5),
        6: pxToRem(6),
        7: pxToRem(7),
        8: pxToRem(8),
        9: pxToRem(9),
        10: pxToRem(10),
        12: pxToRem(12),
        13: pxToRem(13),
        14: pxToRem(14),
        16: pxToRem(16),
        18: pxToRem(18),
        20: pxToRem(20),
        22: pxToRem(22),
        24: pxToRem(24),
        26: pxToRem(26),
        28: pxToRem(28),
        30: pxToRem(30),
        32: pxToRem(32),
        34: pxToRem(34),
        36: pxToRem(36),
        38: pxToRem(38),
        40: pxToRem(40),
        44: pxToRem(44),
        48: pxToRem(48),
        60: pxToRem(60),
      },
    },
  },
  plugins: [],
};
