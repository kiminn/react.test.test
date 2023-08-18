import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import List from './Pages/List';
import Write from './Pages/write';
import Edit from './Pages/Edit';

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
