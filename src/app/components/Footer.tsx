import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

/* TikTok Icon */
const TikTokIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
    fill="currentColor"
  >
    <path d="M168 32c4 24 20 44 40 52v36c-14-2-28-8-40-16v64c0 44-36 80-80 80s-80-36-80-80 36-80 80-80c4 0 8 0 12 1v40c-4-2-8-3-12-3-22 0-40 18-40 40s18 40 40 40 40-18 40-40V32h40z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    layanan: [
      { label: 'Desain Arsitektur', path: '/services/arsitektur' },
      { label: 'Desain Interior', path: '/services/interior' },
      { label: 'Konsultasi', path: '/services/konsultasi' },
    ],
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/arcanawa.arsitek/',
      label: 'Instagram',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/arcanawa.interior/',
      label: 'Instagram Interior',
    },
    {
      icon: TikTokIcon,
      href: 'https://www.tiktok.com/@arcanawa.interior',
      label: 'TikTok',
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif mb-4">ARCANAWA</h2>

            <p className="text-white/80 mb-6 leading-relaxed max-w-sm">
              Arcanawa adalah studio desain dan konstruksi yang berbasis di
              Malang, Jawa Timur, Indonesia.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Service Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>

            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-white/80 leading-relaxed">
                  Villa Bukit Tidar B1 No.404, Merjosari,
                  Lowokwaru, Malang, Jawa Timur 65144
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={20} />
                <a
                  href="tel:+6281233555232"
                  className="text-white/80 hover:text-white"
                >
                  +62 812-3355-5232
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={20} />
                <a
                  href="mailto:arcanawa@gmail.com"
                  className="text-white/80 hover:text-white"
                >
                  arcanawa@gmail.com
                </a>
              </li>

            </ul>
          </motion.div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60 text-sm">
          © {currentYear} Arcanawa Architecture Studio. All rights reserved.
        </div>

      </div>
    </footer>
  );
}