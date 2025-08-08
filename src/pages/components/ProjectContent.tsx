import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { projects, type ProjectType } from '@/constants/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function ProjectContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const openProjectModal = (project: ProjectType) => {
    console.log('Opening project modal for:', project);
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };
  return (
    <section className="mb-12">
      <div className="border-b-2 border-black pb-2 mb-6">
        <h2 className="text-3xl font-bold font-serif">FEATURED PROJECTS</h2>
        <p className="text-sm text-gray-600 mt-1">
          Latest developments in the portfolio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="border-0 border-gray-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="font-serif text-lg">
                    {project.title}
                  </CardTitle>
                </div>
                <div className="flex flex-col gap-1">
                  <Badge variant="secondary" className="text-xs">
                    {project.type}
                  </Badge>
                </div>
              </div>
              <CardDescription className="text-xs uppercase tracking-wide font-mono">
                {project.company}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ProjectModal
                project={project}
                openProjectModal={openProjectModal}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
                nextImage={nextImage}
                prevImage={prevImage}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

type ProjectModalProps = {
  project: ProjectType;
  openProjectModal: (project: ProjectType) => void;
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  nextImage: () => void;
  prevImage: () => void;
};
function ProjectModal({
  project,
  openProjectModal,
  currentImageIndex,
  setCurrentImageIndex,
  nextImage,
  prevImage
}: ProjectModalProps) {
  return (
    <div className="flex gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="sm"
            variant="default"
            className="text-xs"
            onClick={() => openProjectModal(project!)}
          >
            View Details
          </Button>
        </DialogTrigger>

        <DialogContent className="!max-w-none !max-h-none !w-screen !h-screen !p-0 !m-0 !rounded-none">
          <DialogHeader className="p-6 pb-0 relative">
            <DialogTitle className="font-serif text-2xl pr-8">
              {project?.title}
            </DialogTitle>
          </DialogHeader>
          {project && (
            <div className="flex h-[calc(100vh-80px)]">
              {/* Left side - Image Slideshow (Full Width) */}
              <div className="flex-1 flex flex-col p-6 pt-0">
                {/* Main Image */}
                <div className="relative flex-1">
                  <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={
                        project.images[currentImageIndex] || '/placeholder.svg'
                      }
                      alt={`${project.title} screenshot ${
                        currentImageIndex + 1
                      }`}
                      // className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded text-sm font-mono">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </div>

                {/* Image Thumbnails */}
                {/* <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                  {project.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-14 rounded overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? 'border-black shadow-lg'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <img
                        src={image || '/placeholder.svg'}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div> */}
              </div>

              {/* Right side - Project Information */}
              <div className="w-96 border-l-2 border-gray-200 p-6 overflow-y-auto bg-gray-50">
                <div className="space-y-6">
                  {/* Project Type and Category */}
                  <div className="flex flex-col gap-2">
                    <Badge
                      variant="secondary"
                      className="w-fit font-mono text-xs"
                    >
                      {project.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="w-fit text-xs capitalize"
                    >
                      {project.company} PROJECT
                    </Badge>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="font-bold font-serif text-lg mb-3 border-b border-gray-300 pb-1">
                      Project Overview
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-700">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-bold font-serif text-lg mb-3 border-b border-gray-300 pb-1">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                        {project.teamSize}
                      </Badge>
                      {project.technologies.map((tech: string) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div>
                    <h4 className="font-bold font-serif text-lg mb-3 border-b border-gray-300 pb-1">
                      Project Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-semibold">Status:</span>
                        <span className="text-green-600">Completed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Duration:</span>
                        <span>3-6 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Team Size:</span>
                        <span>4-8 members</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Role:</span>
                        <span>Lead Developer</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-bold font-serif text-lg mb-3 border-b border-gray-300 pb-1">
                      Key Features
                    </h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                        <span>Responsive design for all devices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                        <span>Real-time data synchronization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                        <span>Advanced security implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                        <span>Scalable architecture</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
