import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeLazyListViewProps } from './ReactNativeLazyList.types';

const NativeView: React.ComponentType<ReactNativeLazyListViewProps> =
  requireNativeViewManager('ReactNativeLazyList');

export default function ReactNativeLazyListView(props: ReactNativeLazyListViewProps) {
  return <NativeView {...props} />;
}
