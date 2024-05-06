import { defineRollupConfig } from 'config'

export default defineRollupConfig({
  input: [
    {
      name: 'core',
      path: './src/index.ts',
      globalVariableName: 'CalendarIOCore',
    },
  ],
  globals: {},
  outputs: {
    cjs: false,
    umd: {globals: {}},
    browser: {globals: {}},
  },
});