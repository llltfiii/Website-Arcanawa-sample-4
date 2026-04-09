import { motion } from "motion/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function PortfolioList() {

    const { category, type } = useParams();
    const navigate = useNavigate();

    const filteredProjects = projects.filter(
        (p) =>
            p.mainCategory === category &&
            p.subCategory === type
    );

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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
                        {category} / {type}
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-primary/80">
                        Daftar project yang telah kami kerjakan.
                    </p>

                </motion.div>
            </section>

            {/* ================= BACK ================= */}
            <div className="max-w-7xl mx-auto px-6 mb-10">
                <Link
                    to={`/portfolio/${category}`}
                    className="text-sm text-muted-foreground hover:text-black transition"
                >
                    ← Kembali
                </Link>
            </div>

            {/* ================= GRID PROJECT ================= */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-3 gap-10">

                        {filteredProjects.map((project) => (

                            <motion.div
                                key={project.id}
                                whileHover={{ y: -8 }}
                                onClick={() =>
                                    navigate(`/portfolio/${category}/${type}/${project.id}`)
                                }
                                className="cursor-pointer group"
                            >

                                {/* ⛔ JANGAN UBAH STRUKTUR DALAM */}
                                <div className="bg-muted/30 border rounded-2xl overflow-hidden hover:shadow-xl transition">

                                    <img
                                        src={project.mainImage}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition"
                                    />

                                    <div className="p-6">

                                        <h3 className="text-xl font-bold mb-2">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground">
                                            {project.location} • {project.year}
                                        </p>

                                        <span className="text-shadow-yellow-800 text-sm font-medium">
                                            Lihat lebih detail →
                                        </span>
                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

        </div>
    );
}