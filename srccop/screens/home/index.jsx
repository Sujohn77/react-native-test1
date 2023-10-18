import React, { useCallback, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    Button,
    Image,
    ImageBackground,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { useFonts } from 'expo-font';
import tw from 'twrnc';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';
import WebView from 'react-native-webview';
import { Link } from 'expo-router';
// import { GradientBtn } from '../../layout/buttons/LinearButton';

SplashScreen.preventAutoHideAsync();

function Section({ children, title }) {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? '#fff' : '#000',
                    },
                ]}
            >
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? '#fff' : '#000',
                    },
                ]}
            >
                {children}
            </Text>
        </SafeAreaView>
    );
}

const navIcons = [
    require('../../../public/imgs/security.png'),
    require('../../../public/imgs/crypto.png'),
    require('../../../public/imgs/help.png'),
];

export const HomeScreen = () => {
    const [activeMenuItem, setActiveMenuItem] = useState(2);
    // const [fontsLoaded, fontError] = useFonts({
    //     InterRegular: require('../../../assets/fonts/Inter-Regular.ttf'),
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
                    style={tw`w-[40px] h-[40px]  ${isActive ? '-mt-4' : ''}`}
                    width={25}
                    height={25}
                />
            </View>
        );
    });

    return (
        <View style={styles.containerMain}>
            <Text style={tw`text-white text-4xl text-center uppercase font-bold`}>
                Take the 5 min quiz
            </Text>
            <Text style={tw`text-white text-2xl text-center mt-3 mb-5 `}>
                Тo see if you can do it123
            </Text>
            {/* 
            <Link href="/quiz">
                <TouchableOpacity style={styles.startButton}> */}
            {/* <GradientBtn
                        name="START NOW"
                        colors={['#FFF500', '#F9E600', '#CA6D00']}
                        style={styles.gradientButton}
                    /> */}
            {/* </TouchableOpacity>
            </Link> */}

            <View
                style={tw`flex flex-row justify-around absolute bottom-[25px] bg-cyan-500 w-full py-2`}
            >
                {menuItems}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    containerMain: {
        position: 'relative',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startButton: {
        marginTop: 350,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 65,
        width: 300,
    },
});
