import { Separator } from '@/components/ui/separator';
import { MainStoryContent } from './MainStoryContent';
import { ProjectContent } from './ProjectContent';
import { Footer } from './Footer';
import { SkillExperienceContent } from './SkillExperienceContent';

export function MainContent() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Story */}
      <MainStoryContent />

      <Separator className="my-8 border-black" />

      {/* Featured Projects Section */}
      <ProjectContent />

      <Separator className="my-8 border-black" />

      {/* Skills & Experience Section */}
      <SkillExperienceContent />

      {/* Footer */}
      <Footer />
    </main>
  );
}
