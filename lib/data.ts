// ================================================================
// lib/data.ts
// Semua konten perusahaan PT ACS dikumpulkan di sini.
// Ini memudahkan pembaruan konten tanpa harus menyentuh kode komponen.
// ================================================================

export const company = {
  name: "PT Adiguna Cakra Semesta",
  shortName: "PT ACS",
  tagline: "Drilling-Completion Fluids & Cementing Services Company",
  founded: "15 Mei 2004",
  email: "adiguna@acs-indonesia.com",
  phone: "(+62) 21 53160137",
  fax: "(+62) 21 53160139",
  website: "www.acs-indonesia.com",
  address: {
    office:
      "Perkantoran Paris Square Blok B2 No. 38–40, Jl. Letnan Sutopo, Sektor Comm. III, BSD, Tangerang Selatan – Banten 15321",
    warehouse: "Pergudangan Bizhub Blok GG No. 11, Gunung Sindur – Bogor",
    warehouse2:
      "Pergudangan Pantai Indah Dadap, Blok CG No. 11, Jl. Raya Perancis, Kosambi Timur, Tangerang",
  },
};

// Statistik untuk ditampilkan di Hero / About section
export const stats = [
  { value: "20+", label: "Tahun Pengalaman" },
  { value: "28+", label: "Proyek Selesai" },
  { value: "3", label: "Sertifikasi ISO" },
  { value: "45+", label: "Tenaga Ahli" },
];

// Visi & Misi
export const visionMission = {
  vision:
    "PT Adiguna Cakra Semesta sebagai perusahaan jasa minyak dan gas berkomitmen untuk menjadi mitra terpercaya, menyediakan layanan dan kualitas terbaik yang memenuhi standar industri.",
  missions: [
    "Mengembangkan dan menerapkan layanan unggulan yang dapat dipercaya.",
    "Mematuhi dan mengikuti regulasi Perundangan No. 32 Tahun 2009.",
    "Mengevaluasi dan memaksimalkan layanan kepada pelanggan.",
    "Mengembangkan kompetensi sumber daya manusia.",
  ],
};

// Tiga layanan inti perusahaan
export const services = [
  {
    id: "drilling-fluids",
    icon: "Droplets",
    title: "Drilling-Completion Fluids",
    description:
      "Penyediaan mud chemical dan engineering services untuk operasi pengeboran minyak, gas, dan geotermal. Kami merancang sistem fluida pengeboran yang efisien dan sesuai kondisi sumur.",
    features: [
      "Mud Chemical & Services untuk Oil & Gas",
      "Mud Chemical untuk HDD (Horizontal Directional Drilling)",
      "Water Base Mud & Oil Base Mud Design",
      "Real-time Drilling Fluid Monitoring",
    ],
  },
  {
    id: "cementing",
    icon: "Layers",
    title: "Cementing Services",
    description:
      "Layanan sementasi sumur yang komprehensif untuk mendukung integritas sumur jangka panjang. Tim kami berpengalaman dalam penyemenan primer dan remedial.",
    features: [
      "Primary Cementing",
      "Remedial Cementing",
      "Cementing Chemical & Material Supply",
      "Cementing Job Design & Engineering",
    ],
  },
  {
    id: "mud-logging",
    icon: "Activity",
    title: "Drilling Evaluation (Mud Logging)",
    description:
      "Layanan evaluasi pengeboran secara real-time untuk menganalisis formasi dan kondisi sumur. Data akurat untuk pengambilan keputusan yang lebih baik di lapangan.",
    features: [
      "Formation Evaluation",
      "Gas Detection & Analysis",
      "Lithology Identification",
      "Real-time Data Reporting",
    ],
  },
];

// Keunggulan kompetitif (Why ACS?)
export const whyACS = [
  {
    icon: "Globe",
    title: "Global Sourcing",
    description:
      "Tim kami terus mengidentifikasi pemasok dan produsen di seluruh dunia untuk memberikan pilihan produk dengan harga kompetitif.",
  },
  {
    icon: "Star",
    title: "Premium Suppliers",
    description:
      "ACS adalah pemasok kelas atas yang memiliki akses ke berbagai lini produk dari seluruh dunia, memastikan kebutuhan Anda terpenuhi.",
  },
  {
    icon: "Truck",
    title: "Prompt Delivery",
    description:
      "Tim kami berpengalaman dalam pengiriman barang dari seluruh dunia, memberikan jaminan ketepatan waktu untuk setiap pengiriman.",
  },
  {
    icon: "Headphones",
    title: "Technical Support",
    description:
      "Tim spesialis kami memiliki pengetahuan produk dan industri yang mendalam, memberikan solusi hemat biaya untuk setiap pelanggan.",
  },
];

// Sertifikasi ISO
export const certifications = [
  {
    code: "SNI ISO 9001:2015",
    name: "Quality Management System",
    description:
      "Sistem manajemen kualitas yang memastikan konsistensi layanan dan produk kami memenuhi persyaratan pelanggan.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-700",
  },
  {
    code: "SNI ISO 14001:2015",
    name: "Environmental Management System",
    description:
      "Komitmen kami terhadap pengelolaan lingkungan yang bertanggung jawab dalam setiap operasional perusahaan.",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-700",
  },
  {
    code: "SNI ISO 45001:2018",
    name: "Occupational Health & Safety",
    description:
      "Sistem manajemen K3 untuk memastikan keselamatan dan kesehatan kerja seluruh personel di lapangan maupun kantor.",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-700",
  },
];

// Mitra / klien yang pernah bekerja sama
export const clients = [
  "PT Pertamina EP",
  "PT Pertamina Hulu Energi",
  "Kondur Petroleum S.A.",
  "PT PHE Metana Sumatera",
  "EMP Malacca Strait S.A.",
  "EMP Gebang Limited",
  "PT Asia Petrocom Services",
  "Bass Oil Sukananti Limited",
  "TAC Pertamina EP - GWN Kruh",
  "PT IEV Pabuaran KSO",
  "PT Bias Drillindo Utama",
  "PT Semberani Persada Oil",
];

// Riwayat proyek (pengalaman)
export const projects = [
  {
    no: 1,
    company: "Kondur Petroleum S.A.",
    job: "Jasa Penyediaan Mud Chemical",
    location: "Pekanbaru, Riau",
    date: "25 September 2005",
  },
  {
    no: 2,
    company: "Kondur Petroleum S.A.",
    job: "Provisions of Mud Chemical Services",
    location: "Pekanbaru, Riau",
    date: "25 Juni 2006",
  },
  {
    no: 3,
    company: "PT Semberani Persada Oil / Semco",
    job: "Mud Engineering Services For Onshore Drilling",
    location: "Kalimantan Timur",
    date: "4 Juli 2006",
  },
  {
    no: 4,
    company: "PT Pertamina EP Region Sumatera",
    job: "Pengelolaan Lumpur Pemboran Water Base Mud",
    location: "Sumatera Selatan",
    date: "1 Agustus 2008",
  },
  {
    no: 5,
    company: "PT PHE Metana Sumatera 4",
    job: "Jasa Pekerjaan Lumpur Pemboran GMB",
    location: "Sumatera Selatan",
    date: "1 November 2012",
  },
  {
    no: 6,
    company: "PT IEV Pabuaran KSO",
    job: "Drilling Fluids & Mud Logging Services",
    location: "Pabuaran, Subang, Jawa Barat",
    date: "1 Oktober 2013",
  },
  {
    no: 7,
    company: "PT Pertamina Hulu Energi Metana Sumatera 7",
    job: "Jasa Penunjang Pemboran Terintegrasi",
    location: "Lapangan Air Benakat, Sumatera Selatan",
    date: "20 Mei 2014",
  },
  {
    no: 8,
    company: "PT Asia Petrocom Services",
    job: "Perjanjian Jasa Pemboran Minyak dan Bumi Terintegrasi",
    location: "Blok Bengara, Kalimantan Utara",
    date: "4 Mei 2015",
  },
  {
    no: 9,
    company: "TAC Pertamina EP - GWN Kruh",
    job: "Jasa Pemboran Terintegrasi (Penyemenan, Mud Logging, Drilling Fluids)",
    location: "Kruh Pendopo, Sumatera Selatan",
    date: "1 September 2015",
  },
  {
    no: 10,
    company: "EMP Malacca Strait S.A.",
    job: "Drilling Fluids & Cementing Services MSTB-02 Well",
    location: "Kurau, Pulau Padang",
    date: "17 November 2018",
  },
  {
    no: 11,
    company: "EMP Gebang Limited",
    job: "Drilling Fluids & Cementing Services Tj. Darat 01 & 02 Well",
    location: "Tanjung Darat",
    date: "31 Desember 2018",
  },
  {
    no: 12,
    company: "Bass Oil Sukananti Limited",
    job: "Penyediaan Material dan Jasa Lumpur Pemboran",
    location: "Prabumulih, Sumatera Selatan",
    date: "10 September 2019",
  },
  {
    no: 13,
    company: "KSO Pertamina EP – GWN Kruh",
    job: "Jasa Penyediaan Lumpur Pemboran",
    location: "Kab. Pali, Sumatera Selatan",
    date: "1 Juni 2022",
  },
];

// Peralatan laboratorium unggulan
export const labEquipment = [
  "Fann iX 77 (Viscometer Canggih)",
  "Linear Swelling Meter",
  "Particle Size Distribution (0–3000 micron)",
  "Lubricity Tester & Turbidity Tester",
  "Pore Plugging Testing (PPT)",
  "Dynamic Filtration Testing (Fann 90)",
  "HTHP 175 ml dan 500 ml",
  "Shale Dispersion & Barite Sagging Testing",
  "Digital Viscometer (Brookfield)",
  "Automatic Sieve Shaker Complete Set",
  "Mixer 1400 ml (Silverson)",
  "Roller Oven 8 Cell",
  "API Mud Balance (14 set)",
  "Marsh Funnel & Cup (7 set)",
];

// Software yang digunakan
export const software = [
  {
    name: "HydPRO",
    vendor: "Pegasus Vertex, Inc.",
    description: "Simulasi hidrolik pengeboran",
  },
  {
    name: "BridgePRO",
    vendor: "Pegasus Vertex, Inc.",
    description: "Optimasi bridging agent untuk LCM",
  },
  {
    name: "MudPRO+",
    vendor: "Pegasus Vertex, Inc.",
    description: "Desain dan laporan fluida pemboran harian",
  },
];

// Personel yang tersedia di lapangan
export const personnel = [
  { role: "Area Manager", count: 1 },
  { role: "Fluid Engineering Technical Advisor (TA)", count: 2 },
  { role: "Senior Fluid Engineer", count: 16 },
  { role: "Junior Fluid Engineer", count: 10 },
  { role: "Laboratory Technician", count: 2 },
  { role: "HES Officer", count: 2 },
  { role: "Helper (Local)", count: 12 },
];

// Perusahaan sister
export const sisterCompanies = [
  {
    name: "PT Bina Mandiri Services",
    description: "Oil Well Services",
  },
];

// Link navigasi header (smooth scroll ke section di halaman utama)
export const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Sertifikasi", href: "#certifications" },
  { label: "Kontak", href: "#contact" },
];

// Link navigasi sidebar (menuju halaman terpisah)
export const sidebarLinks = [
  { label: "Laboratorium", href: "/laboratory", icon: "FlaskConical" },
  { label: "Klien & Proyek", href: "/clients", icon: "Briefcase" },
  { label: "Karir", href: "/career", icon: "UserCheck" },
  { label: "Kontak", href: "/contact", icon: "Mail" },
];
