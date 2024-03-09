/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,js}", "./*{html,js}", "./static/script/*{html, js}"],
  theme: {
    extend: {
      width: {
        "1500px": "1500px",
        "1200px": "1200px",
        "800px": "800px",
        "600px": "600px",
        "400px": "400px",
      },
      height: {
        "1500px": "1500px",
        "1200px": "1200px",
        "800px": "800px",
        "600px": "600px",
        "400px": "400px",
      },
      boxShadow: {
        mote: " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
      },
    },
  },
  plugins: [],
};
