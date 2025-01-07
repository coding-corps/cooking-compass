/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};


import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  // General app background and text color
  appBackground: {
    backgroundColor: '#FFF8E1', // Cream background color for app containers
    flex: 1,
    padding: 20,
  },

  // Primary Button
  primaryButton: {
    backgroundColor: '#F44336', // Tomato Red
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF', // White text for the button
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Secondary Button
  secondaryButton: {
    backgroundColor: '#FFEB3B', // Curry Yellow
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#333333', // Dark Text for secondary buttons
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Container (cards, sections)
  cardContainer: {
    backgroundColor: '#FFFFFF', // White background for card-like containers
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    elevation: 3, // Adds shadow effect for Android
    shadowColor: '#333333', // Shadow color for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  // Text styles
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Charcoal Gray
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    color: '#212121', // Dark Text
    lineHeight: 24,
  },
  subtitleText: {
    fontSize: 18,
    color: '#607D8B', // Slate Blue for subtitles
    fontWeight: '600',
  },

  // Success, Error, and Warning messages
  successMessage: {
    backgroundColor: '#388E3C', // Success Green
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorMessage: {
    backgroundColor: '#D32F2F', // Error Red
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  warningMessage: {
    backgroundColor: '#FF9800', // Warning Amber
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  // Input fields
  inputField: {
    backgroundColor: '#FFFFFF', // White background for input fields
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0', // Light border color
    marginBottom: 15,
  },
  inputText: {
    fontSize: 16,
    color: '#212121', // Dark Text color for inputs
  },

  // Link text styles
  linkText: {
    color: '#FF5722', // Paprika Orange
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 15,
    textAlign: 'center',
  },

  // Header style
  header: {
    backgroundColor: '#FF5722', // Paprika Orange for header
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#FFFFFF', // White text for header
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default globalStyles;
