import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
} from 'lucide-react';

/* TikTok SVG Icon */
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
    fill="currentColor"
    className={className}
  >
    <path d="M168 32c4 24 20 44 40 52v36c-14-2-28-8-40-16v64c0 44-36 80-80 80s-80-36-80-80 36-80 80-80c4 0 8 0 12 1v40c-4-2-8-3-12-3-22 0-40 18-40 40s18 40 40 40 40-18 40-40V32h40z" />
  </svg>
);

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content:
        'Perumahan Villa Bukit Tidar No.404 Blok B1, Merjosari, Kec. Lowokwaru, Kota Malang,\nJawa Timur 65144',
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '+6281233555232',
      link: 'tel:+6281233555232',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'arcanawa@gmail.com',
      link: 'mailto:arcanawa@gmail.com',
    },
    {
      icon: Clock,
      title: 'Jam Kerja',
      content: 'Senin - Jumat: 09:00 - 17:00\nSabtu: 09:00 - 14:00',
    },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/6281233555232',
      color: 'hover:bg-green-500',
    },
    {
      icon: Instagram,
      label: 'Instagram Arsitek',
      href: 'https://www.instagram.com/arcanawa.arsitek/',
      color: 'hover:bg-pink-500',
    },
    {
      icon: Instagram,
      label: 'Instagram Interior',
      href: 'https://www.instagram.com/arcanawa.interior/',
      color: 'hover:bg-pink-500',
    },
    {
      icon: TikTokIcon,
      label: 'TikTok',
      href: 'https://www.tiktok.com/@arcanawa.interior',
      color: 'hover:bg-black',
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary via-accent to-primary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-tw cen mt mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-tw cen mt mx-auto">
            stay with us, create your dreaming space and build your quality lifes.
          </p>
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-tw cen mt text-primary mb-6 text-center">
              Informasi Kontak
            </h2>
            <p className="text-muted-foreground mb-12 text-center font-tw cen mt leading-relaxed">
              Jangan ragu untuk menghubungi kami melalui berbagai channel yang tersedia
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-muted/30 rounded-xl group hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <info.icon
                      className="text-primary group-hover:text-white transition-colors duration-300"
                      size={24}
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>

                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Ikuti Kami
              </h3>

              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Lokasi Kami
            </h2>
            <p className="text-muted-foreground text-lg">
              Kunjungi studio kami untuk diskusi lebih lanjut
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.9708274622107!2d112.58318296745912!3d-7.943716699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883007cf11e23%3A0x73fc1aba17c3764c!2sB1%20404!5e0!3m2!1sid!2sid!4v1774951575765!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arcanawa Location"
            />
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 text-center text-white"
          >
            <MessageCircle size={64} className="mx-auto mb-6" />

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Butuh Respons Cepat?
            </h2>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Hubungi kami langsung melalui WhatsApp untuk konsultasi instan
            </p>

            <motion.a
              href="https://wa.me/6281233555232"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-all duration-300"
            >
              <MessageCircle size={24} />
              <span className="font-semibold">Chat via WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}