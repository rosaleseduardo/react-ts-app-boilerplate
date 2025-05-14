import { createContext, useContext } from 'react';

import type { FlagName } from '../../interfaces';

export const FeatureFlagsContext = createContext({} as { getFlagValue: (flagName: FlagName) => boolean });

export const useFeatureFlagsContext = () => useContext(FeatureFlagsContext);
