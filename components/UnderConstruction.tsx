"use client";

import Lottie from "lottie-react";
import Animation from "../public/maintinace.json";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie animationData={Animation} loop={true} />
      <div>
        <h1 className="text-2xl font-bold text-violet-700">
          Contact us at{" "}
          <a
            href="mailto:info@zikasha.com"
            className="cursor-pointer underline"
          >
            info@zikasha.com
          </a>{" "}
          for any queries.
        </h1>
      </div>
    </div>
  );
}
