import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      console.log('Response status:', response.status);
    };

    fetchPosts();
  }, []);

  return (
    <View>
      <Text>Activity 5</Text>
    </View>
  );
}