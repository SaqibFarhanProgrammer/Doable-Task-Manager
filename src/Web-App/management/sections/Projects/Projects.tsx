import Projects_card from "@/components/Projects_card";

function Projects() {
  return (
    <div className="px-12 flex flex-col gap-5 py-6">
      <h1 className="text-3xl normal mb-3 tracking-tight">Projects</h1>

      <Projects_card />
      <Projects_card />
    </div>
  );
}

export default Projects;
