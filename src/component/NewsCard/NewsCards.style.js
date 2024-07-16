import {Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {  
        backgroundColor: '#00FFFF',
        margin: 10,
        borderRadius: 10,
    },
    image: {height: Dimensions.get('window').height /4, borderTopLeftRadius: 10, borderTopRightRadius: 10},
    title: {  // haber başlığının stili
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {  //haber metni stili
        marginTop: 3,
    },
    author: {  //yazar ismlerinin stili
       fontStyle: 'italic',
       textAlign: 'right',
    },
    inner_container: {
        padding: 10,
    },

});