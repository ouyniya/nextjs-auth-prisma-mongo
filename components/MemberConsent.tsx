"use client";

import { motion } from "motion/react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Award, X } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Highlighter } from "@/components/ui/highlighter";
import { Pointer } from "@/components/ui/pointer";

export default function MemberConsent({ visible = false }) {
  const [showConsent, setShowConsent] = useState(visible);

  useEffect(() => {
    // อัปเดตค่าภายใน component ถ้ามีการเปลี่ยนค่า visible จากภายนอก
    setShowConsent(visible);
  }, [visible]);

  const handleAccept = () => {
    setShowConsent(true);
  };

  if (showConsent) return null;

  return (
    <div className="fixed inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center z-50 text-gray-600">
      <div className="max-w-md min-w-sm w-[90%] p-6 text-center space-y-4">
        <h2 className="playpen text-2xl font-semibold text-rose-300  duration-300 hover:cursor-crosshair">
          ข้อตกลงการใช้บริการและ<br />
          นโยบายความเป็นส่วนตัว
        </h2>
        <p>
          <span>กรุณาอ่าน</span>
          <span className="hover:cursor-crosshair font-normal">
            {" "}
            <Highlighter action="highlight" color="#F3D0D7">
            ข้อตกลงและนโยบายฯ
            </Highlighter>{" "}
          </span>
          <span>ก่อนการใช้งานเว็บไซต์</span>
        </p>
        <div className="relative w-full rounded-xl border">
          <ScrollArea className="relative h-[400px] overflow-hidden bg-white">
            <div className="flex flex-col gap-4 p-4 justify-start items-start text-left font-light mb-30">
              <div className="w-full flex flex-col border border-white border-b-gray-200/80 pb-4">
                <div className="flex gap-1">
                  <Award className="w-5 text-rose-300" />
                  <h1 className="font-normal text-base">
                    ข้อตกลงการใช้บริการและนโยบายความเป็นส่วนตัว
                  </h1>
                </div>{" "}
                <p className="text-sm ml-6">
                  <span>อัพเดตล่าสุด: </span>
                  <span className="text-gray-400">2025-10-10</span>
                </p>
              </div>

              <p className="text-sm">
                <span>
                  กรุณาอ่านข้อตกลงการใช้บริการและนโยบายความเป็นส่วนตัวอย่างละเอียดก่อนใช้บริการเว็บไซต์
                </span>{" "}
                <span className="text-rose-300 font-bold playpen">
                  Love Card by Limeme
                </span>{" "}
                <span>
                  (&quot;บริการ&quot;) โดยการใช้บริการนี้ ถือว่าท่านได้อ่าน
                  เข้าใจ และยอมรับข้อกำหนด นโยบายและเงื่อนไขทั้งหมดแล้ว
                </span>
              </p>

              {/* begin terms */}

              <div className="text-sm">
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-white font-medium w-5 h-5 rounded-full bg-rose-200">
                    1
                  </div>
                  <p className="font-normal">การยอมรับ</p>
                </div>
                <p className="mt-2 ml-4">
                  <span>
                    1.1 การเข้าใช้งานหรือใช้บริการของเรา
                    แสดงว่าท่านยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขนี้
                    <br />
                    1.2 หากท่านไม่ยอมรับข้อกำหนดเหล่านี้
                    กรุณาหยุดการใช้บริการทันที
                    <br />
                    1.3 เราขอสงวนสิทธิ์ในการเปลี่ยนแปลงข้อกำหนดนี้ได้ตลอดเวลา
                    โดยจะแจ้งให้ทราบผ่านเว็บไซต์
                  </span>
                </p>
              </div>

              <div className="text-sm">
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-white font-medium w-5 h-5 rounded-full bg-rose-200">
                    2
                  </div>
                  <p className="font-normal">คุณสมบัติผู้ใช้บริการ</p>
                </div>
                <p className="mt-2 ml-4">
                  <span>
                    2.1 ผู้ใช้บริการต้องมีอายุไม่ต่ำกว่า 18 ปีบริบูรณ์
                    หรือได้รับความยินยอมจากผู้ปกครอง
                    <br />
                    2.2 ท่านรับรองว่าข้อมูลที่ให้ไว้กับเรามีความถูกต้อง ครบถ้วน
                    และเป็นปัจจุบัน
                    <br />
                    2.3
                    ท่านรับผิดชอบในการรักษาความปลอดภัยของบัญชีผู้ใช้และรหัสผ่านของท่าน
                  </span>
                </p>
              </div>

              <div className="text-sm">
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-white font-medium w-5 h-5 rounded-full bg-rose-200">
                    3
                  </div>
                  <p className="font-normal">การใช้บริการ</p>
                </div>
                <div className="mt-2 ml-4">
                  <span>
                    <span className="text-rose-300">
                      3.1 การสร้างการ์ดแต่งงาน
                    </span>
                    <br />
                    <ul className="ml-6">
                      <li className="before:content-['-'] before:mr-2">
                        ท่านสามารถสร้างการ์ดแต่งงานออนไลน์ตามแพ็คเกจที่ท่านเลือก{" "}
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        แต่ละบัญชีสามารถสร้างการ์ดได้ตามจำนวนที่กำหนดในแพ็คเกจ
                      </li>
                    </ul>
                    <span className="text-rose-300">
                      3.2 ระยะเวลาการใช้บริการ:
                    </span>{" "}
                    <span>
                      การ์ดที่สร้างขึ้นจะมีอายุการใช้งาน
                      ตามระยะเวลาที่ได้ระบุในแพ็คเกจ หลังจากครบกำหนด
                      การ์ดอาจถูกลบหรือเก็บเข้าคลังตามนโยบาย
                    </span>
                    <br />
                    <span className="text-rose-300">3.3 การชำระเงิน:</span>{" "}
                    <span>
                      การชำระเงินทำได้ผ่านช่องทางที่กำหนด
                      ค่าบริการไม่สามารถขอคืนได้ยกเว้นกรณีที่ระบุไว้ในนโยบายการคืนเงิน
                    </span>
                  </span>
                </div>
              </div>

              <div className="text-sm">
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-white font-medium w-5 h-5 rounded-full bg-rose-200">
                    4
                  </div>
                  <p className="font-normal">การอัพโหลดเนื้อหา</p>
                </div>
                <div className="mt-2 ml-4">
                  <span>
                    4.1 ท่านรับผิดชอบต่อเนื้อหาทั้งหมดที่อัพโหลด รวมถึงรูปภาพ
                    ข้อความ และข้อมูลต่างๆ
                    และรับรองว่าเป็นเจ้าของหรือมีสิทธิ์ใช้เนื้อหาดังกล่าวอย่างถูกต้องตามกฎหมาย{" "}
                    <br />
                    4.2 ท่านต้องไม่อัพโหลดเนื้อหาดังต่อไปนี้:
                    <ul className="ml-6">
                      <li className="before:content-['-'] before:mr-2">
                        เนื้อหาที่มีลักษณะลามกอนาจาร หรือรูปภาพที่แสดงอวัยวะเพศ
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        เนื้อหาที่แสดงความรุนแรง ส่งเสริมความเกลียดชัง
                        หรือเลือกปฏิบัติ
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        เนื้อหาที่ละเมิดทรัพย์สินทางปัญญา ลิขสิทธิ์
                        หรือเครื่องหมายการค้า
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        เนื้อหาที่หมิ่นประมาท ใส่ร้ายป้ายสี
                        หรือละเมิดความเป็นส่วนตัวผู้อื่น
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        เนื้อหาที่ผิดกฎหมายหรือส่งเสริมกิจกรรมที่ผิดกฎหมาย
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        มัลแวร์ ไวรัส หรือโค้ดที่เป็นอันตราย
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        การโฆษณาหรือสแปมที่ไม่ได้รับอนุญาต
                      </li>
                    </ul>
                    4.3 เนื้อหาที่ไม่เหมาะสมอาจถูกระงับหรือลบทันที
                    <br />
                  </span>
                </div>
              </div>

              <div className="text-sm">
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-white font-medium w-5 h-5 rounded-full bg-rose-200">
                    5
                  </div>
                  <p className="font-normal">ทรัพย์สินทางปัญญา</p>
                </div>
                <div className="mt-2 ml-4">
                  <span>
                    เนื้อหาของเรา ได้แก่ Template, ธีม, โลโก้
                    และการออกแบบทั้งหมดเป็นทรัพย์สินของเรา ท่านไม่มีสิทธิ์คัดลอก
                    ดัดแปลง หรือทำซ้ำ
                    เพื่อวัตถุประสงค์ทางการค้าโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากเรา
                    ส่วนของ UI
                    บางส่วนบนเว็บไซต์นี้พัฒนาต่อยอดจากโปรเจกต์โอเพนซอร์ส ภายใต้
                    MIT License ซึ่งอนุญาตให้นำไปใช้งาน ดัดแปลง
                    และเผยแพร่ได้โดยไม่จำกัด ภายใต้เงื่อนไขของต้นฉบับ
                    <br />
                    5.2 เนื้อหาของท่าน ท่านยังคงเป็นเจ้าของเนื้อหาที่อัพโหลด
                    ท่านอนุญาตให้เราใช้ เก็บ
                    และแสดงเนื้อหาดังกล่าวเพื่อให้บริการแก่ท่าน
                    เราอาจใช้เนื้อหาที่ไม่มีข้อมูลส่วนบุคคลเพื่อการตลาดหรือปรับปรุงบริการโดยขออนุญาตก่อน
                  </span>
                </div>
              </div>

              <div className="text-sm">
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-white font-medium w-5 h-5 rounded-full bg-rose-200">
                    6
                  </div>
                  <p className="font-normal">การจำกัดความรับผิด</p>
                </div>
                <div className="mt-2 ml-4">
                  <span>
                    6.1 บริการมีให้ตามสภาพที่เป็นอยู่
                    เราไม่รับประกันว่าบริการจะไม่มีข้อผิดพลาดหรือหยุดชะงัก
                    <br />
                    6.2
                    เราไม่รับผิดชอบต่อความเสียหายที่เกิดจากการใช้หรือไม่สามารถใช้บริการ
                    ความสูญเสียของข้อมูลเนื่องจากเหตุสุดวิสัย
                    ความเสียหายจากการกระทำของผู้ใช้รายอื่น
                    ปัญหาที่เกิดจากอุปกรณ์หรืออินเทอร์เน็ตของท่าน
                    <br />
                    6.3 เราแนะนำให้ท่านสำรองข้อมูลที่สำคัญไว้ด้วยตนเอง
                  </span>
                </div>
              </div>

              <div className="text-sm">
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-white font-medium w-5 h-5 rounded-full bg-rose-200">
                    7
                  </div>
                  <p className="font-normal">การระงับและยกเลิกบริการ</p>
                </div>
                <div className="mt-2 ml-4">
                  <span>
                    7.1 เราสงวนสิทธิ์ในการระงับหรือยกเลิกบัญชีของท่านได้ทันที
                    หากพบว่า ฝ่าฝืนข้อกำหนดนี้
                    อัพโหลดเนื้อหาที่ผิดกฎหมายหรือไม่เหมาะสม
                    มีพฤติกรรมที่เป็นอันตรายต่อผู้ใช้รายอื่น
                    ใช้บริการในทางที่ผิด
                    <br />
                    7.2 ท่านสามารถยกเลิกบริการได้ตลอดเวลาโดยติดต่อเรา
                    <br />
                    7.3 เมื่อบัญชีถูกยกเลิก ข้อมูลและเนื้อหาของท่านอาจถูกลบภายใน
                    1 วัน
                  </span>
                </div>
              </div>

              <div className="text-sm">
                <h1 className="font-normal text-base mb-2 mt-2">นโยบายความเป็นส่วนตัว (Privacy Policy)</h1>
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-white font-medium w-5 h-5 rounded-full bg-rose-200">
                    1
                  </div>
                  <p className="font-normal">
                    ความเป็นส่วนตัวและการคุ้มครองข้อมูลส่วนบุคคล
                  </p>
                </div>
                <div className="mt-2 ml-4">
                  <span>
                    1.1 เราเคารพความเป็นส่วนตัวของท่านตาม
                    พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
                    <br />
                    1.2
                    เราเก็บข้อมูลของผู้ใช้เพื่อให้บริการเข้าสู่ระบบและใช้งานเว็บไซต์ได้สะดวกและปลอดภัย
                    โดยมีรายละเอียดดังนี้
                    <br />
                    ข้อมูลส่วนบุคคลของท่านที่เราจัดเก็บรวมถึง แต่ไม่จำกัดเฉพาะ
                    <ul className="ml-6">
                      <li className="before:content-['-'] before:mr-2">
                        ข้อมูลส่วนตัว อาทิ ชื่อ-นามสกุล, รูปโปรไฟล์ ชื่อคู่บ่าวสาว ข้อมูลบุคคลในครอบครัว ข้อมูลแขกที่เข้าร่วมงาน
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        ข้อมูลการติดต่อ อาทิ ที่อยู่ อีเมล
                        ข้อมูลการติดต่อทางโซเชียลมีเดีย
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        ข้อมูลเกี่ยวกับการใช้งานระบบต่าง ๆ อาทิ
                        ข้อมูลลงทะเบียนสมัครใช้บริการ ชื่อบัญชีผู้ใช้งาน
                        ข้อมูลบัญชีผู้ใช้งาน Username รหัสผ่าน
                        ข้อมูลที่ได้จากบัญชีผู้ใช้งานอื่น ๆ ข้อมูลการใช้บริการ
                        ความสนใจและความเห็นทุกอย่างที่ท่านได้แสดงผ่านระบบ
                        ข้อมูลการร่วมกิจกรรมต่าง ๆ ของท่านในระบบ
                        ข้อมูลที่ได้จากการที่ท่านติดต่อกับทางเรา
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        ข้อมูลด้านเทคนิค อาทิ
                        ข้อมูลการเข้าใช้งานเว็บไซต์และระบบต่าง ๆ
                        ข้อมูลจากการบันทึกการใช้งาน เช่น หมายเลข IP
                        ของคอมพิวเตอร์, ตัวระบุอุปกรณ์ (Device ID),
                        รหัสประจำตัวอุปกรณ์, ประเภทและรุ่นของอุปกรณ์
                        ข้อมูลเครือข่ายและการเชื่อมต่อ เช่น
                        ผู้ให้บริการอินเทอร์เน็ต, ข้อมูลเครือข่ายมือถือ, โดเมน,
                        URL ของหน้าเว็บที่เข้าถึงก่อนและหลังการเข้าใช้งาน
                        ข้อมูลตำแหน่งที่ตั้งโดยประมาณ (Geolocation)
                        ข้อมูลประเภทของเบราว์เซอร์ ระบบปฏิบัติการ
                        และเวอร์ชันของซอฟต์แวร์ที่ใช้ในการเข้าถึง
                        ข้อมูลบันทึกการเข้าออกระบบ (Log Data) เช่น วันที่ เวลา
                        ระยะเวลาการใช้งาน สถิติการเข้าชม
                        และพฤติกรรมการใช้งานในแต่ละหน้า ข้อมูลการทำธุรกรรม
                        การคลิก ลำดับการใช้งานเมนู หรือการใช้ฟังก์ชันต่าง ๆ
                        ภายในระบบ ข้อมูลที่เก็บผ่านคุกกี้ (Cookies)
                        หรือเทคโนโลยีที่คล้ายกัน เช่น Local Storage
                      </li>
                    </ul>
                    1.3 วัตถุประสงค์การเก็บรวบรวม ใช้ข้อมูล
                    และเปิดเผยข้อมูลส่วนบุคคล
                    <br />
                    ทั้งนี้ ท่านตกลงและยินยอมให้บริษัทฯ เก็บ รวบรวม ใช้
                    และเปิดเผยข้อมูลส่วนบุคคลของท่านตามที่ระบุในเอกสารนี้
                    เพื่อวัตถุประสงค์ในการให้บริการเว็บไซต์รวมถึงวัตถุประสงค์เพิ่มเติมดังต่อไปนี้:
                    <ul className="ml-6">
                      <li className="before:content-['-'] before:mr-2">
                        การให้บริการและดำเนินการตามคำสั่งของท่าน อาทิ
                        เพื่อสมัครสมาชิก สร้างบัญชีผู้ใช้ หรือเข้าสู่ระบบ
                        เพื่อออกแบบ สร้าง
                        และจัดส่งการ์ดแต่งงานทั้งในรูปแบบดิจิทัลและสิ่งพิมพ์
                        เพื่อประมวลผลคำสั่งซื้อ การชำระเงิน และการจัดส่งสินค้า
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        การปรับปรุงคุณภาพและประสบการณ์การใช้งานเว็บไซต์ อาทิ
                        เพื่อวิเคราะห์การใช้งานเว็บไซต์และพัฒนาบริการให้ตรงกับความต้องการของผู้ใช้
                        เพื่อปรับแต่งเนื้อหา การแสดงผล
                        ที่เหมาะสมกับความสนใจของท่าน
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        การรักษาความปลอดภัยของเว็บไซต์และระบบ อาทิ เพื่อตรวจสอบ
                        ป้องกัน และจัดการกับการกระทำที่อาจเป็นการละเมิดกฎหมาย
                        หรือเงื่อนไขการใช้บริการ
                        เพื่อรักษาความปลอดภัยของข้อมูลส่วนบุคคลและระบบเทคโนโลยีสารสนเทศ
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        ติดต่อสื่อสารและแจ้งข่าวสาร อาทิ
                        เพื่อแจ้งสถานะคำสั่งซื้อ การชำระเงิน
                        หรือปัญหาที่เกี่ยวข้องกับบริการ
                        เพื่อตอบข้อซักถามหรือให้บริการหลังการขาย
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        การทำการตลาด การส่งข่าวสาร และการส่งเสริมการขาย
                        (โดยได้รับความยินยอมจากท่านก่อน) อาทิ
                        เพื่อส่งข้อมูลข่าวสาร โปรโมชั่น
                        หรือกิจกรรมพิเศษที่เกี่ยวข้องกับบริการของเรา
                        เพื่อทำแบบสอบถามหรือการสำรวจความคิดเห็น
                        เพื่อพัฒนาบริการในอนาคต
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        การปฏิบัติตามกฎหมายหรือคำสั่งของหน่วยงานที่มีอำนาจตามกฎหมาย
                      </li>
                    </ul>
                    1.4 การเปิดเผยข้อมูลต่อบุคคลภายนอก
                    <br />
                    เราอาจเปิดเผยข้อมูลส่วนบุคคลของท่านต่อผู้ให้บริการภายนอก
                    (Data Processors)
                    หรือพันธมิตรทางธุรกิจที่รับหน้าที่ช่วยดำเนินการบางส่วนของบริการ
                    เช่น ผู้ให้บริการโฮสติ้งและการดีพลอย,
                    ผู้ให้บริการฐานข้อมูลคลาวด์, ผู้ให้บริการล็อกอินผ่านโซเชียล,
                    ผู้ให้บริการชำระเงิน และผู้ให้บริการจัดส่งสินค้า
                    โดยการเปิดเผยดังกล่าวจะกระทำเฉพาะในขอบเขตที่จำเป็นเพื่อให้บริการเท่านั้น
                    <br />
                    1.5 ข้อมูลของท่านอาจถูกโอนหรือจัดเก็บนอกประเทศไทย
                    ขึ้นอยู่กับตำแหน่งที่ตั้งของผู้ให้บริการภายนอกหรือศูนย์ข้อมูลที่เราเลือกใช้
                    เช่น Vercel, MongoDB Atlas
                    เราจะดำเนินมาตรการที่เหมาะสมเพื่อคุ้มครองข้อมูลส่วนบุคคลตามที่กฎหมายกำหนด
                    <br />
                    1.6 หากท่านเลือกล็อกอินด้วยบัญชีของผู้ให้บริการภายนอก (เช่น
                    Google หรือ GitHub) เรา
                    จะได้รับข้อมูลพื้นฐานจากผู้ให้บริการนั้นตามขอบเขต (scope)
                    ที่ท่านอนุญาต เช่น ชื่อ-นามสกุล อีเมล และรูปโปรไฟล์
                    ซึ่งข้อมูลดังกล่าวจะถูกใช้เพื่อสร้างหรือยืนยันบัญชีผู้ใช้งานของท่าน
                    และจะไม่ถูกนำไปใช้เกินวัตถุประสงค์ที่ระบุไว้ในนโยบายนี้
                    <br />
                    1.7 ท่านมีสิทธิขอเข้าถึง แก้ไข ลบ
                    จำกัดหรือคัดค้านการประมวลผลข้อมูล โอนย้ายข้อมูล
                    หรือเพิกถอนความยินยอมต่อการประมวลผลข้อมูลส่วนบุคคลของท่านได้ตามกฎหมาย
                    และสามารถติดต่อเรา
                    ตามช่องทางที่ระบุในเอกสารนี้เพื่อใช้สิทธิดังกล่าว
                    <br />
                    1.8
                    เราอาจมอบหมายการดำเนินงานบางส่วนให้ผู้ให้บริการภายนอกซึ่งทำหน้าที่เป็นผู้ประมวลผล
                    (Data Processor)
                    ข้อมูลบางส่วนของท่านอาจถูกเก็บและประมวลผลโดยผู้ให้บริการภายนอก
                    (Third Party) เช่น Vercel, MongoDB Atlas, Google, GitHub
                    เพื่อให้บริการเว็บไซต์และระบบล็อกอินผ่านโซเชียล
                    ข้อมูลดังกล่าวอาจถูกโอนหรือจัดเก็บนอกประเทศไทย
                    ท่านสามารถดูนโยบายความเป็นส่วนตัวของผู้ให้บริการเหล่านี้ได้ที่:
                    <ul className="ml-6">
                      <li className="before:content-['-'] before:mr-2">
                        <Link
                          className="hover:text-rose-200 text-rose-300"
                          href="https://vercel.com/legal/privacy-policy"
                        >
                          Vercel
                        </Link>
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        <Link
                          className="hover:text-rose-200 text-rose-300"
                          href="https://www.mongodb.com/legal/privacy/privacy-policy"
                        >
                          MongoDB Atlas
                        </Link>
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        <Link
                          className="hover:text-rose-200 text-rose-300"
                          href="https://policies.google.com/privacy"
                        >
                          Google
                        </Link>
                      </li>
                      <li className="before:content-['-'] before:mr-2">
                        <Link
                          className="hover:text-rose-200 text-rose-300"
                          href="https://docs.github.com/en/site-policy/privacy-policies"
                        >
                          GitHub
                        </Link>
                      </li>
                    </ul>
                    1.9 การรักษาความปลอดภัยข้อมูล
                    <br />
                    1.10 การคุ้มครองข้อมูลเด็กและเยาวชน
                   บริการของเราไม่ได้มุ่งเป้าไปที่เด็กอายุต่ำกว่า 18 ปี เราไม่เก็บข้อมูลส่วนบุคคลของเด็กโดยเจตนา หากเราทราบว่ามีการเก็บข้อมูลของเด็กโดยไม่ได้รับความยินยอมจากผู้ปกครอง เราจะดำเนินการลบข้อมูลนั้นทันที
                    <br />
                    1.11 เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว การเปลี่ยนแปลงที่สำคัญจะแจ้งให้ทราบผ่านเว็บไซต์ วันที่มีผลบังคับใช้จะระบุไว้ด้านบนของนโยบาย เราแนะนำให้ตรวจสอบนโยบายเป็นระยะ
                  </span>
                </div>
              </div>


              <div className="text-sm">
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-white font-medium w-5 h-5 rounded-full bg-rose-200">
                    2
                  </div>
                  <p className="font-normal">กฎหมายที่ใช้บังคับ</p>
                </div>
                <div className="mt-2 ml-4">
                  <span>
                    ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย ข้อพิพาทใดๆ
                    จะอยู่ภายใต้เขตอำนาจของศาลไทย
                  </span>
                </div>
              </div>

              <div className="text-sm">
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-white font-medium w-5 h-5 rounded-full bg-rose-200">
                    3
                  </div>
                  <p className="font-normal">การติดต่อเรา</p>
                </div>
                <div className="mt-2 ml-4">
                  <span>
                    หากท่านมีคำถามเกี่ยวกับข้อกำหนดนี้ กรุณาติดต่อเราที่:
                    <br />
                    <span className="font-normal">Email:</span>{" "}
                    <span className="text-rose-300">support@nysdev.com</span>
                    <br />
                    เราจะตอบกลับภายใน 30 วันทำการ
                  </span>
                </div>
              </div>

              
            </div>
            <ProgressiveBlur position="bottom" height="40%" />
          </ScrollArea>
          <Pointer>
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-rose-300"
              >
                <motion.path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="currentColor"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </motion.div>
          </Pointer>
        </div>

        <div className="flex justify-center gap-4 mt-4"></div>

        <div className="flex justify-center gap-4 mt-4">
          <Link href={`https://nysdev.com`}>
            <button>
              <div className="flex items-center justify-center">
                <div
                  className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-rose-100 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                  )}
                >
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>ปฏิเสธ</span>
                    <X className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </div>
              </div>
            </button>
          </Link>

          <button onClick={handleAccept}>
            <div className="flex items-center justify-center">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>ยอมรับทั้งหมด</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
