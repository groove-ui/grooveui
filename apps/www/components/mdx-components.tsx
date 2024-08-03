// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const Table: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <table className="border-collapse border-spacing-0 w-full">
        {children}
      </table>
    </div>
  );
};

export const MDXComponents = {
  // Allows customizing built-in components, e.g. to add styling.
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="text-base">{children}</p>
  ),
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="text-4xl">{children}</h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-3xl">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-2xl">{children}</h3>
  ),
  table: Table,
} as unknown as Record<string, React.ReactNode>;
