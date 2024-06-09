import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView as MobileWebView } from 'react-native-webview';
import WebWebView from 'react-native-web-webview';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

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
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="dark" translucent={true} backgroundColor="transparent" />
      <WebView
        source={{ uri: 'https://www.clasome.com' }}
        mixedContentMode="always"
        style={styles.webview}
        onLoadEnd={() => setIsWebViewLoaded(true)}
        javaScriptEnabled={true}
        injectedJavaScript={`
          document.body.style.backgroundColor = 'transparent';
          true;
        `}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
