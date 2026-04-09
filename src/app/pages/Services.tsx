import { motion } from 'motion/react';
import {
  Home,
  Palette,
  PenTool,
  Phone,
  FileText,
  Users,
  HardHat,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router';

export default function Services() {

  const services = [
    {
      slug: "arsitektur",
      icon: Home,
      title: "Desain Arsitektur",
      description:
        "Layanan desain arsitektur lengkap mulai dari konsep hingga gambar kerja profesional.",
      features: [
        "Site Analysis",
        "Konsep Desain",
        "Gambar Kerja Detail",
        "3D Visualization",
        "Bill of Quantity",
      ],
    },
    {
      slug: "interior",
      icon: Palette,
      title: "Desain Interior",
      description:
        "Desain interior modern yang menggabungkan estetika, fungsi ruang, dan kenyamanan.",
      features: [
        "Space Planning",
        "Material Selection",
        "Custom Furniture",
        "Lighting Design",
        "Color Consultation",
      ],
    },
  ];

  const process = [
    {
      icon: Phone,
      title: "Hubungi Kami",
      description:
        "Hubungi kami via whatshapp dan konsultasikan kebutuhan Anda.",
    },
    {
      icon: FileText,
      title: "Proposal / Penawaran",
      description:
        "Tim kami akan mengajukan penawaran harga atau biaya perencanaan ataupun pelaksanaan.",
    },
    {
      icon: Users,
      title: "Konsultasi Lanjutan",
      description:
        "Setelah proposal disetujui, dilakukan meeting dengan Anda untuk memahami kebutuhan, budget, dan timeline yang Anda inginkan.",
    },
    {
      icon: HardHat,
      title: "Proses Perencanaan / Pelaksanaan",
      description:
        "Dari hasil meeting tim ARCANAWA akan memulai proses perencanaan ataupun pelaksanaan sesuai hasil diskusi.",
    },
    {
      icon: CheckCircle,
      title: "Penyerahan Hasil",
      description:
        "Setelah proses perencanaan selesai kami akan mengirimkan hasil atau melakukan serah terima untuk proyek pelaksanaan.",
    },
  ];

  return (
    <div className="bg-white">

      {/* Header */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Services Us
          </h1>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Pilih layanan arsitektur yang Anda butuhkan untuk mewujudkan proyek impian Anda.
          </p>

        </div>
      </section>


      {/* Services */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (

                <Link
                  key={index}
                  to={`/services/${service.slug}`}
                  className="group"
                >

                  <motion.div
                    whileHover={{ y: -8 }}
                    className="h-full flex flex-col justify-between bg-muted/30 p-10 rounded-2xl border hover:shadow-xl transition"
                  >

                    <div>

                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                        <Icon className="text-white" size={30} />
                      </div>

                      <h3 className="text-2xl font-bold mb-3">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle size={16} className="text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                    </div>


                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <span>Lihat Detail</span>
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>

                  </motion.div>

                </Link>

              );

            })}

          </div>

        </div>
      </section>


      {/* Process */}
      <section className="py-24 bg-primary text-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proses Kerja Kami
            </h2>

            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Pendekatan sistematis untuk memastikan kesuksesan proyek Anda
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

            {process.map((step, index) => {

              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center flex flex-col items-center h-full"
                >

                  {/* Icon */}
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={34} />
                  </div>

                  {/* Step Number */}
                  <div className="text-4xl font-bold text-white/20 mb-3">
                    0{index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm leading-relaxed">
                    {step.description}
                  </p>

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>

    </div>
  );
}