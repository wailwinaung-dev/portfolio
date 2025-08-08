import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Cv from '../../assets/wailwinaung-cv.pdf';

export function Footer() {
  return (
    <footer className="border-t-4 border-black pt-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold font-serif mb-2">
          Ready to Collaborate?
        </h3>
        <p className="text-gray-600 mb-4">
          Available for full-time positions, consulting, or freelance projects
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="mailto:wailwiniaung228@gmail">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={Cv} download={true}>
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
        <p>
          © 2024 The Developer Times. All rights reserved. • Designed &
          Developed by Alex Thompson
        </p>
      </div>
    </footer>
  );
}
