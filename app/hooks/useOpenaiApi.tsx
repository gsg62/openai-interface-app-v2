import { useCallback, useState, useEffect } from "react";
import { openaiApi } from "../api/testApi";
import { Message } from "../types/Message";


export const useOpenaiApi = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (messages.length) {
      const lastMessageSource = messages[messages.length - 1].role;
      // only send message to api if last added was from user
      if (lastMessageSource == "user") {
        sendMessage();
      }
    }
  }, [messages]);

  const sendMessage = useCallback(async () => {
    setLoading(true);
    const body = { messages: messages };
    try {
      openaiApi.post("/chat", body).then((response: any) => {
        const messageFromApi = response.data.body.choices[0].message;
        setMessages((prev) => [...prev, messageFromApi]);
        setLoading(false);
      });
    } catch (error) {
      console.log("error caught");
      console.error(error);
      setLoading(false);
      throw error;
    }
  }, [messages]);

  const testEndpoint = useCallback(async () => {
    try {
      openaiApi.get("/test").then((response: any) => {
        console.log("response:", response.data);
      });
    } catch (error) {
      console.log("error caught");
      console.error(error);
      throw error;
    }
  }, []);
  return { loading, messages, setMessages, testEndpoint };
};
