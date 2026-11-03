import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <View>
      <Text>Activity 5</Text>
    </View>
  );
}