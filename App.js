import { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  // State 1: the data fetched from the API
  const [posts, setPosts] = useState([]);
  // State 2: loading state, true while waiting for the data
  const [loading, setLoading] = useState(true);

  // useEffect with an empty array [] runs one time only, when the component mounts
  useEffect(() => {
    // async function so we can use await
    const fetchPosts = async () => {
      try {
        // GET request to the public REST API (JSONPlaceholder)
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        );
        // convert the response to a JavaScript array
        const json = await response.json();
        // save the data to state
        setPosts(json);
      } catch (error) {
        // runs if the request fails, like no internet
        console.log('Error fetching data:', error);
      } finally {
        // always runs, so the loading text stops even if there is an error
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // show Loading text while waiting for the data
  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // show the list of posts using map
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