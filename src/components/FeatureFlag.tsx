import type { FC } from 'react';

import type { FlagName } from '../interfaces';
import { useFeatureFlagsContext } from '../providers';

import type { FeatureFlagProps } from './interfaces';

/**
 * `FeatureFlag` is a conditional rendering component that checks
 * if a given feature flag is enabled in the current environment.
 *
 * It uses the `useFeatureFlagsContext` hook to retrieve the flag state,
 * and conditionally renders its children or a fallback render method.
 *
 * @typeParam T - The union of valid feature flag names.
 * @param props - Props object containing the feature name, children, and optional render function.
 * @returns A ReactNode based on the feature flag state.
 *
 * @returns A ReactNode based on the feature flag state.
 *
 * @example
 * ```tsx
 * <FeatureFlag
 *   featureName="newOrderUI"
 *   optionalRender={() => <p>This feature is not available</p>}
 * >
 *   <NewOrderUI />
 * </FeatureFlag>
 * ```
 */
const FeatureFlag: FC<FeatureFlagProps<FlagName>> = ({ children, featureName, optionalRender }) => {
  const { getFlagValue } = useFeatureFlagsContext();
  const isFeatureActive = getFlagValue(featureName);

  return isFeatureActive ? children : optionalRender?.();
};

export default FeatureFlag;
