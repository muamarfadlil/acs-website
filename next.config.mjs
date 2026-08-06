/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mengaktifkan fitur React strict mode untuk mendeteksi masalah lebih awal
  reactStrictMode: true,
  images: {
    // Tambahkan domain eksternal jika nanti menggunakan gambar dari URL luar
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        // URL lama halaman HSE & P2K3 (sebelumnya "/csr-k3")
        source: "/csr-k3",
        destination: "/hse-p2k3",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
