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
            <View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2024年06月01日 10:00</Text>
                    </View>
                    <View>
                        <Text>❌</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2024年06月01日 10:00</Text>
                    </View>
                    <View>
                        <Text>❌</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2024年06月01日 10:00</Text>
                    </View>
                    <View>
                        <Text>❌</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text>+</Text>
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
    }
})

export default Index