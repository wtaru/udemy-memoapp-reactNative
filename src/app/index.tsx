import {View, Text, StyleSheet} from "react-native"

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header_content}>
                    <Text style={styles.header_title}>Memo App</Text>
                    <Text style={styles.header_right}>logout</Text>
                </View>
            </View>
            <View style={styles.memoListItem}>
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2024年06月01日 10:00</Text>
                </View>
                <View>
                    <Text>❌</Text>
                </View>
            </View>
            <View style={styles.memoListItem}>
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2024年06月01日 10:00</Text>
                </View>
                <View>
                    <Text>❌</Text>
                </View>
            </View>
            <View style={styles.memoListItem}>
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2024年06月01日 10:00</Text>
                </View>
                <View>
                    <Text>❌</Text>
                </View>
            </View>
            <View style={styles.circleButton}>
                <Text style={styles.circleButtonLabel}>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#728EC3",
        height: 104,
        justifyContent: "flex-end",
    },
    header_content: {
        alignItems: "center"
    },
    header_right: {
        position: "absolute",
        right: 16,
        bottom: 8,
        color: "rgba(255, 255, 255, 0.7)"
    },
    header_title: {
        marginBottom: 8,
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 32,
        color: "#ffffff"
    },
    memoListItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,0.15)",
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: "#848484"
    },
    circleButton: {
        height: 64,
        width: 64,
        backgroundColor: "#728EC3",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 32,
        position: "absolute",
        right: 40,
        bottom: 40,
        shadowColor: "#000000", 
        shadowOpacity: 0.25,
        elevation: 8
    },
    circleButtonLabel: {
        fontSize: 40,
        color: "#ffffff", 
        lineHeight: 48,
    }
})

export default Index