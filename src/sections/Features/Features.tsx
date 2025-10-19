import FeatureCard from "./FeaturesCard"

const Features = () => {
  const featuresData = [
    {
      title: "Smart Task Management",
      desc: "Organize your workflow and boost productivity with an elegant and intuitive interface designed for efficiency.",
      videoSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXEygJRj6SYAiGKZLG2lese2EOV4ORqJWzhg_f2-ofsdBV_wqyfrgl8aL5x_K_WPi7oI&usqp=CAU",
    },
    {
      title: "Real-Time Collaboration",
      desc: "Work seamlessly with your team, share progress, and make updates instantly with real-time sync and notifications.",
      videoSrc:
        "https://cdn.dribbble.com/userupload/45044134/file/8b35d200eccb90f0c748a279c7eda54e.png?format=webp&resize=400x300&vertical=center",
    },
    {
      title: "Data Visualization Dashboard",
      desc: "Get insights at a glance with interactive charts and analytics designed to keep you informed and in control.",
      videoSrc:
        "https://cdn.dribbble.com/userupload/2901619/file/still-ea635d67effd804bd10a35d3e5bf4021.png?format=webp&resize=400x300&vertical=center",
    },
  ]

  return (
    <section className="min-h-[90vh] gap-10 w-full bg-black flex flex-col justify-center items-center py-20 px-6 text-white">
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className="w-full max-w-7xl font-['a'] bg-[#0d0d0d]/70 border border-white/10 rounded-3xl p-12 relative overflow-hidden backdrop-blur-md shadow-[0_0_60px_rgba(255,255,255,0.03)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_70%)]" />

          <div
            className={`flex flex-col lg:flex-row items-center gap-16 relative z-10 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Card Section */}
            <div className="w-full lg:w-1/2 bg-[#141414] border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <FeatureCard
                title={feature.title}
                desc={feature.desc}
                videoSrc={feature.videoSrc}
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <h1 className="text-5xl font-semibold text-white">
                {feature.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                {feature.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Features
