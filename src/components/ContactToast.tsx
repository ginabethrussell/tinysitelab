"use client";
import React from "react";
import { Toaster, ToastBar, toast } from "react-hot-toast";
import { X } from "lucide-react";

export default function ContactToast() {
  return (
    <Toaster
      position="top-center"
      containerStyle={{
        top: "4.5rem", // Add spacing below navbar
      }}
      toastOptions={{
        style: {
          background: "#FFFFFF",
          color: "#0C2D48",
          border: "1px solid #53cdd5",
          fontWeight: "semibold",
          minHeight: "50px",
        },
        success: {
          duration: Infinity,
          iconTheme: {
            primary: "#53cdd5",
            secondary: "#FF5722",
          },
        },
        error: {
          duration: Infinity,
          style: {
            background: "#FFE5E5",
            color: "#B00020",
            border: "1px solid #FFBABA",
          },
          iconTheme: {
            primary: "#B00020",
            secondary: "#FFFFFF",
          },
        },
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div className="flex items-start space-x-4 w-full">
              <span
                className="mt-1 cursor-pointer"
                onClick={() => {
                  toast.dismiss(t.id);
                }}
              >
                {icon}
              </span>
              <div className="flex flex-col text-md text-left leading-snug">
                {t.type === "error" ? (
                  <>
                    <p>An error occurred with form submission.</p>
                    <p className="mt-1">
                      Please contact me at{" "}
                      <a
                        href="mailto:ginabeth@tinysitelab.com?subject=HELP!%20My%20Form%20Submission%20Inquiry%20Failed"
                        className="text-blue-600 hover:underline"
                      >
                        ginabeth@tinysitelab.com
                      </a>
                    </p>
                  </>
                ) : (
                  <div className="flex">
                    <div>{message}</div>
                    <button
                      className="self-start mt-1 text-lg text-gray-600 hover:text-black"
                      aria-label="Dismiss toast"
                      onClick={() => toast.dismiss(t.id)}
                    >
                      <X size={20} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}
