import {View, Text, StyleSheet} from "react-native"

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text>Memo App</Text>
                    <Text>logout</Text>
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
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Index