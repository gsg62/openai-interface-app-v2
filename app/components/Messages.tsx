import { Text, View } from "react-native"
import styles from "../style/styles"
import { Message } from "../types/Message"

type MessageProps = {
  message: Message
}
const MessageDisplay = ({ message }: MessageProps) => {
  return (
    <View style={styles.messageContainer}>
      {message.role == "assistant" && <Text>Assistant: </Text>}
      {message.role == "user" && <Text>Me: </Text>}
      <Text>{message.content}</Text>
    </View>
  )
}

type MessagesProps = {
  messages: Message[]
}
const Messages = ({ messages }: MessagesProps) => {
  return (
    <View>
      {messages.map((message: Message, index: number) => (
        <MessageDisplay message={message} key={index} />
      ))}
    </View>
  )
}

export default Messages
