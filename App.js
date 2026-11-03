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
      const json = await response.json();
      console.log('Number of posts:', json.length);
      setPosts(json);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <View>
      <Text>Activity 5</Text>
    </View>
  );
}