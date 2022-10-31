import React, { Fragment, ComponentType } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
export const HOCProvider = (WrappedComponent: ComponentType<any>) => {
  const ProviderComponent = (props: any) => {
    return (
      <Fragment>
        <Provider store={store}>
          <WrappedComponent {...props} />
        </Provider>
      </Fragment>
    );
  };

  return ProviderComponent;
};
