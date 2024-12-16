import { ActivityIndicator, Image, Linking, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, Platform } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../utils/ColorUtils";
import { useState } from "react";
import axios from "axios";

const LoginComponent = () => {
    //---- Global states
    const { theme, systemTheme } = useSelector((state) => state.theme);
    const currentTheme = theme === 'system' ? systemTheme : theme;

    //---- Local states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPasswordIcon, setShowPasswordIcon] = useState("hide");
    const [isLogginInProgress, setIsLogginInProgress] = useState(false);

    const passwordIconSelector = {
        "show": require('../assets/icons/show-password.png'),
        "hide": require('../assets/icons/hide-password.png')
    };

    const idConstants = {
        "EMAIL": "login_email",
        "PASSWORD": "login_password"
    };

    const primaryTextColor = currentTheme === 'light' ? Colors["primary_dark"] : Colors["primary_light"];
    const secondaryColor = currentTheme === 'light'? Colors["border_dark"] : Colors["border_light"];
    const linkColor = currentTheme === 'light'? Colors["link_text_dark"] : Colors["link_text_light"];

    //---- Actions
    const handleFieldInput = (fieldId, value) => {
        switch (fieldId) {
            case idConstants["EMAIL"]:
                setEmail(value);
                break;
            case idConstants["PASSWORD"]:
                setPassword(value);
                break;
        }
    };

    const handleShowHidePassword = () => {
        showPasswordIcon === 'hide' ? setShowPasswordIcon('show') : setShowPasswordIcon('hide');
    };

    const handleLoginPressed = () => {
        setIsLogginInProgress(true);
        console.log("Email: ", email, " | Password: ", password);
        handleLoginApiSubmit();
    };

    const handleLoginApiSubmit = async () => {
        const apiEndpoint = "http://192.168.43.37:8080/api/login";
        const httpMethod = "POST";
        const headerObject = {"Content-Type": "application/json"};
        const requestBodyObject = {email: email, password: password};

        try {
            const response = await axios({
                url: apiEndpoint,
                method: httpMethod,
                headers: headerObject,
                data: requestBodyObject,
                timeout: 10000
            });
            console.log(response.data);
        } catch (err) {
            console.log(err.response.data);
        }
        setTimeout(() => setIsLogginInProgress(false), 3000);
    }

    return (
        <SafeAreaView style={styles.loginContainer}>
            <View style={styles.loginTopTitleBarContainer}>
                <Image source={require("../assets/appicon.png")} style={styles.loginAppIcon} />
                <Text style={[styles.loginAppTitle, styles.lobsterRegular, {color: primaryTextColor}]}>MyCircle</Text>
                <View style={styles.placeholderView}></View>
            </View>
            <Image source={require("../assets/onboarding_1_edited.png")} style={styles.loginImage1} resizeMode="center" />
            <Text style={[styles.ubuntuBold, styles.loginHeading1Text, {color: primaryTextColor}]}>Login</Text>
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
                    value={email}
                    onChangeText={(newText) => handleFieldInput(idConstants["EMAIL"], newText)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/icons/password.png')} style={[styles.inputIcon, {tintColor: secondaryColor}]} />
                <TextInput
                    id={idConstants["PASSWORD"]}
                    placeholder="Password"
                    placeholderTextColor={secondaryColor}
                    secureTextEntry={showPasswordIcon === 'hide'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    numberOfLines={1}
                    style={[styles.inputText, styles.ubuntuRegular, {color: primaryTextColor, borderBottomColor: secondaryColor}]}
                    value={password}
                    onChangeText={(newText) => handleFieldInput(idConstants["PASSWORD"], newText)}
                />
                <View style={[styles.showPasswordContainer, {borderBottomColor: secondaryColor}]}>
                    <TouchableWithoutFeedback
                    onPress={handleShowHidePassword}
                    >
                        <Image
                            source={passwordIconSelector[showPasswordIcon]}
                            style={[styles.showPasswordIcon, {tintColor: secondaryColor}]}
                            resizeMode="center"
                        />
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={styles.loginForgotPasswordContainer}>
                <Text style={[styles.loginForgotPasswordText, styles.ubuntuRegular, {color: linkColor}]} onPress={() => Linking.openURL('http://google.com')}>
                    Forgotten password?
                </Text>
            </View>
            <TouchableOpacity
            style={[styles.loginActionButton, styles.loginActionButtonGetstarted]}
            activeOpacity={0.9}
            onPress={handleLoginPressed}
            disabled={isLogginInProgress}
            >
                {isLogginInProgress ? 
                <ActivityIndicator size='small' color='#f7fff7' /> :
                <Text style={[styles.ubuntuBold, styles.loginActionButtonText, styles.loginGetstartedText]}>Login</Text>
                }
            </TouchableOpacity>
            <View style={styles.loginForgotPasswordContainer}>
                <Text style={[styles.ubuntuRegular, {color: primaryTextColor}]}>Don't have an account?  </Text>
                <Text style={[styles.loginForgotPasswordText, styles.ubuntuRegular, {color: linkColor}]} onPress={() => Linking.openURL('http://google.com')}>
                    Create Account
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
    showPasswordContainer: {
        height: '100%',
        borderBottomColor: '#bdbdbd',
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: 'center',
    },
    showPasswordIcon: {
        width: 20,
        height: 20,
        tintColor: '#949494',
    },
    inputText: {
        fontSize: 16,
        flex: 1,
        borderBottomColor: '#949494',
        borderBottomWidth: 1,
        tintColor: '#f00sdf',
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

export default LoginComponent;