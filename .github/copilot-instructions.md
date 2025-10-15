# React Learning Project - AI Agent Instructions

## Project Architecture

This is a **React learning workspace** containing multiple isolated projects demonstrating different React concepts and build tools. Each subdirectory is a complete, independent React application.

### Project Structure
- `customreact/` - Vanilla JS implementation of React-like functionality (educational)
- `01basicreact/` - Create React App project with traditional React patterns
- `01vitereact/` - Vite + React with modern JSX and component exploration
- `02counter/` - State management demo with hooks and inline styling
- `03tailwindprops/` - Tailwind CSS v4 integration with component styling

## Key Patterns & Conventions

### Development Setup Patterns
Each Vite project follows this structure:
- **Entry**: `src/main.jsx` with `createRoot()` and `StrictMode`
- **Components**: Simple functional components in `src/` with `.jsx` extension
- **Styling**: Mix of CSS modules (`App.css`) and utility frameworks (Tailwind v4)
- **Build**: Standard Vite config with `@vitejs/plugin-react`

### Component Patterns
```jsx
// Functional components with hooks (see 02counter/src/App.jsx)
const [counter, setCounter] = useState(15)

// Inline styling approach (prevalent in examples)
<span style={{ color: "orange" }}>{name}</span>

// Component composition (see 01vitereact/src/App.jsx)
<>
  <Chai />
  <h1>My App {userName}</h1>
</>
```

### State Management
- Use `useState` for local state with boundary conditions (see counter logic in `02counter/`)
- State updates follow immutable patterns: `setCounter(counter + 1)`
- Conditional rendering and bounds checking: `if (counter < 22) { ... }`

### Styling Approaches
- **Inline styles**: `style={{ color: "red" }}` for dynamic styling
- **Tailwind v4**: Uses `@import 'tailwindcss'` in CSS files (see `03tailwindprops/`)
- **CSS classes**: Mix of `class` and `className` (note: some examples use `class` - should be `className`)

## Development Workflows

### Starting Projects
```bash
# Vite projects (01vitereact, 02counter, 03tailwindprops)
cd [project-name]
npm run dev

# Create React App project (01basicreact)
cd 01basicreact
npm start
```

### Build Configurations
- **Vite projects**: Use React 19.1.1, Vite 7.1.2, ESLint 9.x with flat config pattern
- **ESLint rules**: Custom rule `'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]`
- **Tailwind v4**: Integrated via `@tailwindcss/vite` plugin (v4.1.12) in `vite.config.js`
- **Module type**: All Vite projects use `"type": "module"` in package.json

### Custom React Implementation
The `customreact/` directory contains educational vanilla JS code showing:
- Manual DOM element creation: `document.createElement(re.type)`
- Property iteration and setting: `domElement.setAttribute(prop, re.props[prop])`
- React element structure: `{ type, props, children }`
- Direct DOM manipulation without virtual DOM
- Educational progression: from hard-coded elements to modular approach

### React.createElement vs JSX Patterns
- **01vitereact/src/main.jsx**: Shows both `React.createElement()` and JSX syntax side-by-side
- **Variable rendering**: `const reactElement = React.createElement()` then rendered directly
- **Import requirements**: `React.createElement` requires `import React from 'react'`

## Project-Specific Notes

### 03tailwindprops Tailwind v4 Setup
- Uses new `@import 'tailwindcss'` syntax instead of traditional `@tailwind` directives
- Configured with `@tailwindcss/vite` plugin
- Example components use utility classes: `bg-green-500 text-black rounded-xl`
- **Bug example**: Currently uses `class` instead of `className` (intentional for learning)

### Educational Examples
- **React.createElement vs JSX**: `01vitereact/src/main.jsx` demonstrates both syntaxes
- **Component rendering**: Multiple approaches shown (functions, variables, createElement)
- **Props and state**: Counter example shows controlled state with validation
- **Boundary conditions**: Counter limits (0-22) with conditional logic in `02counter/`

## Common Issues to Watch
- **className vs class**: Some examples incorrectly use `class` instead of `className` (especially in `03tailwindprops/`)
- **Line endings**: Windows CRLF vs LF warnings are common and safe to ignore
- **Import patterns**: Mixed usage of React import styles (legacy vs modern)
- **Typos in attributes**: Watch for `targer` instead of `target` in anchor tags

## File Extensions & Naming
- React components: `.jsx` for Vite projects, `.js` for Create React App
- Styling: `.css` files in `src/` directories, Tailwind imports in main CSS files
- Configuration: `vite.config.js`, `eslint.config.js` (modern flat config)

When working in this codebase, prioritize educational clarity and maintain the progressive learning structure from basic concepts to advanced patterns. Each project builds upon previous concepts while introducing new tools and techniques.

## Debugging & Development Notes
- All Vite projects run on default ports (usually 5173)
- Console logging patterns in `02counter/` show state changes with `Math.random()`
- Dark mode styling present in Tailwind examples
- Asset imports: Vite uses `/vite.svg` for public assets, `./assets/` for module imports
