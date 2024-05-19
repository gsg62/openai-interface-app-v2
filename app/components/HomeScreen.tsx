import {
  ActivityIndicator,
  Button,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native"
import { useState } from "react"
import styles from "../style/styles"
import { useOpenaiApi } from "../hooks/useOpenaiApi"
import Messages from "./Messages"
import { Message } from "../types/Message"

const HomeScreen = () => {
  const [newMessage, setNewMessage] = useState<string>("")
  const { loading, messages, setMessages, testEndpoint } = useOpenaiApi()

  const handlePress = () => {
    const userMessage: Message = {
      role: "user",
      content: newMessage,
    }
    setMessages((prev: Message[]) => [...prev, userMessage])
    // sendMessage();
    // testEndpoint();
  }

  const handleTest = () => {
    console.log("messages: ", messages)
  }

  return (
    <View style={styles.baseContainer}>
      <Text style={styles.titleText}>chat interface</Text>
      <ScrollView>
        <View style={styles.textInputContainer}>
          <TextInput
            multiline
            placeholderTextColor="#c7c8c9"
            placeholder="type new message"
            onChangeText={(newText) => setNewMessage(newText)}
          />
        </View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="send" onPress={handlePress} />
      )}
      <Messages messages={messages} />
      <View>
        <Button title="test button" onPress={handleTest} />
      </View>      
      </ScrollView>
    </View>
  )
}

export default HomeScreen
