import BreadcrumbNav from "@/components/BreadcrumbNav";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-w-5xl mx-auto mt-25 px-8 flex flex-col gap-8 mb-16">
      <BreadcrumbNav />
      {children}
    </div>
  );
};
export default layout;
