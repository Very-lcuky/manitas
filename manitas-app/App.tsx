import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Ajuste para que la WebView ocupe toda la pantalla */}
      <WebView
        source={{ uri: 'https://very-lcuky.github.io/manitas/' }} // <- Tu URL de GitHub Pages
        style={{ flex: 1 }}
        startInLoadingState={true} // Muestra un loader mientras carga
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Evita que la WebView quede bajo la barra de estado en Android
  },
});

