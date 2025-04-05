
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Register



from './Pages/Register/Register';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
    <Register/>
    </div>
    </ChakraProvider>
  );
}

export default App;
