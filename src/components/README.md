# Components Folder

## How to Use

Simply place any `.tsx` component file in this folder, and it will automatically be discovered and added to the component switcher!

### Naming Convention

- **File name**: Should be in PascalCase (e.g., `MyComponent.tsx`)
- **Component export**: Must use `export default` for the main component
- **Files starting with `_`**: Will be ignored (useful for utilities or work-in-progress)
- **Files containing `.backup`**: Will be ignored (e.g., `Component.backup.tsx`)

### Example

Create a new file `MyNewComponent.tsx`:

```tsx
const MyNewComponent = () => {
  return (
    <div className="p-8">
      <h1>My New Component</h1>
      <p>This component will automatically appear in the dropdown!</p>
    </div>
  );
};

export default MyNewComponent;
```

That's it! The component will automatically appear in the dropdown selector.

### Included Example Components

- `HelloWorld.tsx` - Welcome screen
- `Counter.tsx` - Interactive counter with state
- `Dashboard.tsx` - Complex UI example

Feel free to modify or delete these examples and add your own!
