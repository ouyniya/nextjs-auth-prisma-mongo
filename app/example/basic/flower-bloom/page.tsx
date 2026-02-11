"use client";

import Image from "next/image";
import logo from "@/public/logo-ex.png";
import logoWhite from "@/public/logo-ex-wh.png";
import { MapPin } from "lucide-react";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";
import { DragCards } from "@/components/theme/DragCards";
import ShiftingCountdown from "@/components/theme/ShiftingCoundown";
import { motion } from "framer-motion";
import { SparklesText } from "@/components/ui/sparkles-text";
import HeaderTheme from "@/components/theme/HeaderTheme";
import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const data = {};

const Page = () => {
  const initialData = {
    [process.env.NEXT_PUBLIC_ENTRY_NAME]: "",
    [process.env.NEXT_PUBLIC_ENTRY_RESPONSE]: "",
    [process.env.NEXT_PUBLIC_ENTRY_NO]: 1,
    [process.env.NEXT_PUBLIC_ENTRY_COMMENT]: "",
  };
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [attendance, setAttendance] = useState(initialData); // เก็บสถานะการมา

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttendance((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleIframeLoad = () => {
    Swal.fire({
      title: "สำเร็จ",
      text: "ได้รับข้อมูลเรียบร้อยแล้ว ขอบคุณค่ะ/ครับ",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#008236",
      confirmButtonText: "Ok",
    });
    setSubmitted(false);
    setAttendance(initialData);
  };

  return (
    <div className="grid justify-center items-center w-full max-w-5xl mx-auto">
      {/* logo */}
      <div
        className="absolute w-1/3 md:w-1/4 md:h-1/4 max-w-[250px] 
      top-[45px] md:top-[30px] left-1/2 -translate-x-1/2 z-10 opacity-80"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }} // เริ่มจาง + เลื่อนลง
          whileInView={{ opacity: 1, y: 0 }} // ตอนอยู่ใน viewport ให้โผล่ขึ้นมา
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // once = ให้เล่นแค่ครั้งเดียว
        >
          <div className="hidden lg:block w-full h-full">
            <Image
              src={logoWhite}
              alt="photo"
              width={500}
              height={0}
              className="object-cover relative"
            />
          </div>
          <div className="lg:hidden block w-full h-full">
            <Image
              src={logo}
              alt="photo"
              width={500}
              height={0}
              className="object-cover relative"
            />
          </div>
        </motion.div>
      </div>

      {/* --------- */}
      {/* --------- */}
      {/* --------- */}
      {/* --------- */}
      {/* --------- */}
      {/* --------- */}
      {/* --------- */}

      {/* header image */}
      <div className="w-full h-screen relative">
        <Image
          src="https://images.unsplash.com/photo-1745118037983-3f50f6e0abe4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1587"
          alt="photo"
          fill
          unoptimized
          className="object-cover"
        />

        {/* White gradient overlay from bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* --------- */}
      {/* --------- */}
      {/* --------- */}
      {/* --------- */}
      {/* --------- */}
      {/* --------- */}
      {/* --------- */}

      <div className="w-screen flex flex-col gap-6 md:gap-16 text-[#786353]">
        {/* --------- Countdown --------- */}
        <ShiftingCountdown />

        {/* --------- Celebrate Our Love --------- */}
        <div className="flex flex-col gap-8 text-center my-4">
          {/* Header */}

          <HeaderTheme
            topic="Celebrate Our Love"
            desc="ร่วมแสดงความยินดีกับเรา"
          />

          {/* body */}
          <div className="flex flex-col gap-8">
            {/* date and timeline */}
            <div className="flex md:flex-row flex-col mx-auto justify-center items-center md:max-w-xl lg:max-w-4xl md:gap-12 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }} // เริ่มจาง + เลื่อนลง
                whileInView={{ opacity: 1, y: 0 }} // ตอนอยู่ใน viewport ให้โผล่ขึ้นมา
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // once = ให้เล่นแค่ครั้งเดียว
              >
                {/* date / time */}
                <div className="flex gap-2 md:grid md:grid-cols-1 md:w-[240px] md:border-r-2 border-r-[#BCAB9F]/70 md:py-12">
                  <p className="md:text-xl">วันเสาร์ที่</p>
                  <div className="md:text-7xl md:sacramento md:mt-4 hidden md:block">
                    <SparklesText>18</SparklesText>
                  </div>
                  <div className="md:text-7xl md:sacramento md:mt-4 md:hidden block">
                    18
                  </div>
                  <p className="md:text-xl">กันยายน </p>
                  <p className="md:text-xl">พ.ศ. 2569</p>
                </div>
              </motion.div>

              {/* timeline */}
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                <BlurFade delay={0.3} inView>
                  <h2 className="text-left md:text-xl font-semibold flex gap-2">
                    <MapPin fill="#BCAB9F" />
                    <p>ณ ห้องจัดเลี้ยง โรงแรมแห่งหนึ่ง</p>
                  </h2>
                </BlurFade>

                <div className="grid grid-cols-2 text-left">
                  <div className="grid grid-cols-1 gap-2">
                    <BlurFade delay={0.7} inView>
                      <p className="md:text-xl">8.09 น.</p>
                    </BlurFade>

                    <BlurFade delay={0.9} inView>
                      <p className="md:text-xl">9.09 น.</p>
                    </BlurFade>

                    <BlurFade delay={1.2} inView>
                      <p className="md:text-xl">10.09 น.</p>
                    </BlurFade>

                    <BlurFade delay={1.5} inView>
                      <p className="md:text-xl">12.00 น.</p>
                    </BlurFade>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <BlurFade delay={0.7} inView>
                      <p className="md:text-xl">พิธีสงฆ์</p>
                    </BlurFade>
                    <BlurFade delay={0.9} inView>
                      <p className="md:text-xl">พิธีแห่ขันหมาก</p>
                    </BlurFade>

                    <BlurFade delay={1.2} inView>
                      <p className="md:text-xl">พิธีรดน้ำสังข์</p>
                    </BlurFade>

                    <BlurFade delay={1.5} inView>
                      <p className="md:text-xl">ร่วมรับประทานอาหาร</p>
                    </BlurFade>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex max-w-lg px-4 mx-auto gap-2">
              <div className="text-base font-semibold flex items-center mr-8">
                Dress Code
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#FAEA98] border-2 border-white shadow"></div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#C4CF91] border-2 border-white shadow"></div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#6D875B] border-2 border-white shadow"></div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#4C7069] border-2 border-white shadow"></div>
            </div>
          </div>
        </div>

        {/* --------- Video --------- */}

        <div className="flex flex-col gap-8 text-center my-4">
          {/* Header */}
          <div className="grid grid-cols-1">
            <h2 className="sacramento text-4xl md:text-6xl">
              <TextAnimate
                animation="blurInUp"
                by="character"
                startOnView={true}
              >
                Two Souls, One Journey
              </TextAnimate>
            </h2>
            <p className="text-sm lg:text-xl opacity-75">
              จากวันนั้น…ถึงวันนี้ที่เราพบกัน
            </p>
          </div>

          {/* body */}
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }} // เริ่มจาง + เลื่อนลง
              whileInView={{ opacity: 1, y: 0 }} // ตอนอยู่ใน viewport ให้โผล่ขึ้นมา
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }} // once = ให้เล่นแค่ครั้งเดียว
            >
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/3aCctY3DGac?si=SbmszC0dPkxIno7m"
                thumbnailSrc="https://images.unsplash.com/photo-1745118078926-fe7391ae9e08?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
                thumbnailAlt="Hero Video"
              />
            </motion.div>
          </div>
        </div>

        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}

        {/* --------- Gallery --------- */}

        <div className="flex flex-col gap-8 text-center my-4">
          {/* Header */}

          <HeaderTheme
            topic="The Moment We Knew"
            desc="ขอบคุณที่ไม่เดินผ่านกันไป"
          />

          {/* body */}
          <div className="relative w-full mx-auto">
            <DragCards />
          </div>
        </div>

        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}

        {/* --------- RSVP --------- */}
        <div className="flex flex-col gap-8 text-center my-4">
          {/* Header */}

          <HeaderTheme topic="Are You Attending?" />

          {/* body */}
          <div className="flex flex-col gap-8">
            <p className="font-semibold">
              แบบสอบถาม: คุณสะดวกมาร่วมงานของเราไหม
            </p>
            <div className="flex mx-auto w-full justify-center items-center py-5 px-4">
              {/* 1. สร้าง Iframe ลับซ่อนไว้ */}
              <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                className="hidden" // ใช้ tailwind ซ่อน
                onLoad={handleIframeLoad}
              ></iframe>

              <form
                action={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL}
                method="POST"
                target="hidden_iframe"
                onSubmit={() => {
                  setSubmitted(true);
                }}
                className="flex-col gap-4 w-full max-w-md"
              >
                <div className="flex flex-col gap-4">
                  {/* input fields */}
                  {/* name */}
                  <div className="flex gap-4 items-center">
                    <label
                      htmlFor={process.env.NEXT_PUBLIC_ENTRY_NAME}
                      className="min-w-max"
                    >
                      ชื่อ-นามสกุล
                    </label>
                    <input
                      type="text"
                      name={process.env.NEXT_PUBLIC_ENTRY_NAME}
                      value={attendance[process.env.NEXT_PUBLIC_ENTRY_NAME]}
                      onChange={handleChange}
                      maxLength={100}
                      className="border border-gray-200 
                    w-full rounded-xl
                    text-base px-4 py-2"
                      required
                    />
                  </div>
                  {/* attend? */}
                  {/* Smart Radio Buttons (UI แบบปุ่มกด) */}
                  <div className="flex flex-col gap-4 justify-start">
                    <label className="ml-1">ความสะดวกในการเข้าร่วมงาน</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          label: "สะดวก",
                          value: "สะดวก",
                          color:
                            "peer-checked:bg-green-50 peer-checked:border-green-500 peer-checked:text-green-700",
                        },
                        {
                          label: "ไม่สะดวก",
                          value: "ไม่สะดวกมาร่วมงาน",
                          color:
                            "peer-checked:bg-red-50 peer-checked:border-red-500 peer-checked:text-red-700",
                        },
                        {
                          label: "ไม่แน่ใจ",
                          value: "ไม่แน่ใจ",
                          color:
                            "peer-checked:bg-gray-50 peer-checked:border-gray-500 peer-checked:text-gray-700",
                        },
                      ].map((item) => (
                        <label key={item.value} className="relative">
                          <input
                            type="radio"
                            name={process.env.NEXT_PUBLIC_ENTRY_RESPONSE}
                            value={item.value}
                            checked={
                              attendance[
                                process.env.NEXT_PUBLIC_ENTRY_RESPONSE
                              ] === item.value
                            }
                            onChange={handleChange}
                            className="peer sr-only"
                            required
                          />
                          <div
                            className={`text-center py-2 px-1 border-2 border-gray-100 rounded-xl cursor-pointer text-sm font-medium text-gray-500 transition-all ${item.color} hover:bg-gray-50`}
                          >
                            {item.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Conditional Input: จะแสดง/ใช้งานเฉพาะเมื่อเลือก 'สะดวก' หรือ 'ไม่แน่ใจ' */}
                  <div
                    className={`space-y-2 transition-all duration-300 ${attendance[process.env.NEXT_PUBLIC_ENTRY_RESPONSE] === "ไม่สะดวกมาร่วมงาน" ? "opacity-40 grayscale pointer-events-none" : "opacity-100"}`}
                  >
                    <label className="ml-1">จำนวนคนที่มาร่วมงาน</label>
                    <input
                      type="number"
                      name={process.env.NEXT_PUBLIC_ENTRY_NO}
                      min="0"
                      max={10}
                      value={attendance[process.env.NEXT_PUBLIC_ENTRY_NO]}
                      onChange={handleChange}
                      disabled={
                        attendance[process.env.NEXT_PUBLIC_ENTRY_RESPONSE] ===
                        "ไม่สะดวกมาร่วมงาน"
                      }
                      placeholder={
                        attendance[process.env.NEXT_PUBLIC_ENTRY_RESPONSE] ===
                        "ไม่สะดวกมาร่วมงาน"
                          ? "0"
                          : "1"
                      }
                      className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 px-4 py-2.5 shadow-sm"
                      required={
                        attendance[process.env.NEXT_PUBLIC_ENTRY_RESPONSE] !==
                        "ไม่สะดวกมาร่วมงาน"
                      }
                    />
                  </div>

                  {/* สิ่งที่อยากบอกอื่นๆ */}
                  <div className="flex gap-4 items-center">
                    <label
                      htmlFor={process.env.NEXT_PUBLIC_ENTRY_COMMENT}
                      className="min-w-max"
                    >
                      สิ่งที่อยากบอก
                    </label>
                    <textarea
                      name={process.env.NEXT_PUBLIC_ENTRY_COMMENT}
                      value={attendance[process.env.NEXT_PUBLIC_ENTRY_COMMENT]}
                      onChange={handleChange}
                      className="border border-gray-200 
                    w-full rounded-xl
                    text-base px-4 py-2"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`hover:cursor-pointer mt-8 w-full py-3 rounded-xl font-bold text-white transition-all transform active:scale-95 shadow-md duration-300 ${
                    submitted
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-lime-800 to-yellow-950 hover:from-lime-700 hover:to-yellow-700"
                  }`}
                >
                  {submitted ? "กำลังส่งข้อมูล..." : "ยืนยันข้อมูล"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}

        {/* --------- Celebrate Our Love --------- */}
        <div className="flex flex-col gap-8 text-center my-4">
          {/* body */}
          <div className="flex flex-col gap-8">
            {/* map */}
            <div className="mt-8 px-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5249780696954!2d100.53679307633776!3d13.747184686644232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ecf8f159019%3A0x805b64abd03ccd1a!2z4LmC4Lij4LiH4LmB4Lij4Lih4LmA4LiL4LmH4LiZ4LiX4Liy4Lij4LiyIOC5geC4geC4o-C4meC4lOC5jCDguYHguK3guJcg4LmA4LiL4LmH4LiZ4LiX4Lij4Lix4Lil4LmA4Lin4Li04Lil4LiU4LmMIOC5geC4guC4p-C4h-C4m-C4l-C4uOC4oeC4p-C4seC4mSDguYDguILguJXguJvguJfguLjguKHguKfguLHguJkg4LiB4Lij4Li44LiH4LmA4LiX4Lie4Lih4Lir4Liy4LiZ4LiE4LijIDEwMzMw!5e0!3m2!1sth!2sth!4v1762833254322!5m2!1sth!2sth"
                width="100%"
                height="350"
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}
        {/* --------- */}

        {/* Footer */}

        <div className="w-full mx-auto text-center absolute bottom-[420px] lg:bottom-[440px] z-10">
          <div className="grid grid-cols-1 sm:text-white">
            <h2 className="sacramento text-xl md:text-4xl">
              <TextAnimate
                animation="blurInUp"
                by="character"
                startOnView={true}
              >
                Thank You for Being Part of Our Story
              </TextAnimate>
            </h2>
            <p className="text-sm lg:text-base opacity-75">
              With love and gratitude, Bantita & Montri.
            </p>
            <div className="mx-auto mt-12 md:mt-4 rounded-xl">
              <p className="text-xs text-white opacity-50">
                <span>Powered by </span>
                <Link href={"/"}>nysdev.com</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[600px] md:h-[600px] relative">
          <Image
            src="https://images.unsplash.com/photo-1745118037983-3f50f6e0abe4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1587"
            alt="photo"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Page;
