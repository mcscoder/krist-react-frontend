export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>AppProvider</h1>
      {children}
    </div>
  );
};
