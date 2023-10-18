import React, { useCallback, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';
// import { useFonts } from 'expo-font';
import tw from 'twrnc';
import * as SplashScreen from 'expo-splash-screen';

import { LinearGradient } from 'expo-linear-gradient';
import WebView from 'react-native-webview';
import { Link } from 'expo-router';
import { HomeScreen } from './srccop/screens/home';

SplashScreen.preventAutoHideAsync();

const navIcons = [
    require('./public/imgs/security.png'),
    require('./public/imgs/crypto.png'),
    require('./public/imgs/help.png'),
];

export default function App() {
    const [activeMenuItem, setActiveMenuItem] = useState(2);
    // const [fontsLoaded, fontError] = useFonts({
    //     InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    // });
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#000' : '#fff',
    };

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded || fontError) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded, fontError]);

    // if (!fontsLoaded && !fontError) {
    //     return null;
    // }

    const menuItems = navIcons.map((icon, key) => {
        const isActive = key == activeMenuItem;
        return (
            <View
                key={key}
                style={tw.style('relative')}
                onTouchEnd={() => setActiveMenuItem(key)}
            >
                {isActive && (
                    <LinearGradient
                        colors={['#50FB00', '#2C8A00']}
                        style={tw.style('absolute w-16 h-16 -left-3 -top-7 rounded-full')}
                    ></LinearGradient>
                )}

                <Image
                    source={icon}
                    style={tw`w-[40px] h-[40px] ${isActive ? '-mt-4' : ''}`}
                    width={25}
                    height={25}
                />
            </View>
        );
    });

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ImageBackground
                    source={require('./public/imgs/banner.png')}
                    style={{
                        position: 'relative',
                        paddingBottom: 0,
                        marginBottom: 0,
                    }}
                >
                    <HomeScreen />
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        marginBottom: 0,
        padding: 0,
    },

    gradientHover: {
        flex: 1,
        width: '100%',
        backgroundImage: 'linear-gradient(45deg, #ff0000, #0000ff)',
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'stretch',
    },
    startButton: {
        marginTop: 350,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 65,
        width: 300,
    },

    gradientButton: {
        height: 60,
        width: '320px',
        borderRadius: 7,
        textAlign: 'center',
        margin: 'auto',
        marginTop: 'calc(100vh - 150px)',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
