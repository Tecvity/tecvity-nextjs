"use client"

import { useEffect, useRef } from "react"
// import { X } from "lucide-react"

export default function BookingModal({ isOpen, onClose }) {
  const modalRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    function handleEscKey(event) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscKey)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div style={{ zIndex: 1000, position: "fixed", top: 0, left: 0,  width: "100%", height: "100rem", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-8 m-auto"
      aria-modal="true"
      role="dialog"
      style={{height: "40rem"}}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg w-full max-w-4xl relative shadow-xl animate-in fade-in zoom-in duration-300"
        
      style={{height: "40rem"}}
      >
        <div className="w-full h-[585px]">
          <iframe
            width="100%"
            height="100%"
            src="https://tecvity.zohobookings.com/portal-embed#/tecvity"
            frameBorder="0"
            allowFullScreen
            title="Booking Calendar"
      style={{height: "40rem"}} 
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  )
}
