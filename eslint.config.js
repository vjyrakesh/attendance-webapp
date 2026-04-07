import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["src/**/*.jsx"],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
		rules: {
			semi: "warn",
       ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+
		},
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser },
    },
	},
]);

