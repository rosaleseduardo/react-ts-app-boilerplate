export interface FeatureFlagProps<T> {
  children: React.ReactElement;
  featureName: T;
  optionalRender?: () => React.ReactNode;
}
