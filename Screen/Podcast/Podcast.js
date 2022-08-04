import { WebView } from 'react-native-webview';
import Headir from '../Header/Header';

export default function Podcast() {
    const INJECTED_JAVASCRIPT = `(function() {
        const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
      })();`;
  return (
      <>
      <Headir backBtn={true}/>
      <WebView
  source={{ uri: 'https://najmulalammirajbd.github.io/islavopodcast/' }}
  scrollEnabled={false}
  injectedJavaScript={INJECTED_JAVASCRIPT}
  onMessage={() => {}}
/></>
  );
}
