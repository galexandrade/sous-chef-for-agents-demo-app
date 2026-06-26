import {
    createBrowserRouter,
    Navigate,
    RouterProvider
} from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import TasksListPage from './pages/TasksListPage';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                { path: '/', element: <Navigate to="/home" /> },
                { path: '/tasks', element: <TasksListPage /> },
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
