"use client";

import React, { useState, useEffect } from "react";
import { font } from "@/app/Components/font/font";
import ContactForm from "@/app/Components/ContactForm"; // Adjust the path if necessary

const BookFormattingServices = () => {
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
    <div className={`${font.className} mt-24`}>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[40rem] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/leather.jpg')" }}
      >
        <div className="text-white px-4 text-center">
          <p className="text-3xl mt-12 md:text-6xl">Book Formatting Services</p>
        </div>

        {/* Card Section - Positioned Below the Button */}
        <div className="mt-12 flex justify-center space-x-8">
          <div className="bg-white p-6 rounded-tl-4xl w-[70%] rounded-br-4xl shadow-lg text-center">
            <img src="/Silver Gate-interior.png.webp" className="w-[15rem] mx-auto" alt="Silver Gate Interior" />
            <p className="text-black text-4xl pt-8 font-semibold">Silver Gate</p>
            <p className="green-text text-3xl pt-2">Starting At $599</p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>Interior layout & design
            </p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>Copyright page, print margins, & text formatting
            </p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>Up to 1 image
            </p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>1 round of up to 25 text changes
            </p>
            <button
              onClick={openModal}
              className="text-3xl text-center button-gradient py-4 rounded-full max-w-sm mt-8"
            >
              From $599
            </button>
          </div>
          <div className="bg-white p-6 rounded-tl-4xl w-[70%] rounded-br-4xl shadow-lg text-center">
            <img src="/custom-interior.png.webp" className="w-[15rem] mx-auto" alt="Custom Interior" />
            <p className="text-black text-4xl pt-8 font-semibold">Custom Interior</p>
            <p className="green-text text-3xl pt-2">Starting At $699</p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>Interior layout & design
            </p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>Copyright page, print margins, & text formatting
            </p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>Up to 25 images, 3 may be premium stock images
            </p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>2 rounds of up to 50 text changes
            </p>
            <button
              onClick={openModal}
              className="text-3xl text-center button-gradient py-4 rounded-full max-w-sm mt-8"
            >
              From $699
            </button>
          </div>
        </div>
        <div className="mt-12 flex justify-center mb-12 space-x-8">
          <div className="bg-white p-6 rounded-tl-4xl w-[80%] rounded-br-4xl shadow-lg text-center">
            <img src="/ereader.png.webp" className="w-[10rem] mx-auto" alt="E-Book Conversion" />
            <p className="text-black text-4xl pt-8 font-semibold">E-Book Conversion</p>
            <p className="green-text text-3xl pt-2">Starting At $399</p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>EPUB file that can be used on most e-book devices and platforms such as Kindle, Nook, and iBook
            </p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>Can create both Flowable and Fixed Layout e-book
            </p>
            <button
              onClick={openModal}
              className="text-3xl text-center button-gradient py-4 rounded-full max-w-sm mt-8"
            >
              From $399
            </button>
          </div>
          <div className="bg-white p-6 rounded-tl-4xl w-[80%] rounded-br-4xl shadow-lg text-center">
            <img src="/complex-plus-interior.png.webp" className="w-[15rem] mx-auto" alt="Complex Plus Interior" />
            <p className="text-black text-4xl pt-8 font-semibold">Complex Plus</p>
            <p className="green-text text-3xl pt-2">Starting At $1,699</p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>Consultation with design mock-up before interior creation
            </p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>Interior layout & design
            </p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>Copyright page, print margins, & text formatting
            </p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>100-200 images or other special formatting instances
            </p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>Up to 5 premium stock images
            </p>
            <p className="text-xl text-left max-w-sm pt-4">
              <span className="text-4xl text-teal-600">• </span>3 rounds of changes
            </p>
            <button
              onClick={openModal}
              className="text-3xl text-center button-gradient py-4 rounded-full max-w-sm mt-8"
            >
              From $1,699
            </button>
          </div>
        </div>
      </div>

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

export default BookFormattingServices;