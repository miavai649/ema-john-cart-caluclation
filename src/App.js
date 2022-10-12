import {createBrowserRouter} from 'react-router-dom'
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
