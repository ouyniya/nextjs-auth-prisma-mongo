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
    color: "#fdba74",
  },
  {
    name: "ระบบ RSVP",
    description: "แขกยืนยันการเข้าร่วมงานผ่านฟอร์ม",
    time: "1m ago",
    icon: MessageCircle,
    color: "#a8a29e",
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
    color: "#f9a8d4",
  },
  {
    name: "Guest Book",
    description: "แขกเขียนคำอวยพรให้คู่บ่าวสาว",
    time: "1m ago",
    icon: LayoutGrid,
    color: "#a8a29e",
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
    color: "#7dd3fc",
  },
  {
    name: "Timeline กำหนดการงาน",
    description: "แจ้งกำหนดการของงานแต่งงาน",
    time: "1m ago",
    icon: LayoutGrid,
    color: "#a8a29e",
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
    color: "#a3e635",
  },
    {
    name: "วิดีโอ Prewedding",
    description: "ฝังวิดีโอ Pre-wedding จาก YouTube ",
    time: "1m ago",
    icon: Calendar,
    color: "#a8a29e",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon: Icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden p-2 pb-3",
        // animation styles
        "transition-all duration-200 ease-in-out",
        // light styles
        "border-b border-b-rose-100",
        
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl shrink-0"
          style={{
            backgroundColor: color,
          }}
        >
          <Icon className="size-5 text-white" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium">
            <span
              className="text-sm sm:text-base playpen font-bold"
              style={{
                color: color,
              }}
            >
              {name}
            </span>
            {/* <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span> */}
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[40vh] w-full flex-col overflow-hidden bg-rose-50 rounded-3xl p-4",
        className
      )}
    >
      <div className="bg-white rounded-2xl h-[40vh] p-4">
         <AnimatedList className="gap-1">
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
      </div>
     

      <div className="rounded-2xl from-[#fdfdfb] pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
}
