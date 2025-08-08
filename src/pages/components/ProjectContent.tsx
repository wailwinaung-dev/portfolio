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
          <DialogHeader className="p-4 sm:p-6 pb-0 relative">
            <DialogTitle className="font-serif text-xl sm:text-2xl pr-8">
              {project?.title}
            </DialogTitle>
          </DialogHeader>
          {project && (
            <div className="flex flex-col lg:flex-row h-[calc(100vh-60px)] sm:h-[calc(100vh-80px)]">
              {/* Image Slideshow Section */}
              <div className="flex-1 flex flex-col p-4 sm:p-6 pt-0 min-h-0">
                {/* Main Image */}
                <div className="relative flex-1 min-h-[300px] sm:min-h-[400px]">
                  <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={
                        project.images[currentImageIndex] ||
                        '/placeholder.svg?height=600&width=800&query=project screenshot'
                      }
                      alt={`${project.title} screenshot ${
                        currentImageIndex + 1
                      }`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-colors touch-manipulation"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-colors touch-manipulation"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm font-mono">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </div>

                {/* Image Thumbnails - Hidden on mobile, shown on larger screens */}
                <div className="hidden sm:flex gap-3 mt-4 overflow-x-auto pb-2">
                  {project.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? 'border-black shadow-lg'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <img
                        src={
                          image ||
                          '/placeholder.svg?height=56&width=80&query=thumbnail'
                        }
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Information Section */}
              <div className="w-full lg:w-96 xl:w-[28rem] border-t-2 lg:border-t-0 lg:border-l-2 border-gray-200 p-4 sm:p-6 overflow-y-auto bg-gray-50 max-h-[50vh] lg:max-h-none">
                <div className="space-y-4 sm:space-y-6">
                  {/* Project Type and Category */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
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
                    <h4 className="font-bold font-serif text-base sm:text-lg mb-2 sm:mb-3 border-b border-gray-300 pb-1">
                      Project Overview
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-700">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-bold font-serif text-base sm:text-lg mb-2 sm:mb-3 border-b border-gray-300 pb-1">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-300 text-xs">
                        {project.teamSize}
                      </Badge>
                      {project.technologies.map((tech: string) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {/* Team Size */}
                  <div>
                    <h4 className="font-bold font-serif text-base sm:text-lg mb-2 sm:mb-3 border-b border-gray-300 pb-1">
                      Team Size
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-700">
                      {project.teamSize}{' '}
                      {project.teamSize > 1 ? 'Members' : 'Member'}
                    </p>
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

export default ProjectModal;
