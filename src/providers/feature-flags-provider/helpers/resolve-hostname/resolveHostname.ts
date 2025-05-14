import type { Env } from '../../../../interfaces';

const resolveHostname = (): Env => {
  const { hostname: windowHostname } = window.location;

  if (windowHostname === 'localhost') return 'localhost';

  const parts = windowHostname?.split('.') || [];

  return (parts[1] as Env) || 'unknown';
};

export default resolveHostname;
