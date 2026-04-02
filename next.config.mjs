/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mengaktifkan fitur React strict mode untuk mendeteksi masalah lebih awal
  reactStrictMode: true,
  images: {
    // Tambahkan domain eksternal jika nanti menggunakan gambar dari URL luar
    remotePatterns: [],
  },
};

export default nextConfig;
