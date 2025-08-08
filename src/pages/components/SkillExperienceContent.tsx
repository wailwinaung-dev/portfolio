import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
export function SkillExperienceContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <section>
        <div className="border-b-2 border-black pb-2 mb-6">
          <h2 className="text-2xl font-bold font-serif">TECHNICAL EXPERTISE</h2>
          <p className="text-sm text-gray-600 mt-1">
            Comprehensive skill assessment
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold font-serif mb-2 text-lg">
              Frontend Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                React
              </Badge>
              <Badge className="bg-green-100 text-green-800 border-green-300">
                React Native
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                TypeScript
              </Badge>
              <Badge className="bg-indigo-100 text-indigo-800 border-indigo-300">
                Tailwind CSS
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-bold font-serif mb-2 text-lg">
              Backend Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-green-100 text-green-800 border-green-300">
                NestJs
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                ExpressJs
              </Badge>
              <Badge className="bg-red-100 text-red-800 border-red-300">
                CakePHP
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                Redis
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-bold font-serif mb-2 text-lg">Database</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                PostgreSQL
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                MySQL
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                MongoDB
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-bold font-serif mb-2 text-lg">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                Docker
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                Git
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                Linux
              </Badge>
              <Badge className="bg-green-100 text-green-800 border-green-300">
                Firebase ( FCM )
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-bold font-serif mb-2 text-lg">Others</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                RESTful APIs
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                Responsive Design
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                Third Party Integrations
              </Badge>
              <Badge className="bg-green-100 text-green-800 border-green-300">
                Node-red
              </Badge>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-black pb-2 mb-6 mt-12">
          <h2 className="text-2xl font-bold font-serif">EDUCATION</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold font-serif mb-2 text-lg">
              Computer University, Monywa — B.C.Sc
            </h3>
            <p className="text-sm text-gray-600">
              Bachelor of Computer Science, 2017
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="border-b-2 border-black pb-2 mb-6">
          <h2 className="text-2xl font-bold font-serif">CAREER HIGHLIGHTS</h2>
          <p className="text-sm text-gray-600 mt-1">Professional timeline</p>
        </div>

        <div className="space-y-6">
          <div className="border-l-4 border-black pl-4">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-mono">October 2024 - PRESENT</span>
            </div>
            <h3 className="font-bold font-serif text-lg">
              Senior Javascript Developer
            </h3>
            <p className="text-sm text-gray-600 mb-2">Mahar Bawga Finance</p>
            <p className="text-sm leading-relaxed">
              Lead development of a Currency Exchange System.
            </p>
          </div>

          <div className="border-l-4 border-gray-400 pl-4">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-mono">
                March 2023 - October 2024
              </span>
            </div>
            <h3 className="font-bold font-serif text-lg">
              Senior Backend Developer
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Young Investment Group Co., Ltd
            </p>
            <p className="text-sm leading-relaxed">
              Developing and maintaining an E-Wallet system.
            </p>
          </div>

          <div className="border-l-4 border-gray-400 pl-4">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-mono">
                July 2022 - January 2023
              </span>
            </div>
            <h3 className="font-bold font-serif text-lg">Senior Engineer</h3>
            <p className="text-sm text-gray-600 mb-2">
              Brycen Myanmar Co., Ltd
            </p>
            <p className="text-sm leading-relaxed">
              - Bug fixing and implementing new features for an ERP system.
              Providing technical guidance to junior developers. Collaborating
              with cross-functional teams.
            </p>
          </div>

          <div className="border-l-4 border-gray-400 pl-4">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-mono">May 2020 - July 2022</span>
            </div>
            <h3 className="font-bold font-serif text-lg">
              Full Stack Developer
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Sabahna Corporate Digital Solutions
            </p>
            <p className="text-sm leading-relaxed">
              Developed and deployed projects. Maintained web applications.
              Implemented new features and bug fixes.
            </p>
          </div>

          <div className="border-l-4 border-gray-400 pl-4">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-mono">
                December 2019 - May 2020
              </span>
            </div>
            <h3 className="font-bold font-serif text-lg">
              Junior Web Developer
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Sabahna Corporate Digital Solutions
            </p>
            <p className="text-sm leading-relaxed">
              Developed and deployed projects. Maintained web applications.
              Implemented new features and bug fixes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
