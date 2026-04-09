import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Halaman Tidak Ditemukan</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali ke
          beranda.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300"
        >
          <Home size={20} />
          <span>Kembali ke Beranda</span>
        </Link>
      </motion.div>
    </div>
  );
}
