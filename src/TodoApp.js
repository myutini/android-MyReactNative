import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import CodePush from 'react-native-code-push';

class TodoApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            logs: []
        }
    }

    codePushSync(){
        this.setState({ logs: ['Started at ' + new Date().getTime()]});
        CodePush.sync({
            updateDialog: true,
            installMode: CodePush.InstallMode.IMMEDIATE
        }, (status) => {
            for (var key in CodePush.SyncStatus) {
                if(status === CodePush.SyncStatus[key]) {
                    this.setState(prevState => ({ logs: [...prevState.logs, key.replace(/_/g, ' ')]}));
                    break;
                }
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Code Push Rocks!!!</Text>
                <TouchableOpacity
                    onPress = {() => {this.codePushSync()}}
                >
                Code Push
                </TouchableOpacity>
                <Text>{JSON.stringify(this.state.logs)}</Text>
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