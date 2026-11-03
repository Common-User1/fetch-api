import { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

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
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Posts from JSONPlaceholder</Text>
      {posts.map((post) => (
        <View key={post.id} style={styles.card}>
          <Text style={styles.title}>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: { marginBottom: 16, padding: 12, backgroundColor: '#eee', borderRadius: 8 },
  title: { fontWeight: 'bold', marginBottom: 4 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});