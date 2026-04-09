import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import villaImg from '../Assets/Gemini_Generated_Image_vq8pkuvq8pkuvq8p.png';
import residenceImg from '../Assets/Gemini_Generated_Image_vq8pkuvq8pkuvq8p.png';
import interiorImg from '../Assets/Gemini_Generated_Image_vq8pkuvq8pkuvq8p.png';
import commercialImg from '../Assets/Gemini_Generated_Image_vq8pkuvq8pkuvq8p.png';

const heroProjects = [
  {
    id: 1,
    title: 'Modern Urban Villa',
    category: 'Residential',
    location: 'Jakarta Selatan',
    image: villaImg,
  },
  {
    id: 2,
    title: 'Contemporary Residence',
    category: 'Residential',
    location: 'Bandung',
    image: residenceImg,
  },
  {
    id: 3,
    title: 'Luxury Interior Design',
    category: 'Interior',
    location: 'Surabaya',
    image: interiorImg,
  },
  {
    id: 4,
    title: 'Commercial Complex',
    category: 'Commercial',
    location: 'Jakarta Pusat',
    image: commercialImg,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % heroProjects.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + heroProjects.length) % heroProjects.length);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Slider */}
      <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
        {/* Background Slides */}
        {heroProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1,
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <motion.div style={{ y }} className="h-full w-full">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
            </motion.div>
          </motion.div>
        ))}

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full flex items-center justify-center text-center px-6"
        >
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                ARCANAWA
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 tracking-wider">
                Create your dreaming space and build your quality lifes.
              </p>
            </motion.div>

            {/* Current Project Info */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm tracking-wider">
                {heroProjects[currentSlide].category}
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                {heroProjects[currentSlide].title}
              </h2>
              <p className="text-white/80 text-lg">
                {heroProjects[currentSlide].location}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105"
              >
                Lihat Portfolio
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                Hubungi Kami
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Slider Controls */}
        <div className="absolute bottom-12 left-0 right-0 z-20 flex items-center justify-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="flex space-x-2">
            {heroProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(index);
                }}
                className="relative group"
              >
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${currentSlide === index
                    ? 'w-12 bg-white'
                    : 'w-8 bg-white/40 group-hover:bg-white/60'
                    }`}
                />
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Proyek Unggulan Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Eksplorasi karya interior dan arsitektur terbaik kami yang menggabungkan estetika
              modern dengan fungsionalitas optimal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link to={`/portfolio/${project.id}`}>
                  <div className="relative h-80 overflow-hidden rounded-lg mb-4">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm tracking-wider">{project.category}</span>
                      <h3 className="text-2xl font-semibold mt-2">{project.title}</h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-secondary/20 text-primary text-sm rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.location}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105"
            >
              Lihat Semua Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Mengapa Memilih Arcanawa?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kami menghadirkan solusi arsitektur terbaik dengan pendekatan yang
              inovatif dan profesional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Desain Inovatif',
                description:
                  'Menggabungkan kreativitas dengan teknologi terkini untuk menciptakan desain yang unik dan fungsional',
              },
              {
                title: 'Kualitas Premium',
                description:
                  'Komitmen terhadap standar kualitas tertinggi dalam setiap aspek proyek arsitektur',
              },
              {
                title: 'Pendekatan Berkelanjutan',
                description:
                  'Mengintegrasikan prinsip keberlanjutan untuk menciptakan bangunan yang ramah lingkungan',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-primary rounded" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mari Wujudkan Proyek Impian Anda
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Hubungi kami untuk konsultasi gratis dan mulai perjalanan Anda
              menuju desain interior dan arsitektur yang luar biasa
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Mulai Konsultasi
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
