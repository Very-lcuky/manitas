// WebApp.tsx
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebApp() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://raw.githack.com/Very-lcuky/manitas/main/public/index.html'
        }}
        style={{ flex: 1 }}
        originWhitelist={['*']}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 25 : 0, // evita notch en Android
  },
});
