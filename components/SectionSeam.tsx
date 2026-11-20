// Garis batas antar-section — seam tipis beraksen merah dengan efek glow lembut.
// Ditempatkan di antara section (bukan di dalamnya) agar tidak mengganggu
// stacking/overflow milik masing-masing section.
export default function SectionSeam() {
  return (
    <div className="relative h-px z-10" aria-hidden="true">
      {/* Halo lebar — glow lembut yang menyebar ke section atas & bawah */}
      <div className="absolute inset-x-0 -top-6 h-12 bg-gradient-to-r from-transparent via-[#c41e1e]/25 to-transparent blur-2xl" />
      {/* Garis buram — memberi efek "lit up" di sekitar garis inti */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c41e1e]/70 to-transparent blur-sm" />
      {/* Garis inti — tajam, jadi batas yang sebenarnya terlihat */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e83333] to-transparent" />
    </div>
  );
}
