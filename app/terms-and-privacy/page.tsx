import MemberConsent from "@/components/MemberConsent";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const PrivacyPage = () => {
  return (
    <div>
      <MemberConsent />
      <div className="w-full mt-25 lg:mt-0 lg:min-h-[800px] mx-auto text-center flex justify-center items-center">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="bg-rose-200/70 w-[80px] h-[80px] rounded-full flex justify-center items-center">
            <CheckCircle className="text-white w-[40px] h-[40px]" />
          </div>
          <p>
            คุณได้ยอมรับกติกาการใช้งานเว็บไซต์
            <br />
            และนโยบายความเป็นส่วนตัวเรียบร้อยแล้ว
          </p>
          <Link href='/'
          className="text-rose-300 font-semibold hover:text-rose-800/50"
          >
          กลับหน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPage;
