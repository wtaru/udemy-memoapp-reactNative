import { View, Text, ScrollView, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

import Header from "../../components/Header"
import CircleButton from "../../components/CircleButton"

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2024年06月01日 10:00</Text>
            </View>
            <ScrollView>
                <Text style={styles.memoBody}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見える事もありますので要注意。
                </Text>
            </ScrollView>
            <CircleButton>
                <Feather name="plus" size={40}/>
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    memoHeader: {
        backgroundColor: "#728EC3",
        height: 96,
        justifyContent: "center",
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: "#ffffff",
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold"
    },
    memoDate: {
        color: "#ffffff",
        fontSize: 12,
        lineHeight:16
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    }
})

export default Detail