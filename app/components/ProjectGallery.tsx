"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ProjectImage } from "../data/projects";

export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {images.map((img, i) => (
        <motion.div
          key={`${img.alt}-${i}`}
          className={`relative w-full rounded-[16px] overflow-hidden bg-black ${
            img.aspectClass ?? "aspect-[16/9]"
          }`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          {img.isReal && img.src ? (
            img.src.toLowerCase().endsWith(".mp4") ? (
              <video
                controls
                preload="metadata"
                className="w-full h-full object-contain bg-black"
              >
                <source src={img.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            )
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[13px] text-espresso/30 font-medium">{img.alt}</span>
            </div>
          )}
          {img.caption && (
            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-espresso/60 backdrop-blur-sm">
              <p className="text-[11px] text-oat/80">{img.caption}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
