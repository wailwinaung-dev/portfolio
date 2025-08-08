import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin } from 'lucide-react';

export function MainStoryContent() {
  return (
    <section className="mb-12">
      <div className="border-b-2 border-black pb-2 mb-6">
        <h2 className="text-4xl font-bold font-serif leading-tight">
          Senior Developer Revolutionizes Digital Landscape with Full-Stack
          Expertise
        </h2>
        <p className="text-lg text-gray-600 mt-2 font-serif italic">
          Breaking: Local developer transforms complex business requirements
          into scalable solutions
        </p>
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
          <span>By Wai Lwin Aung</span>
          <span>•</span>
          <span>Senior Full-Stack Developer</span>
          <span>•</span>
          <span>5+ Years Experience</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="text-lg leading-relaxed font-serif space-y-4">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              Specializing in modern web technologies, this seasoned developer
              has consistently delivered enterprise-grade applications tailored
              to business-critical needs. With expertise spanning TypeScript,
              React, Node.js, PHP, and scalable backend systems, they are the
              go-to professional for solving complex technical challenges.
            </p>
            <p>
              From building intuitive interfaces to developing scalable backend
              systems, this developer’s full-stack expertise ensures smooth
              end-to-end integration. With a strong focus on code quality,
              usability, and maintainability, they’ve become a reliable
              contributor to digital projects that demand stability and agility.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Card className="border-0 border-gray-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-serif">Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold">Experience:</span>
                <span>5+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Projects:</span>
                <span>8+</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Team Size:</span>
                <span>Up to 12 Members</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Availability:</span>
                <span className="text-green-600">Open to Work</span>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-2">
            <div className="flex justify-center gap-2">
              <Button size="sm" variant="outline" asChild>
                <a
                  href="https://github.com/wailwinaung-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/wai-lwin-aung-b1846025a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
