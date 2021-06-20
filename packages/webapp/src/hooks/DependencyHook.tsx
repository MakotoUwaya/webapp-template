import React, { FC, createContext, useContext } from 'react';

import type { Services } from '../services/SetupDependencies';

const DependencyContext = createContext<Services | null>(null);

type DependencyProviderProps = {
  services: Services | null;
};

export function useDependency<K extends keyof Services>(key: K): Services[K] {
  const services = useContext(DependencyContext);
  if (services === null) {
    throw new Error('Not found dependency');
  }
  return services[key];
}

export const DependencyProvider: FC<DependencyProviderProps> = props => {
  return (
    <DependencyContext.Provider value={props.services}>
      {props.children}
    </DependencyContext.Provider>
  );
};
