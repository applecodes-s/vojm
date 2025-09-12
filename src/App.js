import RouterPage from './Pages/RouterPage';
import * as React from 'react';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <RouterPage />
      </div>
    </HashRouter>
  );
}

export default App;
