import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Mainroot from "../pages/Mainroot";
import Table from "../pages/Table";


export const ROUTER = [
    {
        path: '/',
        element: <Mainroot />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'table',
                element: <Table />
            },
            {
                path: 'admin',
                element: <Admin />
            }
        ]
    }
]