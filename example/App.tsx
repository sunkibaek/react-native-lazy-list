import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeLazyList from 'react-native-lazy-list';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeLazyList.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
