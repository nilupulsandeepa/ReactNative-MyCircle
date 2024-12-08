import { useState } from "react";
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../utils/ColorUtils";

const ForgotPasswordComponent = () => {

    const { theme, systemTheme } = useSelector((state) => state.theme);
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const [isLogginInProgress, setIsLogginInProgress] = useState(false);

    const primaryTextColor = currentTheme === 'light' ? Colors["primary_dark"] : Colors["primary_light"];
    const secondaryTextColor = currentTheme === 'light' ? Colors["secondary_dark"] : Colors["secondary_light"];
    const secondaryColor = currentTheme === 'light'? Colors["border_dark"] : Colors["border_light"];
    const linkColor = currentTheme === 'light'? Colors["link_text_dark"] : Colors["link_text_light"];

    return (
        <SafeAreaView style={styles.loginContainer}>
            <View style={styles.loginTopTitleBarContainer}>
                <Image source={require("../assets/appicon.png")} style={styles.loginAppIcon} />
                <Text style={[styles.loginAppTitle, styles.lobsterRegular, {color: primaryTextColor}]}>MyCircle</Text>
                <View style={styles.placeholderView}></View>
            </View>
            <Image source={require("../assets/forgot-password.png")} style={styles.loginImage1} resizeMode="center" />
            <Text style={[styles.ubuntuBold, styles.loginHeading1Text, {color: primaryTextColor}]}>Forgot Password</Text>
            <Text style={[styles.ubuntuRegular, styles.onboardContent1Text, {color: secondaryTextColor}]}>
                Enter your email and we'll send you a link to reset your password to your email.
            </Text>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/icons/email.png')} style={[styles.inputIcon, {tintColor: secondaryColor}]} />
                <TextInput
                    placeholder="Email address"
                    placeholderTextColor={secondaryColor}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    numberOfLines={1}
                    style={[styles.inputText, styles.ubuntuRegular, {color: primaryTextColor, borderBottomColor: secondaryColor}]}
                />
            </View>
            <TouchableOpacity
                style={[styles.loginActionButton, styles.loginActionButtonGetstarted]}
                activeOpacity={0.9}
                disabled={isLogginInProgress}
            >
                {isLogginInProgress ? 
                <ActivityIndicator size='small' color='#f7fff7' /> :
                <Text style={[styles.ubuntuBold, styles.loginActionButtonText, styles.loginGetstartedText]}>Submit</Text>
                }
            </TouchableOpacity>
            <View style={styles.loginForgotPasswordContainer}>
                <Text style={[styles.loginForgotPasswordText, styles.ubuntuRegular, {color: linkColor}]} onPress={() => Linking.openURL('http://google.com')}>
                    Back to Login
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 20,
    },
    loginTopTitleBarContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginAppIcon: {
        width: 40,
        height: 40,
    },
    loginAppTitle: {
        fontSize: 24,
        paddingHorizontal: 10,
        color: '#404040',
    },
    placeholderView: {
        flex: 1
    },
    loginImage1: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    loginHeading1Text: {
        marginTop: 20,
        fontSize: 32,
        textAlign: 'center',
        color: '#404040',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    onboardContent1Text: {
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
        color: '#696969',
        marginBottom: 10,
        marginHorizontal: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        marginHorizontal: 25,
        alignItems: 'center',
        marginTop: 10,
    },
    inputIcon: {
        width: 20,
        height: 20,
        marginEnd: 10,
        tintColor: '#949494',
    },
    inputText: {
        fontSize: 16,
        flex: 1,
        borderBottomColor: '#949494',
        borderBottomWidth: 1,
        tintColor: '#f00sdf'
    },
    loginActionButton: {
        marginHorizontal: 20,
        marginTop: 20,
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
    loginActionButtonText: {
        textAlign: 'center',
        color: '#404040',
        fontSize: 16,
    },
    loginActionButtonGetstarted: {
        borderColor: '#ff6b6b',
        backgroundColor: '#ff6b6b',
    },
    loginGetstartedText: {
        color: '#f7fff7',
    },
    loginForgotPasswordContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginForgotPasswordText: {
        color: '#1a535c',
        textDecorationLine: 'underline',
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

export default ForgotPasswordComponent;