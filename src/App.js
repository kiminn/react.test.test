import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import List from './Pages/list';
import Write from './Pages/write';
import Edit from './Pages/Edit';
import './css/css.css';
import View from './Pages/view';

// 순서도 정리하기

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <List />,
        },
        {
            path: '/write',
            element: <Write />,
        },
        {
            path: '/Edit',
            element: <Edit />,
        },
        {
            path: '/view',
            element: <View />,
        },
    ]);

    return <RouterProvider router={router} />;
    //   return()
    // <BrowserRouter>
    //     <div className="board_wrap">
    //         <Header></Header>
    //         <Routes path="/">
    //             <Route path="/" element={<List />}></Route>
    //         </Routes>
    //         <Routes path="/write">
    //             <Route path="/write" element={<Write />}></Route>
    //         </Routes>
    //         <Routes path="/edit">
    //             <Route path="edit" element={<Edit />}></Route>
    //         </Routes>
    //     </div>
    // </BrowserRouter>
}

export default App;
