import { motion, useScroll, useTransform } from "motion/react";
import { Target, Eye, Award, Users } from "lucide-react";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import heroImage from "../Assets/heroabout.png";
import studioImage from "../Assets/download (1).jpg";
import photo from "../Assets/Gemini_Generated_Image_vq8pkuvq8pkuvq8p.png";
import logo from "../Assets/logo putih-kosong.png";

import ilham from "../Assets/team/ilham.jpeg";
import mia from "../Assets/team/mia.jpeg";
import ainun from "../Assets/team/ainun.jpeg";
import dwi from "../Assets/team/ilham.jpeg";
import solikin from "../Assets/team/ilham.jpeg";
import purwanto from "../Assets/team/ilham.jpeg";
import diah from "../Assets/team/ilham.jpeg";
import lutfi from "../Assets/team/lutfi.jpeg";
import rifqi from "../Assets/team/ilham.jpeg";

/* ================= TEAM DATA ================= */

const directors = [
  {
    name: "ILHAM BAYU DWI P.",
    role: "Director",
    photo: ilham,
  },
  {
    name: "MIA NURILLA",
    role: "Vice Director / Administration",
    photo: mia,
  },
];

const fieldExecutive = [
  {
    name: "MUCH. AINUN NAJIB",
    role: "Chief Interior Workshop",
    photo: ainun,
  },
  {
    name: "DWI P. ABRIANTO",
    role: "Chief Civil Coordinator",
    photo: dwi,
  },
  {
    name: "SOLIKIN",
    role: "Field Interior",
    photo: solikin,
  },
  {
    name: "PURWANTO",
    role: "Field Coordinator",
    photo: purwanto,
  },
];

const designers = [
  {
    name: "DIAH RACHMAWATI",
    role: "Architect",
    photo: diah,
  },
  {
    name: "MUH LUTFI",
    role: "Civil Engineer",
    photo: lutfi,
  },
  {
    name: "AKHMAD MUKH. RIFQI",
    role: "Drafter",
    photo: rifqi,
  },
];

/* ================= MAIN PAGE ================= */

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const values = [
    { icon: Target, title: "Inovasi", description: "Solusi desain kreatif dan inovatif" },
    { icon: Award, title: "Kualitas", description: "Standar kualitas tertinggi" },
    { icon: Eye, title: "Estetika", description: "Keindahan visual dan fungsionalitas" },
    { icon: Users, title: "Kolaborasi", description: "Kerja sama erat dengan klien" },
  ];

  return (
    <div className="overflow-x-hidden bg-white">

      {/* HERO */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-[80px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="About"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative text-left text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
        </motion.div>
      </section>

      {/* FILOSOFI */}
      <section ref={containerRef} className="py-20 px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              ARCANAWA is an interior, exterior designer and construction.
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              We work together in team to design, construction and produce work
              that we are proud of for folks that we believe in.
              We are available for hire in design and construction.
            </p>
          </motion.div>

          <motion.div
            style={{ y }}
            className="h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={studioImage}
              alt="Studio"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </section>

      <HistorySection />

      <VisionMission />

      {/* VALUES */}
      <section className="py-20 bg-muted/30 px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <div
              key={i}
              className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <v.icon className="mx-auto mb-4 text-primary" size={36} />
              <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ORG CHART */}
      <section className="py-24 px-4 bg-[#8b6f47] text-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Struktur Tim Proyek
          </h2>
        </div>

        <OrgChart />
      </section>

    </div>
  );
}

/* ================= HISTORY ================= */

function HistorySection() {
  return (
    <section className="py-28 px-6 lg:px-12 bg-gradient-to-b from-white to-[#f8f5f0]">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ABOUT ARCANAWA
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Didirikan pada tahun 2019 sebagai <b>B Interior - B Arsitek</b>,
              perusahaan ini berawal sebagai konsultan desain interior dan konstruksi.
            </p>

            <p>
              Seiring berkembangnya pengalaman menangani berbagai proyek,
              perusahaan terus beradaptasi untuk menjawab kebutuhan yang semakin kompleks.
            </p>

            <p>
              Transformasi menjadi
              <span className="text-[#c8a27a] font-semibold"> ARCANAWA Interior - Arsitek </span>
              memperkuat identitas profesional di industri desain dan konstruksi.
            </p>

            <p>
              Kami percaya bahwa desain bukan hanya estetika,
              tetapi solusi untuk meningkatkan kualitas pengalaman ruang.
            </p>
          </div>

          <div className="grid gap-6">

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#c8a27a]">
              <h3 className="font-semibold mb-2">Design Approach</h3>
              <p className="text-sm text-muted-foreground">
                Menggabungkan estetika dan fungsi untuk solusi desain yang relevan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#c8a27a]">
              <h3 className="font-semibold mb-2">Problem Solving</h3>
              <p className="text-sm text-muted-foreground">
                Fokus pada penyelesaian kendala nyata dalam proyek.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#c8a27a]">
              <h3 className="font-semibold mb-2">Project Experience</h3>
              <p className="text-sm text-muted-foreground">
                Berpengalaman dalam proyek rumah tinggal, café,
                villa, apartemen, dan kantor.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

/* VISI MISI*/

function VisionMission() {
  const containerRef = useRef(null);

  // SCROLL PARALLAX
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const vision = [
    "Menjadi desainer dan kontraktor profesional dalam mendesain bangunan rumah tinggal maupun bangunan komersil lainnya.",
    "Menjadi desainer dan kontraktor yang solutif, kreatif, inovatif dalam memecahkan masalah antara keinginan klien dan kendala yang ada.",
    "Membantu meningkatkan kualitas kehidupan banyak orang dengan memberikan pelayanan terbaik.",
  ];

  const mission = [
    "Menciptakan berbagai desain dan bangunan yang dapat meningkatkan kualitas kehidupan bagi pengguna dan sekitarnya.",
    "Memberikan kepuasan pada setiap klien.",
    "Memberikan layanan dan solusi yang bernilai tambah di bidang desainer dan kontraktor",
    "Memberikan kemudahan, kepastian, kualitas dan inovasi dalam pelayanan.",
    "Melaksanakan tata kelola perusahaan yang baik.",
    "Meningkatkan kepedulian dan tanggung jawab terhadap lingkungan dan sosial.",
  ];

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen bg-[#f4f1ea] overflow-hidden"
    >
      <div className="grid lg:grid-cols-[1.2fr_0.2fr_1fr] min-h-screen">

        {/* IMAGE SIDE */}
        <div className="relative overflow-hidden group">

          <motion.img
            src={photo}
            style={{ y: yImage, scale: scaleImage }}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* OVERLAY */}
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 0.2 }}
            transition={{ duration: 0.5 }}
          />

          {/* LIGHT EFFECT */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "linear",
            }}
          />

          {/* LOGO */}
          <motion.img
            src={logo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 left-10 w-16"
          />
        </div>

        {/* VERTICAL LINE */}
        <div className="relative flex items-center justify-center">

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "80%" }}
            transition={{ duration: 1 }}
            className="w-[1px] bg-black/20"
          />

          <div className="absolute">
            <p className="rotate-0 lg:rotate-[-90deg] font-serif tracking-[0.4em] lg:tracking-[0.8em] text-sm lg:text-base text-[#8b6f47] lg:text-black/50 whitespace-nowrap">
              ARCANAWA
            </p>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="flex flex-col justify-center px-20 lg:px-16 py-20 space-y-16">

          {/* VISI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-serif text-[#8b6f47] mb-6">
              VISI
            </h2>

            <ul className="space-y-4">
              {vision.map((v, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm text-black/70 border-l-2 border-[#8b6f47]/40 pl-4"
                >
                  {v}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* MISI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-serif text-[#8b6f47] mb-6">
              MISI
            </h2>

            <ul className="space-y-4">
              {mission.map((m, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm text-black/70 border-l-2 border-[#8b6f47]/40 pl-4"
                >
                  {m}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ================= ORG CHART ================= */

function OrgChart() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-24">

      <div className="flex flex-col items-center gap-10">
        <SectionLabel text="Leadership" />

        <div className="flex justify-center gap-10 flex-wrap">
          {directors.map((person, i) => (
            <TeamCard key={i} {...person} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <SectionLabel text="Field Executive" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 place-items-center">
          {fieldExecutive.map((person, i) => (
            <TeamCard key={i} {...person} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <SectionLabel text="Designer Team" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 place-items-center">
          {designers.map((person, i) => (
            <TeamCard key={i} {...person} />
          ))}
        </div>
      </div>

    </div>
  );
}

/* ================= TEAM CARD ================= */

type TeamCardProps = {
  name: string;
  role: string;
  photo: string;
};

function TeamCard({ name, role, photo }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative w-[240px] h-[300px] rounded-xl overflow-hidden shadow-lg group"
    >
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-4 text-left">
        <h3 className="text-white font-semibold text-lg leading-tight">
          {name}
        </h3>

        <p className="text-[#e7c9a5] text-sm">
          {role}
        </p>
      </div>
    </motion.div>
  );
}

/* ================= SECTION LABEL ================= */

type SectionLabelProps = {
  text: string;
};

function SectionLabel({ text }: SectionLabelProps) {
  return (
    <h2 className="text-[#e7c9a5] text-sm md:text-base font-semibold tracking-widest uppercase">
      {text}
    </h2>
  );
}