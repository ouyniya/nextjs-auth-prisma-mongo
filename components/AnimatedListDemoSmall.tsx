"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import {
  LayoutGrid,
  User,
  UploadCloud,
  MessageCircle,
  Calendar,
} from "lucide-react"; // import ไอคอนที่ต้องการ

interface Item {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "ธีมการ์ดหลากหลาย",
    description: "เลือกธีมการ์ดแต่งงานสไตล์ที่ชอบ",
    time: "1m ago",
    icon: LayoutGrid,
    color: "#fda4af",
  },
  {
    name: "แกลเลอรี่รูปภาพ",
    description: "อัพโหลดรูปถ่ายคู่บ่าวสาวได้",
    time: "1m ago",
    icon: UploadCloud,
    color: "#fda4af",
  },
  {
    name: "ระบบ RSVP",
    description: "แขกยืนยันการเข้าร่วมงานผ่านฟอร์ม",
    time: "1m ago",
    icon: MessageCircle,
    color: "#fda4af",
  },
  {
    name: "Countdown นับถอยหลัง",
    description: "นับถอยหลังวันแต่งงานแบบเรียลไทม์",
    time: "1m ago",
    icon: Calendar,
    color: "#fda4af",
  },
  {
    name: "แผนที่และสถานที่",
    description: "แผนที่ Google Maps",
    time: "1m ago",
    icon: LayoutGrid,
    color: "#fda4af",
  },
  {
    name: "Guest Book",
    description: "แขกเขียนคำอวยพรให้คู่บ่าวสาว",
    time: "1m ago",
    icon: LayoutGrid,
    color: "#fda4af",
  },
  {
    name: "Dress Code",
    description: "แจ้งธีมงาน การแต่งกาย",
    time: "1m ago",
    icon: MessageCircle,
    color: "#fda4af",
  },
  {
    name: "รองรับทุกหน้าจอ",
    description: "เปิดดูได้สวยทั้งมือถือและคอมพิวเตอร์",
    time: "1m ago",
    icon: Calendar,
    color: "#fda4af",
  },
  {
    name: "Timeline กำหนดการงาน",
    description: "แจ้งกำหนดการของงานแต่งงาน",
    time: "1m ago",
    icon: LayoutGrid,
    color: "#fda4af",
  },
  {
    name: " Contact Info",
    description: "ใส่ช่องทางติดต่อฝ่ายเจ้าบ่าว-เจ้าสาว",
    time: "1m ago",
    icon: UploadCloud,
    color: "#fda4af",
  },
  {
    name: "เพลงประกอบ",
    description: "เปิดอัตโนมัติเมื่อเข้าชมการ์ด",
    time: "1m ago",
    icon: MessageCircle,
    color: "#fda4af",
  },
  {
    name: "วิดีโอ Prewedding",
    description: "ฝังวิดีโอ Pre-wedding จาก YouTube ",
    time: "1m ago",
    icon: Calendar,
    color: "#fda4af",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon: Icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[120px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="flex size-10 items-center justify-center rounded-2xl bg-rose-200">
          <Icon className="size-5 text-white" />
        </div>
        <span className="text-sm text-center font-bold text-gray-400">
          {name}
        </span>
      </div>
    </figure>
  );
};

export function AnimatedListDemoSmall({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[55vh] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="rounded-2xl from-[#fdfdfb] pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
}
