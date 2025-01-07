import { StyleSheet } from 'react-native';
import { Colors } from './Colors'; // Import the Colors object

// Function to determine which color scheme to use (light or dark mode)
const isDarkMode = true; // This should be dynamic, based on the system theme or user preference

const currentColors = isDarkMode ? Colors.dark : Colors.light;

export const globalStyles = StyleSheet.create({
  // General app background and text color
  appBackground: {
    backgroundColor: currentColors.background, // Dynamically set background color based on theme
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
    color: currentColors.text, // Text color based on the current theme
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
    shadowColor: currentColors.text, // Shadow color dynamically set for light/dark mode
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  // Text styles
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: currentColors.text, // Dynamic text color
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    color: currentColors.text, // Dynamic text color
    lineHeight: 24,
  },
  subtitleText: {
    fontSize: 18,
    color: '#607D8B', // Slate Blue for subtitles
    fontWeight: '600',
  },

  // Success, Error, and Warning messages
  successMessage: {
    backgroundColor: '#4CAF50', // Success Green
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
    color: currentColors.text, // Dark Text color for inputs
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
