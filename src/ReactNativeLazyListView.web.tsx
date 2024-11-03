import * as React from 'react';

import { ReactNativeLazyListViewProps } from './ReactNativeLazyList.types';

export default function ReactNativeLazyListView(props: ReactNativeLazyListViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
