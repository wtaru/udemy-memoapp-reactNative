import {View, Text, StyleSheet, type TextStyle} from "react-native"

interface Props {
    children: string,
    bang?: boolean,
    style?: TextStyle,
}

const Hello = (props: Props): JSX.Element => {
    // <Hello>要素</Hello>　←要素がchildrenを意味する
    const { children, bang, style } = props
    return (
        <View>
            <Text style={[styles.text, style]}>
                Hello {children} {bang===true ? "!" : ""}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16
    }
})

export default Hello