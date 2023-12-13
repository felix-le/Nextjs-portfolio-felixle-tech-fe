import React from "react";
import Image from "next/image";
import HeroBanner from "@images/hero.webp";

function index() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="w-full">
        <Image src={HeroBanner} alt="mockup" className="w-full max-h-[600px]" />
      </div>
    </section>
  );
}

export default index;
