import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topic/Topics';
import Main from './layout/Main';


function App() {

  const router = createBrowserRouter([
    {path : '/' ,
    element : <Main></Main> ,
    children : [
      {path : '/' ,
       element : <Topics></Topics>},

      {path : '/topics' , 
      loader : () => fetch ('https://openapi.programming-hero.com/api/quiz'),
      element : <Topics></Topics>},

      {path : '/blogs' , 
      element : <Blog></Blog>},

      {path : '/Statistics' , 
      element : <Statistics></Statistics>}

     ]}
  ])
  return (
    <div className="">
     <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
