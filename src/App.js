import React, { useEffect } from 'react';
import { auth } from './components/firebase';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feeds from './components/Feeds';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { login, logout, selectUser } from './features/userSlice';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }));
      } else {
        dispatch(logout());
      }
    });
  }, []);


  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (<div>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Feeds />
          <Widgets />
        </div>
      </div>)}
    </div>
    
  );
}

export default App;
