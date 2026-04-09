import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";

import { projects } from "../data/projects";
import type { Project } from "../data/projects";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function PortfolioDetail() {

  const { id, category, type } = useParams<{
    id: string;
    category: string;
    type: string;
  }>();

  const project = projects.find(
    (p: Project) =>
      p.id === Number(id) &&
      p.mainCategory === category &&
      p.subCategory === type
  );

  if (!project) {
    return (
      <div className="py-40 text-center">
        Project tidak ditemukan
      </div>
    );
  }

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">

          <Link
            to={`/portfolio/${category}/${type}`}
            className="text-sm text-gray-500 hover:text-black transition"
          >
            ← Kembali
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            {project.title}
          </h1>

          <p className="text-gray-500 text-lg">
            {project.location} • {project.year} • {project.area}
          </p>

        </div>
      </section>

      {/* ================= HERO MEDIA ================= */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gray-100 rounded-2xl overflow-hidden">

            {project.mainMedia ? (
              project.mainMedia.type === "video" ? (
                <motion.video
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={project.mainMedia.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              ) : (
                <motion.img
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={project.mainMedia.src}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )
            ) : (
              <motion.img
                src={project.mainImage}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}

          </div>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="md:col-span-2">

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                Description
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Concept
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {project.concept}
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-medium">{project.location}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Year</p>
              <p className="font-medium">{project.year}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Area</p>
              <p className="font-medium">{project.area}</p>
            </div>

            {project.client && (
              <div>
                <p className="text-sm text-gray-400">Client</p>
                <p className="font-medium">{project.client}</p>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ================= SWIPER GALLERY ================= */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}

            // ✅ RESPONSIVE BREAKPOINT
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.2,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}

            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
          >

            {project.media.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">

                <div className="w-full max-w-xl">

                  {/* CONTAINER RATIO */}
                  <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">

                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={project.title}
                        className="w-full h-auto max-h-[75vh] object-contain"
                      />
                    ) : (
                      <video
                        className="w-full h-auto max-h-[75vh] object-contain"
                        controls
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    )}

                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </section>

    </div>
  );
}