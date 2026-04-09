import { motion } from "motion/react";
import { Home, Palette, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const categories = [
    {
      slug: "arsitektur",
      icon: Home,
      title: "Arsitektur",
      description: "Portfolio proyek desain dan pembangunan arsitektur.",
    },
    {
      slug: "interior",
      icon: Palette,
      title: "Interior",
      description: "Portfolio proyek desain interior modern dan fungsional.",
    },
  ];

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative flex items-center justify-center h-[50vh] bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 text-center text-primary"
        >
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold">
            Portfolio
          </h1>

          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-primary/80">
            Explore our works and discover how we design meaningful spaces.
          </p>
        </motion.div>
      </section>

      {/* ================= CATEGORY ================= */}
      <section className="pb-24">
        <div className="max-w-7xl px-6 mx-auto">
          <div className="grid gap-10 md:grid-cols-2">

            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link key={index} to={`/portfolio/${item.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="p-10 transition border cursor-pointer rounded-2xl bg-muted/30 hover:shadow-xl"
                  >

                    {/* Icon */}
                    <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-primary">
                      <Icon size={30} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-2xl font-bold">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-muted-foreground">
                      {item.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 font-semibold text-primary">
                      <span>Lihat Portfolio</span>
                      <ArrowRight size={18} />
                    </div>

                  </motion.div>
                </Link>
              );
            })}

          </div>
        </div>
      </section>

    </div>
  );
}