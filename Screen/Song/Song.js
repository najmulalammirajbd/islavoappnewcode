import React , {useState,useEffect} from 'react';
import { WebView } from 'react-native-webview';
import Headir from '../Header/Header';
import {checkConnected} from '../../NoInternet/functions';
import NoConnectionScreen from "../../NoInternet/NoConnectionScreen";

export default function Song() {
  const [connectStatus,setConnectStatus] = useState(false)

  checkConnected().then(res=>{
    setConnectStatus(res)
  })

  const alertSomething = () =>{
    alert('alert something')
  }

    const INJECTED_JAVASCRIPT = `(function() {
        const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
      })();`;
  return (
    connectStatus?
      (
        <>
      <Headir backBtn={true}/>
      <WebView
  source={{ uri: 'https://najmulalammirajbd.github.io/islavosong/' }}
  scrollEnabled={false}
  injectedJavaScript={INJECTED_JAVASCRIPT}
  onMessage={() => {}}
/>
      </>
      ):(
        <NoConnectionScreen onCheck={checkConnected}/>
      )
  );
}
