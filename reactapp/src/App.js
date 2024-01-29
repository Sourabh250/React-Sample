import './App.css';
import Item from './components/item';

function App() {
  return (
    <div className="Box">
      <Item title='Title1' link='https://picsum.photos/200' desc='lorem lorem lorem lorem lorem lorem lorem lorem' price='200$' isVisible={false}/>

      <Item title='Title2' link='https://picsum.photos/200' desc='lorem lorem lorem lorem lorem lorem lorem lorem lorem' price='200$' isVisible={true}/>

      <Item title='Title3' link='https://picsum.photos/200' desc='lorem lorem lorem lorem lorem lorem lorem lorem' price='200$' isVisible={true}/>

      <Item title='Title4' link='https://picsum.photos/200' desc='lorem lorem lorem lorem lorem lorem lorem lorem' price='200$' isVisible={true}/>

      <Item title='Title5' link='https://picsum.photos/200' desc='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem' price='200$' isVisible={false}/>

      <Item title='Title6' link='https://picsum.photos/200' desc='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem' price='200$' isVisible={true}/>
    </div>
  );
}

export default App;
