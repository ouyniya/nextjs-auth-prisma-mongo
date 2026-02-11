const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="absolute z-60 top-0 left-0 w-screen min-h-screen bg-white">
      {children}
    </div>
  );
};
export default layout;
