"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GrMapLocation } from "react-icons/gr";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function HomePage() {
  const logoRef = useRef(null);

  useEffect(() => {
    // GSAP subtle floating animation for logo
    gsap.to(logoRef.current, {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-sm flex flex-col items-center gap-3"
      >
        {/* Logo */}
        <div ref={logoRef}>
          <Image
            src="/logo.png"
            alt="Your Brand Logo"
            width={400}
            height={5}
            className="-mt-20 -mb-20"
            priority
          />
        </div>

        {/* Social Media */}
        <motion.div
          className="w-full flex flex-col gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <SocialLink
            label="Instagram"
            href="https://www.instagram.com/hayaalaa_official"
            icon={<FaInstagram />}
          />
          <SocialLink
            label="Facebook Group"
            href="https://www.facebook.com/share/g/17v76e1RbX/"
            icon={<FaFacebookF />}
          />
          <SocialLink
            label="Facebook Page"
            href="https://www.facebook.com/share/1JWFEd79SC/"
            icon={<FaFacebookF />}
          />
          <SocialLink
            label="TikTok"
            href="https://www.tiktok.com/@hayaalaaofficial"
            icon={<FaTiktok />}
          />
        </motion.div>

        {/* Location */}
        <motion.a
          href="#"
          target="_blank"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4 flex items-center gap-2 text-sm font-bold hover:opacity-100 transition"
        >
          <GrMapLocation className="text-lg" />
          <span>View Location on Maps</span>
        </motion.a>

        {/* Contact Info */}
        <motion.div
          className="w-full mt-6 flex flex-col gap-3 text-sm opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* Phone */}
          <div className="flex items-center gap-3 justify-center">
            <FaPhoneAlt />
            <a href="tel:01000324367">010-33-37-22-78</a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3 justify-center">
            <FaWhatsapp />
            <a href="https://wa.me/201033372278" target="_blank">
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
        </motion.div>
      </motion.div>
    </main>
  );
}

function SocialLink({ label, href, icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="
        w-full flex items-center justify-center gap-3
        py-3 rounded-xl
        border border-black/10 bg-white/15 dark:border-white/10
        hover:bg-black/5 dark:hover:bg-white/10
      "
    >
      <span className="text-lg opacity-80">{icon}</span>
      <span className="font-medium">{label}</span>
    </motion.a>
  );
}
