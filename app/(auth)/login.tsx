import React, { useState } from "react";
import { View,ScrollView, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import SocialLoginButtons from "@/components/SocialLoginButtons";
import { RFValue } from "react-native-responsive-fontsize";

export default function SignInScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSignIn = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter both email and password.");
            return;
        }

        console.log(`Email: ${email}, Password: ${password}`);
        Alert.alert("Sign-in", `Email: ${email}, Password: ${password}`);
       router.push("home")

    };

    const handleSocialLogin = (platform) => {
        console.log(`Authenticated via ${platform}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>Cooking Compass Login</Text>

            {/* Email/Username Input */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email or Username"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    style={styles.input}
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.passwordToggle}
                    onPress={() => setShowPassword((prev) => !prev)}
                >
                    <Ionicons
                        name={showPassword ? "eye-off" : "eye"}
                        size={24}
                        color="gray"
                    />
                </TouchableOpacity>


            </View>

            {/* Sign In Button */}
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Go to Register Button */}
            <TouchableOpacity
                style={[styles.button, styles.secondaryButton]}
                onPress={() => router.push("register")}
            >
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>Go to Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.inputContainer}>
                <Text  style={styles.text}>or</Text>
                <SocialLoginButtons action="Sign In"   onLogin={handleSocialLogin} />;
            </View>
           
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        backgroundColor: "#f9f9f9",
    },
    title: {
        fontSize: RFValue(24),
        fontWeight: "bold",
        marginBottom: 32,
        color: "#333",
    },
    text: {
        textAlign: 'center', // Centers the text content itself
      },
    inputContainer: {
        width: "80%",
        marginBottom: 16,
        position: "relative",
    },
    input: {
        width: "100%",
        padding: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#fff",
    },
    passwordToggle: {
        position: "absolute",
        right: 12,
        top: 12,
    },
    button: {
        width: "80%",
        padding: 16,
        backgroundColor: "#4CAF50",
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 8,
    },
    buttonText: {
        fontSize: RFValue(12),
        color: "#fff",
        fontWeight: "600",
    },
    secondaryButton: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#4CAF50",
    },
    secondaryButtonText: {
        color: "#4CAF50",
    },
});
