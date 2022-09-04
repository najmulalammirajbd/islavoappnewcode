import { StyleSheet, Text, View, Linking } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'

export default function Media() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , marginTop:10 , flexDirection:'row' }}>
            <Text style={{ color: 'white', fontSize: 10 , marginRight:5 }}>Follow islavo</Text>
            <View style={{ flexDirection: 'row', marginTop: 7, marginBottom: 7 }}>
                <Text style={{ color: 'white', fontSize: 17 }}
                    onPress={() => Linking.openURL('https://www.facebook.com/islavoofficial')}><FontAwesome5
                        name="facebook-square"
                        size={30}
                    ></FontAwesome5></Text>
                <Text style={{ color: 'white', fontSize: 17, marginLeft: 5 }}
                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCaR8zv6Xatmk-NScqexI3Ww')}><FontAwesome5
                        name="youtube-square"
                        size={30}
                    ></FontAwesome5></Text>
            </View>
        </View>
        <Text style={{ color: 'white', fontSize: 10 , marginBottom:15 , textAlign:'center' , alignItems:'center'  }}
        onPress = {() => navigation.navigate('Privecy')}> Privacy Policy for islavo </Text>
        </View>


    );
}