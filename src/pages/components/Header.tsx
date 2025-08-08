import { Mail, MapPin, Phone } from 'lucide-react';
export function Header() {
  return (
    <header className="bg-white border-b-4 border-black">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center border-b-2 border-black pb-4 mb-4">
          <h1 className="text-5xl font-bold font-serif tracking-tight">
            WAI LWIN AUNG
          </h1>
          <p className="text-sm font-mono mt-2">
            EST. 2019 • SENIOR FULL-STACK EDITION • VOL. 6
          </p>
          <div className="flex justify-center items-center gap-4 mt-2 text-xs">
            <span>YANGON, YG</span>
            <span>•</span>
            <span>
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="text-sm">wailwiniaung228@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="text-sm">
              <a href="tel:+959796718690">+95 (9) 796-718-690</a>
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Mayangone Township, YANGON </span>
          </div>
        </div>
      </div>
    </header>
  );
}
