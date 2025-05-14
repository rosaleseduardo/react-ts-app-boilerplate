import type { FC, ReactElement } from 'react';

import { FEATURE_FLAGS_BY_ENV } from '../../constants';
import type { FlagName } from '../../interfaces';

import { FeatureFlagsContext } from './context';
import { resolveHostname } from './helpers';

const FeatureFlagsProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const environment = resolveHostname();

  const getFlagValue = (flagName: FlagName) => {
    if (environment === 'unknown') return false;

    return FEATURE_FLAGS_BY_ENV?.[flagName]?.[environment] ?? false;
  };

  return <FeatureFlagsContext.Provider value={{ getFlagValue }}>{children}</FeatureFlagsContext.Provider>;
};

export default FeatureFlagsProvider;
