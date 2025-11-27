# React Component Preview

🚀 **A developer-friendly React + TypeScript + Vite starter with automatic component discovery and live preview.**

Perfect for developing, testing, and showcasing multiple React components in isolation with zero configuration!

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Vite](https://img.shields.io/badge/Vite-7.2-purple)

## ✨ Features

- **🎯 Automatic Component Discovery** - Drop any `.tsx` file in `src/components/` and it's instantly available
- **🔄 Live Component Switching** - Interactive dropdown to switch between components without reloading
- **⚡ Hot Module Replacement** - See changes instantly with Vite's HMR
- **🛠️ Zero Configuration** - No manual imports or registration needed
- **🎨 Smart Filtering** - Automatically ignores backup files and work-in-progress components
- **📦 Production Ready** - Optimized build configuration included

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/mattanmr/react_component_preview_public
cd react-component-preview

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

## 📖 Usage

### Adding a New Component

Simply create a new `.tsx` file in the `src/components/` folder:

```tsx
// src/components/MyComponent.tsx
const MyComponent = () => {
  return (
    <div className="p-8">
      <h1>My New Component</h1>
      <p>This will automatically appear in the preview!</p>
    </div>
  );
};

export default MyComponent;
```

**That's it!** The component will automatically:
- ✅ Be detected by the component loader
- ✅ Appear in the dropdown selector (top-left corner)
- ✅ Be available for live preview

### File Naming Conventions

#### Included Files
- Any `.tsx` files in `src/components/`
- Component names should use PascalCase (e.g., `MyComponent.tsx`)

#### Excluded Files
- Files starting with `_` (e.g., `_utils.tsx`) - for utilities or shared code
- Files containing `.backup` (e.g., `Component.backup.tsx`) - for backup copies

### Example Components Included

This project includes three example components to get you started:

- **HelloWorld** - A welcome screen demonstrating the basics
- **Counter** - An interactive component with state management
- **Dashboard** - A more complex UI with multiple elements

Feel free to modify or delete these examples!

## 📁 Project Structure

```
react-component-preview/
├── src/
│   ├── components/          # 🎯 Drop your .tsx components here!
│   │   ├── HelloWorld.tsx
│   │   ├── Counter.tsx
│   │   └── Dashboard.tsx
│   ├── componentLoader.ts   # Auto-discovery engine
│   ├── App.tsx              # Main application with component switcher
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling. You can:

- Use Tailwind utility classes in your components
- Customize the theme in `tailwind.config.js`
- Add custom CSS in `src/index.css`

## 🔧 Technical Details

### Component Discovery

The project uses Vite's `import.meta.glob()` feature to automatically discover and lazy-load all components from the `src/components/` folder. This happens at build time and provides optimal performance with code-splitting.

### Technologies

- **React 19** - Latest UI library
- **TypeScript 5.9** - Type safety and better DX
- **Vite 7.2** - Lightning-fast build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **ESLint** - Code quality and consistency

## 💡 Use Cases

- **Component Library Development** - Develop and test UI components in isolation
- **Design System** - Build and showcase your design system components
- **Prototyping** - Quickly prototype and iterate on UI ideas
- **Learning** - Perfect for learning React without setup complexity
- **Portfolio** - Showcase your React components interactively

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)

## 📮 Support

If you found this project helpful, please give it a ⭐!

For questions or issues, please [open an issue](https://github.com/mattanmr/react_component_preview_public/issues).
