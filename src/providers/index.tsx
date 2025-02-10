import { type ReactNode } from 'react';

import ReactQueryProviders from '@/providers/react-query-provider';

const Provider = ({ children }: { children: ReactNode }) => {
  return <ReactQueryProviders>{children}</ReactQueryProviders>;
};

export default Provider;
