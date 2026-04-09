import { motion } from "motion/react";
import { HardHat, PenTool, ArrowRight } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function PortfolioCategory() {

    const { category } = useParams();
    const navigate = useNavigate();

    const types = [
        {
            slug: "perencanaan",
            icon: PenTool,
            title: "Perencanaan",
            description: "Portfolio proyek desain dan perencanaan.",
        },
        {
            slug: "pelaksanaan",
            icon: HardHat,
            title: "Pelaksanaan",
            description: "Portfolio proyek pembangunan yang telah kami kerjakan.",
        },
    ];

    return (
        <div className="bg-white">

            {/* ================= HERO (SAMA SEPERTI Portfolio.tsx) ================= */}
            <section className="relative flex items-center justify-center h-[50vh] bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-6 text-center text-primary"
                >
                    <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold capitalize">
                        {category}
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-primary/80">
                        Pilih jenis layanan untuk melihat portfolio project kami.
                    </p>
                </motion.div>
            </section>

            {/* ================= BACK ================= */}
            <div className="max-w-7xl mx-auto px-6 mb-10">
                <Link
                    to="/portfolio"
                    className="text-sm text-muted-foreground hover:text-black transition"
                >
                    ← Kembali ke Portfolio
                </Link>
            </div>

            {/* ================= CATEGORY TYPES ================= */}
            <section className="pb-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 gap-10">

                        {types.map((item, index) => {

                            const Icon = item.icon;

                            const totalProject = projects.filter(
                                (p) =>
                                    p.mainCategory === category &&
                                    p.subCategory === item.slug
                            ).length;

                            return (

                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    onClick={() =>
                                        navigate(`/portfolio/${category}/${item.slug}`)
                                    }
                                    className="bg-muted/30 border rounded-2xl p-10 hover:shadow-xl transition cursor-pointer group"
                                >

                                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="text-white" size={30} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-4">
                                        {item.description}
                                    </p>

                                    {/* TOTAL PROJECT */}
                                    <p className="text-sm text-gray-500 mb-6">
                                        {totalProject} Project
                                    </p>

                                    <div className="flex items-center gap-2 text-primary font-semibold">

                                        <span>Lihat Project</span>

                                        <ArrowRight
                                            size={18}
                                            className="group-hover:translate-x-1 transition"
                                        />

                                    </div>

                                </motion.div>

                            );
                        })}

                    </div>

                </div>

            </section>

        </div>
    );
}