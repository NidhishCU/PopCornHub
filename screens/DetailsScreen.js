import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const DetailsScreen = ({route}) => {
  const {movie} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: movie.image?.original}} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>{movie.summary}</Text>
      <Text style={styles.info}>Language: {movie.language}</Text>
      <Text style={styles.info}>Genres: {movie.genres.join(', ')}</Text>
      <Text style={styles.info}>Status: {movie.status}</Text>
      <Text style={styles.info}>Premiered: {movie.premiered}</Text>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:1,
    backgroundColor: 'black',
  },

  image: {
    width: '100%',
    height: 400,
    resizeMode:'contain'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color:'white',
    padding:10,
  },
  summary: {
    fontSize: 16,
    color: 'white',
    paddingLeft:5,
    paddingRight:5,
    marginLeft:10

  },
  info: {
    color:'#f0f0f0',
    fontSize: 14,
    padding:5,
    marginLeft:10
  },
});

export default DetailsScreen;
