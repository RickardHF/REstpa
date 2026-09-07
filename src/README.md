# McSquishy game

## Prerequisites

- Node.js 20 or newer
- npm

## Local development

From this directory, install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

The development server serves `index.html` and its canvas entry point locally.

Other available commands are:

```sh
npm run build      # Create the static production build in dist/
npm run test       # Run the Vitest test suite once
npm run typecheck  # Check TypeScript without emitting files
```

The application is browser-only and has no backend or cloud service dependency.

## Folder layout

- `main.ts` and `index.html` provide the browser entry point and canvas.
- `game/` contains game state and lifecycle types.
- `render/` contains canvas rendering functions.
- `input/` contains input action definitions.
- `levels/` contains level data types and starter data.
- `tests/` contains automated tests.

The modules are intentionally minimal until gameplay features are implemented.
