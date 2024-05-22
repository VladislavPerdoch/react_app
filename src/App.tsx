

//<ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>

import Message from './Message';
import ListGroup from './Components/ListGroup';
import Alert from './Components/Alert';
import Button from './Components/Button';
import { useState } from 'react';

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

const handleSelectItem = (item: string) => {
  console.log(item);
}
function App() {
  const [visible, setVisible] = useState(false);

  return (
    
    <div> 
    {visible && <Alert onClose={() => setVisible(false)}>hello</Alert>}
    <Button onClick={() => setVisible(true)}>Click me hhiu</Button>
    </div>

  )
    
    
    
    
    
    

}


export default App