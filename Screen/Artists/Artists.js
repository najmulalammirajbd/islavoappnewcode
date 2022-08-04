import { View,  Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import HeaderTwo from '../HeaderTwo/HeaderTwo';

export default function Artists() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome5 name="user" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 25 }}>Artists</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>Mamunur Rashid</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>Sheikh Afzal Hussain Sadi</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>Sadikur Rahman</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>Mushir Alom Mijan</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>Sayeem Ahmod Emon</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>Abdullah Al Farhan</Text>
            <HeaderTwo backBtn={true}/>
        </View>
    );
}