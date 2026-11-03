import { useState } from 'react';
import { View, Text } from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <View>
      <Text>Activity 5</Text>
    </View>
  );
}