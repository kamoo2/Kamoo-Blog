import { SiGithub, SiGmail } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(2,23,51,0.1)] px-2 py-8">
      <div className="mx-auto w-full max-w-3xl md:max-w-6xl">
        <div className="flex justify-end gap-2 text-sm text-slate-800">
          <SiGmail />
          <SiGithub />
        </div>
        <p className="mt-1 text-end text-xs text-slate-800">
          © 2023 kamoo blog Powered by Next.js, Github Pages
        </p>
      </div>
    </footer>
  );
}
