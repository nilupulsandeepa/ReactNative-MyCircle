import { Image, StyleSheet, Text, View } from "react-native";

const FeedComponent = () => {
    return (
        <View style={styles.onboardTopTitleBarContainer}>
            <Image source={require("../assets/appicon.png")} style={styles.onboardAppIcon} />
            <Text style={styles.onboardAppTitle}>MyCircle</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    onboardTopTitleBarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#f00',
    },
    onboardAppIcon: {
        width: 40,
        height: 40,
    },
    onboardAppTitle: {
        fontSize: 24,
        paddingHorizontal: 10,
    }
});

export default FeedComponent; 