import './App.css';
import { router } from '../src/routes/Routing'
// import { testrouter } from '../src/routes/TestRouting'

import { RouterProvider } from 'react-router-dom';

function App() {
  return <RouterProvider router={router} />
}

export default App;
