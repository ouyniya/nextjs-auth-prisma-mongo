"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";


const BreadcrumbNav = () => {
      const pathname = usePathname();
      const segments = pathname.split("/").filter(Boolean);
    
      const buildPath = (index: number) =>
        "/" + segments.slice(0, index + 1).join("/");


  return (
     <Breadcrumb className="text-gray-600">
        <BreadcrumbList>
          {/* หน้าหลัก */}
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="hover:text-rose-300 text-rose-800/50"
            >
              หน้าหลัก
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* ลูปสร้าง breadcrumb อัตโนมัติ */}
          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
            const name = decodeURIComponent(segment);

            return (
              <div key={index} className="flex items-center gap-1">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-gray-600 capitalize">
                      {name}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      href={buildPath(index)}
                      className="hover:text-rose-300 text-rose-800/50 capitalize"
                    >
                      {name}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
  )
}
export default BreadcrumbNav