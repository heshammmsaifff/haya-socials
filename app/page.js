"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { GrMapLocation } from "react-icons/gr";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div
        className={`w-full max-w-sm flex flex-col items-center gap-3
        transition-all duration-700 ease-out
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Your Brand Logo"
          width={400}
          height={5}
          className="-mt-20 -mb-20"
          priority
        />

        {/* Social Media */}
        <div className="w-full flex flex-col gap-3">
          <SocialLink
            label="Instagram"
            href="https://www.instagram.com/hayaalaa_official?igsh=MXBzcXM4bzFlNWxzZQ%3D%3D&utm_source=qr"
            icon={<FaInstagram />}
          />

          <SocialLink
            label="Facebook Group"
            href="https://www.facebook.com/share/g/17v76e1RbX/?mibextid=wwXIfr"
            icon={<FaFacebookF />}
          />

          <SocialLink
            label="Facebook Page"
            href="https://www.facebook.com/share/1JWFEd79SC/?mibextid=wwXIfr"
            icon={<FaFacebookF />}
          />

          <SocialLink
            label="TikTok"
            href="https://www.tiktok.com/@hayaalaaofficial?_r=1&_t=ZS-92HWaGcFTNY"
            icon={<FaTiktok />}
          />
        </div>

        {/* Location */}
        <a
          href="#"
          target="_blank"
          className="
            mt-4
            flex items-center gap-2
            text-sm font-bold
            opacity-80 hover:opacity-100
            transition
          "
        >
          <GrMapLocation className="text-lg" />
          <span>View Location on Maps</span>
        </a>

        {/* Contact Info */}
        <div className="w-full mt-6 flex flex-col gap-3 text-sm opacity-80">
          {/* Phone */}
          <div className="flex items-center gap-3 justify-center">
            <FaPhoneAlt className="text-base" />
            <a href="tel:01000324367" className="hover:opacity-100 transition">
              010-33-37-22-78
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3 justify-center">
            <FaWhatsapp className="text-lg" />
            <a
              href="https://wa.me/201033372278"
              target="_blank"
              className="hover:opacity-100 transition"
            >
              010-33-37-22-78
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 justify-center text-center leading-relaxed">
            <CiLocationOn className="text-lg mt-0.5" />
            <span>
              Sharqia – Faqous – Kafr El Adawy Street
              <br />
              in front of 9A Cafe
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
function SocialLink({ label, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      className="
        w-full flex items-center justify-center gap-3
        py-3 rounded-xl
        border border-black/10 bg-white/15 dark:border-white/10
        hover:scale-[1.03]
        hover:bg-black/5 dark:hover:bg-white/10
        transition-all duration-300
      "
    >
      <span className="text-lg opacity-80">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
}
