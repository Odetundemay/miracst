import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-2xl items-center space-y-0 flex-shrink-0 w-72 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
        alt=""
      />

      <div className="w-full px-0 md:px-10">
        <h4 className="text-lg md:text-3xl font-light">CEO OF PAPAFAM</h4>
        <p className="font-bold text-md md:text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-1o rounded-full"
            src="https://global.discourse-cdn.com/sitepoint/original/3X/c/6/c6252d26028601ebc265b266e13a8c5b511d26b0.png"
          />
          <img
            className="h-10 w-1o rounded-full"
            src="https://global.discourse-cdn.com/sitepoint/original/3X/c/6/c6252d26028601ebc265b266e13a8c5b511d26b0.png"
          />
          <img
            className="h-10 w-1o rounded-full"
            src="https://global.discourse-cdn.com/sitepoint/original/3X/c/6/c6252d26028601ebc265b266e13a8c5b511d26b0.png"
          />
          <img
            className="h-10 w-1o rounded-full"
            src="https://global.discourse-cdn.com/sitepoint/original/3X/c/6/c6252d26028601ebc265b266e13a8c5b511d26b0.png"
          />
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summaty points</li>
          <li>Summaty points</li>
          <li>Summaty points</li>
          <li>Summaty points</li>
        </ul>
      </div>
    </article>
  );
}
