import { View,  Text } from 'react-native';
import Header from '../Header/Header';
import Headirtwo from '../HeaderTwo/HeaderTwo';


export default function About() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 22 }}>About Islavo</Text>
            <Text style={{ color: 'white', fontSize: 15 , paddingRight:15 , paddingLeft:15 , textAlign:'center' , marginTop:10 }}>Islavo is Islamic audio music streaming app. Where you can listen to Islamic music freely. It officially launched on 19 May 2021. Islavo mainly works with Islamic musics and Islamic podcasts. Moreover, some of Islavo's work has taken place in everyone's heart. Islavo's slogan is "Islamic music is always".</Text>
            <Text style={{ color: 'white', fontSize: 14 , marginTop:10 , textAlign:'center' }}>Email: islavo.info@gmail.com</Text>
          <Headirtwo backBtn={true}/>
        </View>

    );
}