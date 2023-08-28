import { SiGithub, SiGmail } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="border-t border-t-slate-300 px-2 py-8">
      <div className="flex justify-end gap-2 text-sm text-slate-800">
        <SiGmail />
        <SiGithub />
      </div>
      <p className="mt-1 text-end text-xs text-slate-800">
        © 2023 kamoo blog Powered by Next.js, Github Pages
      </p>
    </footer>
  );
}
