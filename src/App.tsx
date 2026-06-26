import {
    createBrowserRouter,
    Navigate,
    RouterProvider
} from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import LocationsListPage from './pages/LocationsListPage';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                { path: '/', element: <Navigate to="/home" /> },
                { path: '/locations', element: <LocationsListPage /> },
                {
                    path: '/home',
                    element: <Home />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
