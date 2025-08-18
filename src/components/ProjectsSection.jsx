import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Stop-Watch",
    description: "Start, Pause, and Reset functionalities, Real-time time tracking with millisecond precision, Clean and minimal UI, Fully responsive design for mobile and desktop.",
    image: "public/projects/Screenshot 2025-07-27 224305.png",
    tags: ["  HTML", "CSS", "JavaScript"],
    demoUrl: "https://mdasif483.github.io/stopWatch/",
    githubUrl: "https://github.com/Mdasif483",
  },
  {
    id: 2,
    title: "Fetch User GitHub Data",
    description:
      "Search any GitHub user by username, Live data fetching using GitHub REST API, Displays profile info: name, bio, avatar, location, repo count, followers, etc..",
    image: "public/projects/Screenshot 2025-07-27 224938.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://mdasif483.github.io/gitData/",
    githubUrl: "https://github.com/Mdasif483/gitData",
  },
  {
    id: 3,
    title: "Play With Us Game",
    description:
      "Auto-generated math questions using random numbers, Instant feedback on right or wrong answers, Works smoothly on phones, tablets, and desktops.",
    image: "public/projects/Screenshot 2025-07-27 225254.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://mdasif483.github.io/game-/",
    githubUrl: "https://github.com/Mdasif483/game-",
  },
  {
    id: 4,
    title: "Digital Wallet ",
    description:
      "Add money to your digital wallet, Works smoothly on phones, Real-time balance update, Withdraw money with validation (no negative balance), tablets, and desktops.",
    image: "public/projects/Screenshot 2025-07-29 222358.png",
    tags: ["REACT", "Tailwindcss", "Git & GitHub"],
    demoUrl: "https://localstorageproject1.netlify.app/",
    githubUrl: "https://github.com/Mdasif483/localStorageProject",
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description:
      "This is a modern and responsive portfolio website built using React.js, It follows a component-based structure for better code reusability and performance.",
    image: "public/projects/Screenshot 2025-07-29 224650.png",
    tags: ["REACT", "Tailwindcss", "Git & GitHub"],
    demoUrl: "https://react-project-8745.netlify.app/",
    githubUrl: "https://github.com/Mdasif483/reactsample",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Mdasif483"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
