import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import CodePush from 'react-native-code-push';

class TodoApp extends Component {

    componentWillMount(){
        CodePush.sync({
            updateDialog: true,
            installMode: CodePush.InstallMode.IMMEDIATE
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Todo</Text>
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});