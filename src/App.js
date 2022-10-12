import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topic/Topics';
import Main from './layout/Main';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const router = createBrowserRouter([
    {path : '/' ,
    element : <Main></Main> ,
    children : [
      {path : '/' ,
       element : <Topics></Topics>},

      {path : '/topics' , 
      loader : async () => {
        return fetch ('https://openapi.programming-hero.com/api/quiz')
      },
      element : <Topics></Topics>},

      {path : '/subject/:subjectId' , 
      loader : async ({params}) => {
        return fetch (`https://openapi.programming-hero.com/api/quiz/${params.subjectId}`)
      },
      element : <Quiz></Quiz>},

      {path : '/blogs' , 
      element : <Blog></Blog>},

      {path : '/Statistics' , 
      loader : () => {
        return fetch ('https://openapi.programming-hero.com/api/quiz')
      },
      element : <Statistics></Statistics>}

     ]},
      {path : '*' , element : <p> Ops!! Page Not found: 4o4</p>}
     ])
     return (
    <div className="app">
     <RouterProvider router = {router}></RouterProvider>
    </div>
    );
}

export default App;
