import { SiGithub, SiGmail } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="border-primary border-t px-2 py-8">
      <div className="mx-auto w-full max-w-3xl md:max-w-6xl">
        <div className="text-primary flex justify-end gap-2 text-sm">
          <SiGmail />
          <SiGithub />
        </div>
        <p className="text-primary mt-1 text-end text-xs text-slate-800">
          © 2023 kamoo blog Powered by Next.js, Github Pages
        </p>
      </div>
    </footer>
  );
}
