import { auth } from "@/auth";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await auth();

  if (!session) {
    return redirect("/sign-in");
  }

  return (
    <div className="mt-25 px-4 md:px-8 max-w-4xl mx-auto w-full">
      <Breadcrumb className="text-gray-600">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="hover:text-rose-300 text-rose-800/50"
            >
              หน้าหลัก
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-600">
              การ์ดของคุณ
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex h-full items-center justify-start flex-col gap-4 mt-8">
        <div className="grid grid-cols-1 gap-2 mb-8 text-center">
          <h1 className="font-semibold text-xl text-rose-300 playpen ">
            การ์ดของคุณ
          </h1>
          <p>สามารถดูการ์ดของคุณได้ที่นี่</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-between">
          <div className="w-full h-50 bg-rose-100">test</div>
          <div className="w-full h-50 bg-rose-100">test</div>
          <div className="w-full h-50 bg-rose-100">test</div>
          <div className="w-full h-50 bg-rose-100">test</div>
          <div className="w-full h-50 bg-rose-100">test</div>
          <div className="w-full h-50 bg-rose-100">test</div>
          <div className="w-full h-50 bg-rose-100">test</div>
          <div className="w-full h-50 bg-rose-100">test</div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
