import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeLazyList.web.ts
// and on native platforms to ReactNativeLazyList.ts
import ReactNativeLazyListModule from './ReactNativeLazyListModule';
import ReactNativeLazyListView from './ReactNativeLazyListView';
import { ChangeEventPayload, ReactNativeLazyListViewProps } from './ReactNativeLazyList.types';

// Get the native constant value.
export const PI = ReactNativeLazyListModule.PI;

export function hello(): string {
  return ReactNativeLazyListModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeLazyListModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeLazyListModule ?? NativeModulesProxy.ReactNativeLazyList);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeLazyListView, ReactNativeLazyListViewProps, ChangeEventPayload };
