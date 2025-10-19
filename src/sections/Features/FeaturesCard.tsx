
function FeatureCard() {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ffffff] to-[#f1f1f1] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
      {/* Video Background */}
      <video
        src="https://cdn.dribbble.com/userupload/43095420/file/original-f792719d0519f45a3a026249f6922c53.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-500"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-[380px] p-8 text-white text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-white/90 transition-colors">
          Smart Task Management
        </h2>
        <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
          Organize your workflow and boost your productivity with a minimal, focused and beautifully designed dashboard.
        </p>

        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </div>
  )
}

export default FeatureCard
