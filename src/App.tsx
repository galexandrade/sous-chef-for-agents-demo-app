import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Employees from './pages/Employees';
import Payroll from './pages/Payroll';
import UpdatePayment from './pages/UpdatePayment';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                { path: '/', element: <Navigate to="/home" /> },
                { path: '/home', element: <Home /> },
                { path: '/schedule', element: <Schedule /> },
                { path: '/employees', element: <Employees /> },
                { path: '/payroll', element: <Payroll /> },
                { path: '/update-payment', element: <UpdatePayment /> },
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}

export default App;
