
# Webpack Template

Welcome to the **Webpack Template**! This template is designed to make setting up and deploying Webpack-based projects fast and hassle-free.

---

## Getting Started

### Step 1: Installation
To get started, install all necessary dependencies by running:

```bash
npm install
```

### Step 2: Development
To start the development server, use:

```bash
npm run dev
```

This will serve your project using `webpack serve` on a local development server with hot reloading enabled.

### Step 3: Build for Production
To create a production-ready build of your project, run:

```bash
npm run build
```

This command will bundle your files and place them in the `dist` directory.

### Step 4: Deployment
Deploy your build to GitHub Pages with:

```bash
npm run deploy
```

This command runs `git subtree push --prefix dist origin gh-pages`, which pushes the contents of the `dist` folder to the `gh-pages` branch of your GitHub repository.

---

## Notes
- Make sure your GitHub repository settings are configured to use the `gh-pages` branch for GitHub Pages hosting.
- Customize `webpack.config.js` to adjust build settings as needed.

---

Happy coding!

