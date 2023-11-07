import { FC } from 'react';

type MainProps = {
  children: React.ReactNode;
};

const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="mx-auto w-full max-w-3xl grow px-7 pb-9 md:max-w-6xl lg:px-0">{children}</main>
  );
};

export default Main;
