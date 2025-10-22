import Projects_card from "@/components/Projects_card"

function Projects() {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-6 flex flex-col gap-6">
      <h1 className="text-2xl sm:text-3xl font-normal mb-2 tracking-tight">
        Projects
      </h1>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Projects_card />
        <Projects_card />
        <Projects_card />
      </div>
    </div>
  )
}

export default Projects
