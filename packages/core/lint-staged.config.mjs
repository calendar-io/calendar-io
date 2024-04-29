/** @type {import("lint-staged").Config} */
const config = {
  "*.{js,jsx,ts,tsx}": [
    "eslint ./src --fix"
  ],
  "*.{json,js,ts,jsx,tsx,html}": [
    "prettier ./src --write"
  ]
};

export default config;