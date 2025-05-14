import type { FEATURE_FLAGS_BY_ENV } from '../constants';

export type FlagName = keyof typeof FEATURE_FLAGS_BY_ENV;
