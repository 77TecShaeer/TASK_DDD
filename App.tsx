/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import RootNavigtion from './src/navigation';
import { I18nManager } from 'react-native';

function App(): JSX.Element {
  useEffect(() => {
    I18nManager.forceRTL(true);
  }, [])
  return <RootNavigtion />;
}

export default App;
