import { Children } from "react"
import { View, Text, StyleSheet } from "react-native"

interface Props {
    children: string
}

const CircleButton = (props: Props): JSX.Element => {
    const { children } = props

    return (
        <View style={styles.circleButton}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default CircleButton