import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView as MobileWebView } from 'react-native-webview';
import WebWebView from 'react-native-web-webview';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const WebView = Platform.select({
  web: WebWebView,
  default: MobileWebView,
});

export default function App() {
  const [isWebViewLoaded, setIsWebViewLoaded] = useState(false);

  useEffect(() => {
    if (isWebViewLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isWebViewLoaded]);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.clasome.com' }}
        style={{ flex: 1}}
        onLoadEnd={() => setIsWebViewLoaded(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
