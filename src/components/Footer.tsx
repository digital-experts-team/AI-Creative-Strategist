import { Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Tibin Jacob — D2C Growth Expert. All rights
          reserved.
          <a href="/case-studies/" className="mt-2 block w-fit text-xs text-zinc-500 underline-offset-4 hover:underline focus-visible:underline">
            Case studies
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-zinc-400 hover:text-indigo-600 transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/tibinjacob"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-indigo-600 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-indigo-600 transition-colors"
          >
            <span className="sr-only">YouTube</span>
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
