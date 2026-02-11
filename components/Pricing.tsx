import {
  Crown,
  Heart,
  ShoppingCart,
  Snowflake,
  Sparkle,
  Trophy,
} from "lucide-react";
import TopicHeader from "./TopicHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { ShinyButton } from "./ui/shiny-button";

const packages = [
  {
    feature: "ธีมการ์ด",
    desc: "สามารถเลือกธีมการ์ดได้หลากหลายจากหมวดต่างๆ",
    basic: "หมวด Basic เท่านั้น",
    standard: "หมวด Basic และ Standard",
    premium: "ทุกหมวด",
    deluxe: "ออกแบบใหม่ ไม่ซ้ำใคร",
    link: "/feature/theme",
  },
  {
    feature: "Responsive",
    desc: "เปิดดูได้สวยทั้งมือถือและคอมพิวเตอร์",
    basic: "✓",
    standard: "✓",
    premium: "✓",
    deluxe: "✓",
    link: "/feature/responsive",
  },
  {
    feature: "Contact Info",
    desc: "ข้อมูลติดต่อฝ่ายเจ้าบ่าว-เจ้าสาว",
    basic: "✓",
    standard: "✓",
    premium: "✓",
    deluxe: "✓",
    link: "/feature/contact",
  },
  {
    feature: "แผนที่",
    desc: "แผนที่ Google Maps แบบฝังตรง",
    basic: "✓",
    standard: "✓",
    premium: "✓",
    deluxe: "✓",
    link: "/feature/map",
  },
  {
    feature: "Event Details",
    desc: "กำหนดการพิธีต่างๆ (Timeline ของงาน)",
    basic: "✓",
    standard: "✓",
    premium: "✓",
    deluxe: "✓",
    link: "/feature/timeline",
  },
  {
    feature: "Dress Code",
    desc: "Theme สีของงาน",
    basic: "✓",
    standard: "✓",
    premium: "✓",
    deluxe: "✓",
    link: "/feature/dress-code",
  },
  {
    feature: "RSVP",
    desc: "ระบบยืนยันการเข้าร่วมงานอย่างปลอดภัย คุณเท่านั้นที่สามารถเข้าถึงข้อมูลได้",
    basic: "-",
    standard: "✓",
    premium: "✓",
    deluxe: "✓",
    link: "/feature/rsvp",
  },
  {
    feature: "สรุปผล RSVP",
    desc: "ระบบสรุปผลการเชิญ ทำให้คุณจัดการจำนวนแขกที่มางานได้สะดวกขึ้น",
    basic: "-",
    standard: "✓",
    premium: "✓",
    deluxe: "✓",
    link: "/feature/rsvp",
  },
  {
    feature: "Gallery",
    desc: "อัพโหลดรูปภาพคู่บ่าวสาว",
    basic: "-",
    standard: "✓",
    premium: "✓",
    deluxe: "✓",
    link: "/feature/gallery",
  },
  {
    feature: "เพลงประกอบ",
    desc: "เปิดเพลงประกอบอัตโมมัติเมื่อเข้าชมการ์ด",
    basic: "-",
    standard: "-",
    premium: "✓",
    deluxe: "✓",
    link: "/feature/song",
  },
  {
    feature: "วิดีโอ",
    desc: "ฝังวิดีโอ Pre-wedding จาก Youtube",
    basic: "-",
    standard: "-",
    premium: "✓",
    deluxe: "✓",
    link: "/feature/video",
  },
  {
    feature: "Countdown Timer",
    desc: "นับถอยหลังวันแต่งงาน สร้างความตื่นเต้น",
    basic: "-",
    standard: "-",
    premium: "✓",
    deluxe: "✓",
    link: "/feature/countdown",
  },
  {
    feature: "Guest Book ออนไลน์",
    desc: "ให้แขกเขียนอวยพร",
    basic: "-",
    standard: "-",
    premium: "-",
    deluxe: "✓",
    link: "/feature/guestbook",
  },
];

const Pricing = () => {
  return (
    <div className="w-full bg-rose-50 py-24">
      <div className="w-full lg:max-w-6xl mx-auto">
        {/* header */}
        <TopicHeader
          decor="Pricing"
          topic="Packages"
          desc="เลือกบริการที่คุณสนใจได้ที่นี่"
        />

        {/* body */}
        <div className="px-8 w-full bg-white/50 rounded-2xl py-4">
          <Table>
            <TableHeader>
              <TableRow className="font-bold text-lg">
                <TableHead>Feature</TableHead>
                <TableHead className="w-[12%]">
                  <div className="flex gap-1 items-center justify-center text-center">
                    <Snowflake size={16} className="text-sky-300" />
                    <span>Basic</span>
                  </div>
                </TableHead>
                <TableHead className="w-[12%]">
                  <div className="flex gap-1 items-center justify-center">
                    <Sparkle size={16} className="text-emerald-300" />
                    <span>Standard</span>
                  </div>
                </TableHead>
                <TableHead className="w-[12%]">
                  <div className="flex gap-1 items-center justify-center text-center">
                    <Trophy size={16} className="text-orange-300" />
                    <span>Premium</span>
                  </div>
                </TableHead>
                <TableHead className="w-[12%]">
                  <div className="flex gap-1 items-center justify-center text-center">
                    <Crown size={16} className="text-rose-300" />
                    <span>Deluxe</span>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {packages.map((pack) => (
                <TableRow key={pack.feature}>
                  <TableCell className="min-w-xs">
                    <div>
                      <div className="flex gap-2 items-center">
                        <Heart size={12} className="text-rose-300" />
                        <h1 className="font-semibold">
                          <Link
                            href={pack.link}
                            className="hover:text-rose-300 duration-300"
                          >
                            {pack.feature}
                          </Link>
                        </h1>
                      </div>
                      <p className="ml-4">{pack.desc}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{pack.basic}</TableCell>
                  <TableCell className="text-center">{pack.standard}</TableCell>
                  <TableCell className="text-center">{pack.premium}</TableCell>
                  <TableCell className="text-center">{pack.deluxe}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className="bg-white/30 hover:bg-white/30">
              <TableRow className="text-lg font-bold hover:bg-white/30">
                <TableCell></TableCell>
                <TableCell className="text-center">
                  <ShinyButton>
                    <div className="flex gap-2 items-center">
                      <ShoppingCart size={16} />
                      <span>สั่งซื้อ</span>
                    </div>
                  </ShinyButton>
                </TableCell>
                <TableCell className="text-center">
                  <ShinyButton>
                    <div className="flex gap-2 items-center">
                      <ShoppingCart size={16} />
                      <span>สั่งซื้อ</span>
                    </div>
                  </ShinyButton>
                </TableCell>
                <TableCell className="text-center">
                  <ShinyButton>
                    <div className="flex gap-2 items-center">
                      <ShoppingCart size={16} />
                      <span>สั่งซื้อ</span>
                    </div>
                  </ShinyButton>
                </TableCell>
                <TableCell className="text-center">
                  <ShinyButton>
                    <div className="flex gap-2 items-center">
                      <ShoppingCart size={16} />
                      <span>สั่งซื้อ</span>
                    </div>
                  </ShinyButton>
                </TableCell>
              </TableRow>
            </TableFooter>
            <TableFooter>
              <TableRow className="text-lg font-bold">
                <TableCell>ราคา (บาท)</TableCell>
                <TableCell className="text-center text-rose-700">599</TableCell>
                <TableCell className="text-center  text-rose-700">
                  1,499
                </TableCell>
                <TableCell className="text-center  text-rose-700">
                  2,499
                </TableCell>
                <TableCell className="text-center  text-rose-700">
                  3,499
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
