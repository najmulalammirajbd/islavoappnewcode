import { View,  Text } from 'react-native';
import Header from '../Header/Header';
import Headirtwo from '../HeaderTwo/HeaderTwo';


export default function About() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 22 }}>about islavo</Text>
            <Text style={{ color: 'white', fontSize: 15 , paddingRight:15 , paddingLeft:15 , textAlign:'center' , marginTop:10 }}>the islavo is islamic audio music and islamic audio musical show streaming app. where you can listen to islamic music and musical show freely. islavo officially launched on 19 may 2021. islavo mainly works with islamic musics and islamic musical shows. islavo's slogan is "islamic music is always".</Text>
            <Text style={{ color: 'white', fontSize: 14 , marginTop:10 , textAlign:'center' }}>email: islavo.info@gmail.com</Text>
          <Headirtwo backBtn={true}/>
        </View>

    );
}