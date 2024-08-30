import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';
import {useAuthentication} from './hooks/useAuthentication';

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import CreatePost from './pages/CreatePost/CreatPost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';

//components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

//context
import { AuthProvider } from './context/AuthContext';

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();
  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      setUser(user)
    })
  },[auth])

  // if (!loadingUser) {
  //   return <Loader/>;
  // }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Navbar/>
          {loadingUser && <Loader/>}
          <div className='container'>
            <Routes>
              <Route path='/meu-blog' element={<Home/>}/>
              <Route path='/meu-blog/search' element={<Search/>}/>
              <Route path='/meu-blog/posts/:id' element={<Post/>}/>

              <Route path='/meu-blog/register' element={!user ? <Register/> : <Navigate to="/meu-blog" />}
              />
              <Route path='/meu-blog/login' element={!user ? <Login/> : <Navigate to="/meu-blog" />}
              />
              <Route path='/meu-blog/about' element={<About/>}/>
              <Route path='/meu-blog/posts/create' element={user ? <CreatePost/> : <Navigate to="/meu-blog/login" />}/>
              <Route path='/meu-blog/dashboard' element={user ? <Dashboard/> : <Navigate to="/meu-blog/login" />}/>
              <Route path='/meu-blog/posts/edit/:id' element={user ? <EditPost/> : <Navigate to="/meu-blog/login" />}/>
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
