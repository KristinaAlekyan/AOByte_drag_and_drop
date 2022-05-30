import "./App.css";
import DragAndDrop from "./Components/DragAndDrop/DragAndDrop";

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <DragAndDrop />
            </div>
        </Provider>
    );
}

export default App;
