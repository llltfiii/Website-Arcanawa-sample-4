import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export default function ServiceDetail() {
    const { slug } = useParams();

    const services = {
        arsitektur: {
            title: "Desain Arsitektur",
            description:
                "Layanan desain arsitektur profesional mulai dari konsep hingga gambar kerja lengkap untuk rumah tinggal dan bangunan komersil.",
            features: [
                "Site Analysis & Perencanaan Lahan",
                "Konsep Desain Arsitektur",
                "Denah, Tampak, dan Potongan",
                "Gambar Kerja Detail",
                "Visualisasi 3D Rendering",
                "Perhitungan BOQ (RAB)",
            ],
            process: [
                "Konsultasi kebutuhan klien",
                "Pengembangan konsep desain",
                "Revisi desain sesuai kebutuhan",
                "Pembuatan gambar kerja lengkap",
                "Pendampingan saat konstruksi",
            ],
            benefits: [
                "Desain sesuai kebutuhan klien",
                "Efisiensi biaya pembangunan",
                "Visualisasi realistis sebelum pembangunan",
                "Dokumen teknis lengkap",
            ],
        },

        interior: {
            title: "Desain Interior",
            description:
                "Desain interior modern yang menggabungkan estetika, fungsi ruang, dan kenyamanan untuk rumah, kantor, cafe, dan ruang komersial lainnya.",
            features: [
                "Space Planning",
                "Moodboard & Konsep Interior",
                "Pemilihan Material",
                "Custom Furniture Design",
                "Lighting Design",
                "3D Interior Visualization",
            ],
            process: [
                "Diskusi konsep dan kebutuhan ruang",
                "Pembuatan konsep interior",
                "Presentasi desain 3D",
                "Revisi desain",
                "Finalisasi gambar interior",
            ],
            benefits: [
                "Ruang lebih estetis dan nyaman",
                "Pemanfaatan ruang lebih optimal",
                "Desain sesuai karakter klien",
                "Furniture dan material terencana",
            ],
        },
    };

    const service = services[slug as keyof typeof services];

    if (!service) {
        return (
            <div className="py-24 text-center">
                <h1 className="text-3xl font-bold">Layanan Tidak Ditemukan</h1>
            </div>
        );
    }

    return (
        <div className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">

                <Link
                    to="/services"
                    className="text-primary mb-6 inline-block"
                >
                    ← Kembali ke layanan
                </Link>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-5xl font-bold mb-6">
                        {service.title}
                    </h1>

                    <p className="text-lg text-muted-foreground mb-12">
                        {service.description}
                    </p>
                </motion.div>

                {/* Features */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6">
                        Layanan Yang Anda Dapatkan
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {service.features.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-muted p-4 rounded-lg"
                            >
                                <CheckCircle className="text-primary" size={18} />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6">
                        Proses Pengerjaan Perencanaan
                    </h2>

                    <div className="space-y-4">
                        {service.process.map((item, i) => (
                            <div
                                key={i}
                                className="p-4 bg-muted rounded-lg"
                            >
                                {i + 1}. {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6">
                        Keuntungan Menggunakan Layanan Kami
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {service.benefits.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-muted p-4 rounded-lg"
                            >
                                <CheckCircle className="text-primary" size={18} />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <Link
                        to="https://wa.me/6281233555232"
                        className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-accent transition"
                    >
                        Konsultasi Biaya
                    </Link>
                </div>

            </div>
        </div>
    );
}