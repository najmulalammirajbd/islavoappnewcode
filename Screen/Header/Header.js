import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View , Image , Pressable } from 'react-native';



export default function Header({backBtn}) {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
     { backBtn && (
        <Pressable onPress={()=> {navigation.goBack()}}>
            <AntDesign style={{marginLeft:10}}  name="leftcircle" size={24} color="white" />
        </Pressable>
     )}
     <Image style={styles.logo} source ={require('../../assets/appicon.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth:0.3,
    borderBottomColor:'white',
    flexDirection:'row',
    alignItems:'center'
  },
  logo:{
    width:110,
    height:100,
    alignItems:'flex-start',
    marginBottom:0,
    resizeMode:'contain'
  }
});