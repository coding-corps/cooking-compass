import { Link, Stack } from 'expo-router';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from '@/components/ThemedText';
import React, { useState, useEffect } from 'react';
import { BlurView } from 'expo-blur'; // Import the BlurView component

export default function NotFoundScreen() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Only run image prefetch in the browser environment
    if (typeof window !== 'undefined') {
      Image.prefetch(require('@/assets/images/oops.png')).then(() => setImageLoaded(true));
    }
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      
      <ImageBackground
        source={require('@/assets/images/oops.png')}
        style={styles.background}
        resizeMode="contain"
        onLoadEnd={() => setImageLoaded(true)} // Set the state when the image is loaded
      >
        {!imageLoaded && (
          <BlurView intensity={50} style={styles.backgroundBlur}> {/* Lower intensity for placeholder */}
            <ThemedView style={styles.container}>
              <ThemedText type="title">This screen doesn't exist.</ThemedText>
              <Link href="/" style={styles.link}>
                <ThemedText type="link">Go to home screen!</ThemedText>
              </Link>
            </ThemedView>
          </BlurView>
        )}

        {imageLoaded && (
          <BlurView intensity={10} style={styles.backgroundBlur}> {/* Higher intensity after image is loaded */}
            <ThemedView style={styles.container}>
              <ThemedText type="title">This screen doesn't exist.</ThemedText>
              <Link href="/home" style={styles.link}>
                <ThemedText type="link">Go to home screen!</ThemedText>
              </Link>
            </ThemedView>
          </BlurView>
        )}
      </ImageBackground>
    </>
  );
}

import { Dimensions } from 'react-native';
import { globalStyles } from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    height: height,
    backgroundColor: globalStyles.appBackground.backgroundColor, // 50% opacity white background

    width: width,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // 50% opacity white background
    borderRadius: 20, // Rounded corners
    padding: 20, // Add padding to ensure content inside the container isn't too close to the edges
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
