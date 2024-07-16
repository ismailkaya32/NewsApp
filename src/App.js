import React from 'react';
import {SafeAreaView, Image, View,Text, FlatList,StyleSheet, ScrollView, Dimensions} from "react-native";
import NewCards from './component/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

function App(){
  return(
    <SafeAreaView style={styles.container}> 
      <Text style={styles.headerText}>NEWS</Text> 
      <FlatList
      ListHeaderComponent={() => // horizontal -> yatay ölçeklendirme  showsHorizontalScrollIndicator={true} -> kaydırma çubuğunu aktif etme
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>  
          {
            news_banner_data.map(bannerNews => (<Image style={styles.banner_image} source={{uri: bannerNews.imageUrl}}/>
         ))}
        </ScrollView>
      }
        data={news_data}
        renderItem={({item}) => <NewCards news={item} />}
      />  
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  banner_image: { // en üstteki kaydırmalı resim kısmının boyutu
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2, 
  },
  headerText: {  // NEWS başlık yazı stili
    fontWeight: 'bold',
    fontSize: 50,
    color: 'red',
  }
});

export default App;