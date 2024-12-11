import { useEffect, useState } from "react";
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../utils/ColorUtils";
import { useSelector } from "react-redux";

const OnboardComponent = () => {
    const [isGettingStartedInProgress, setIsGettingStartedInProgress] = useState(false);
    const [isLogginInProgress, setIsLogginInProgress] = useState(false);
    const [loadNetwork, setLoadNetwork] = useState(false);

    const {theme, systemTheme} = useSelector((state) => state.theme);
    const currentTheme = theme === 'system' ? systemTheme : theme;

    //---- Theme Colors
    const primaryBackgroundColor = currentTheme === 'light' ? Colors["primary_light"] : Colors["primary_dark"];
    const primaryTextColor = currentTheme === 'light' ? Colors["primary_dark"] : Colors["primary_light"];
    const secondaryTextColor = currentTheme === 'light' ? Colors["secondary_dark"] : Colors["secondary_light"];
    const borderColor = currentTheme === 'light' ? Colors["border_light"] : Colors["border_dark"];

    useEffect(() => {
        fetch(
            "http://192.168.43.37:8080/",
            {
                method:'GET',
                headers:{
                'Accept':'application/json'
                }
            }
        ).then((res) => {
            res.json().then((data) => {
                console.log(data);
                setIsLogginInProgress(false);
            });
        })
        .catch((error) => {
            console.log(error.json());
        })
    }, [loadNetwork]);

    return (
        <SafeAreaView style={styles.onboardContainer}>
            <View style={styles.onboardTopTitleBarContainer}>
                <Image source={require("../assets/appicon.png")} style={styles.onboardAppIcon} />
                <Text style={[styles.onboardAppTitle, styles.lobsterRegular, {color: primaryTextColor}]}>MyCircle</Text>
                <View style={styles.placeholderView}></View>
            </View>
            <Image source={require("../assets/onboarding_1_edited.png")} style={styles.onboardImage1} resizeMode="center" />
            <Text style={[styles.ubuntuBold, styles.onboardHeading1Text, {color: primaryTextColor}]}>Best Social App to Make{"\n"}New Friends</Text>
            <Text style={[styles.ubuntuRegular, styles.onboardContent1Text, {color: secondaryTextColor}]}>
                With MyCircle you will find new friends from various countries and regions of the world.
            </Text>
            <TouchableOpacity
            style={[styles.onboardActionButton, styles.onboardActionButtonGetstarted]}
            activeOpacity={0.9}
            onPress={() => {
                setIsGettingStartedInProgress(true);
                setTimeout(() => {
                    setIsGettingStartedInProgress(false);
                }, 3000);
            }}
            disabled={isGettingStartedInProgress || isLogginInProgress}
            >
                {isGettingStartedInProgress ? 
                <ActivityIndicator size='small' color='#f7fff7' /> :
                <Text style={[styles.ubuntuBold, styles.onboardActionButtonText, styles.onboardGetstartedText]}>Get Started</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.onboardActionButton, {backgroundColor: primaryBackgroundColor, borderColor: borderColor}]}
            activeOpacity={0.9}
            onPress={() => {
                setIsLogginInProgress(true);
                setLoadNetwork(!loadNetwork);
            }}
            disabled={isGettingStartedInProgress || isLogginInProgress}
            >
                {isLogginInProgress ?
                <ActivityIndicator size='small' color={primaryTextColor} /> :
                <Text style={[styles.ubuntuMedium, styles.onboardActionButtonText, {color: primaryTextColor}]}>Login</Text>
                }
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    onboardContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 10,
    },
    onboardTopTitleBarContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    onboardAppIcon: {
        width: 40,
        height: 40,
    },
    onboardAppTitle: {
        fontSize: 24,
        paddingHorizontal: 10,
        color: '#404040',
    },
    onboardSkipContainer: {
        height: 44,
        paddingHorizontal: 25,
        backgroundColor: '#fff',
        borderColor: '#404040',
        borderWidth: 1,
        borderRadius: 18,
        justifyContent: 'center',
        //---- Android
        elevation: 5,
        //---- iOS
        shadowColor: '#404040',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    onboardSkipText: {
        color: '#404040',
        textAlign: 'center',
    },
    placeholderView: {
        flex: 1
    },
    onboardImage1: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    onboardHeading1Text: {
        marginTop: 20,
        fontSize: 28,
        textAlign: 'center',
        color: '#404040',
    },
    onboardContent1Text: {
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
        color: '#696969',
        marginBottom: 10,
        marginHorizontal: 15,
    },
    onboardActionButton: {
        marginHorizontal: 20,
        marginVertical: 8,
        height: 50,
        paddingHorizontal: 25,
        backgroundColor: Colors["primary_light"],
        borderColor: '#404040',
        borderWidth: 1,
        borderRadius: 18,
        justifyContent: 'center',
        //---- Android
        elevation: 3,
        //---- iOS
        shadowColor: '#404040',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    onboardActionButtonText: {
        textAlign: 'center',
        color: '#404040',
        fontSize: 16,
    },
    onboardActionButtonGetstarted: {
        borderColor: '#ff6b6b',
        backgroundColor: '#ff6b6b',
    },
    onboardGetstartedText: {
        color: '#f7fff7',
    },
    lobsterRegular: {
        fontFamily: 'Lobster-Regular',
        fontSize: 30,
    },
    ubuntuRegular: {
        fontFamily: 'Ubuntu-Regular',
    },
    ubuntuMedium: {
        fontFamily: 'Ubuntu-Medium',
    },
    ubuntuBold: {
        fontFamily: 'Ubuntu-Bold',
    },
});

export default OnboardComponent; 