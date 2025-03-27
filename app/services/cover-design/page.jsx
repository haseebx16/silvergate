"use client";

import React, { useState, useEffect } from "react";
import { font } from "@/app/Components/font/font";
import Navbar from "@/app/Components/Navbar";
import DesignServices from "./DesignServices";
import BookCoverDesign from "./BookCoverDesign";
import InteriorFormatting from "./InteriorFormatting";
import ContactBanner from "@/app/Components/ContactBanner";
import Footer from "@/app/Components/Footer";
import Apart from "@/app/Components/Apart";
import ContactForm from "@/app/Components/ContactForm"; // Adjust the path if necessary

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal on "Escape" key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen]);

  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div
        className="relative w-full min-h-[30rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/whitewood.png')" }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black px-4 text-center">
          <p className="text-3xl md:text-6xl">Book Cover Design</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
            Silver Gate Publishing offers four different professional book cover design services tailored to meet the needs of any independent author based on their budget and design preferences. Learn more about our services below and how we can help you design a captivating book cover.
          </p>
          <p className="pt-8 text-xl italic max-w-3xl">
            *Cover Design and Interior Formatting are required services.
          </p>
          <button
            onClick={openModal}
            className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400"
          >
            Get Started!
          </button>
        </div>
      </div>
      <DesignServices />
      <BookCoverDesign />
      <InteriorFormatting />
      <Apart />
      <ContactBanner />
      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <ContactForm onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;