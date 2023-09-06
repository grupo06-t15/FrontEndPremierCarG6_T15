# FrontEndPremierCarG6_T15
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list




## How to Use:
- Navigate to the project folder.
- Run npm install to install the dependencies.
- Next, run npm run dev.
- Access the application through your web browser (frontend).
Note: When running the command, you'll see the link where the application is running. Simply click on the link.
You will be directed to the application page.
- Alternatively, you can use your choice of HTTP client, such as Insomnia or Postman, to interact with the backend.

 # Features:

- User registration.
- Login functionality.
- The possibility to put a vehicle up for sale.
- Viewing and browsing of listed vehicles.
- Ability to delete or update an announcement.
- purchase a vehicle.
- delete the account.


