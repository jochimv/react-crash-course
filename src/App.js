import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups.js';
import NewMeetupPage from './pages/NewMeetup.js';
import FavoritesPage from './pages/Favorites.js';
import Layout from './components/layout/Layout.js';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} exact />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;