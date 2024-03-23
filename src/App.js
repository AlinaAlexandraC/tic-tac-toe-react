import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Layout from './Pages/Layout';
import NotFound from './Pages/NotFound';
import Rules from './Pages/Rules';
import GameMode1 from './Pages/GameMode1';
import GameMode2 from './Pages/GameMode2';
import GameMode3 from './Pages/GameMode3';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout>
      <Homepage />
    </Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: '/rules',
    element: <Layout>
      <Rules />
    </Layout>
  },
  {
    path: '/game-human-human',
    element: <Layout>
      <GameMode1 />
    </Layout>
  },
  {
    path: '/game-human-AI-normal',
    element: <Layout>
      <GameMode2 />
    </Layout>
  },
  {
    path: '/game-human-AI-unbeatable',
    element: <Layout>
      <GameMode3 />
    </Layout>
  }
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
