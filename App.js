import { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        );
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Text>Posts from JSONPlaceholder</Text>
      {posts.map((post) => (
        <View key={post.id}>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
}