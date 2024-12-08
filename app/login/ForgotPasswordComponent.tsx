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
        <SafeAreaView style={styles.forgotPassContainer}>
            <View style={styles.forgotPassTopTitleBarContainer}>
                <Image source={require("../assets/appicon.png")} style={styles.forgotPassAppIcon} />
                <Text style={[styles.forgotPassAppTitle, styles.lobsterRegular, {color: primaryTextColor}]}>MyCircle</Text>
                <View style={styles.placeholderView}></View>
            </View>
            <Image source={require("../assets/forgot-password.png")} style={styles.forgotPassImage1} resizeMode="center" />
            <Text style={[styles.ubuntuBold, styles.forgotPassHeading1Text, {color: primaryTextColor}]}>Forgot Password</Text>
            <Text style={[styles.ubuntuRegular, styles.forgotPassContent1Text, {color: secondaryTextColor}]}>
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
                style={[styles.forgotPassActionButton, styles.forgotPassActionButtonGetstarted]}
                activeOpacity={0.9}
                disabled={isLogginInProgress}
            >
                {isLogginInProgress ? 
                <ActivityIndicator size='small' color='#f7fff7' /> :
                <Text style={[styles.ubuntuBold, styles.forgotPassActionButtonText, styles.forgotPassGetstartedText]}>Submit</Text>
                }
            </TouchableOpacity>
            <View style={styles.forgotPassForgotPasswordContainer}>
                <Text style={[styles.forgotPassForgotPasswordText, styles.ubuntuRegular, {color: linkColor}]} onPress={() => Linking.openURL('http://google.com')}>
                    Back to Login
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    forgotPassContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 20,
    },
    forgotPassTopTitleBarContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    forgotPassAppIcon: {
        width: 40,
        height: 40,
    },
    forgotPassAppTitle: {
        fontSize: 24,
        paddingHorizontal: 10,
        color: '#404040',
    },
    placeholderView: {
        flex: 1
    },
    forgotPassImage1: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    forgotPassHeading1Text: {
        marginTop: 20,
        fontSize: 32,
        textAlign: 'center',
        color: '#404040',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    forgotPassContent1Text: {
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
    forgotPassActionButton: {
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
    forgotPassActionButtonText: {
        textAlign: 'center',
        color: '#404040',
        fontSize: 16,
    },
    forgotPassActionButtonGetstarted: {
        borderColor: '#ff6b6b',
        backgroundColor: '#ff6b6b',
    },
    forgotPassGetstartedText: {
        color: '#f7fff7',
    },
    forgotPassForgotPasswordContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPassForgotPasswordText: {
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