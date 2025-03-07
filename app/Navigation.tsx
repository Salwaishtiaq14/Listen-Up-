import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens from both the root and public folders
import SplashScreen from "./splash";
import HomeScreen from "./home";
import SignInScreen from "./(public)/signin";
import SignupScreen from "./(public)/signup";
import VoiceDetectionScreen from "./(public)/VoiceDetection";
import OnboardingScreen from "./(public)/onboarding";
import SelectDistanceScreen from "./(public)/SelectDistance";
import SelectVoicesScreen from "./(public)/SelectVoices";

// Define your routes and their params (all undefined if none)
export type RootStackParamList = {
    Splash: undefined;
    Home: undefined;
    SignIn: undefined;
    SignUp: undefined;
    Onboarding: undefined;
    SelectDistance: undefined;
    SelectVoices: undefined;
    VoiceDetection: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
                <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: "Sign In" }} />
                <Stack.Screen name="SignUp" component={SignupScreen} options={{ title: "Sign Up" }} />
                <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ title: "Onboarding" }} />
                <Stack.Screen name="SelectDistance" component={SelectDistanceScreen} options={{ title: "Distance" }} />
                <Stack.Screen name="SelectVoices" component={SelectVoicesScreen} options={{ title: "Voices" }} />
                <Stack.Screen name="VoiceDetection" component={VoiceDetectionScreen} options={{ title: "Listen Up!" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
