import { ApplicationProvider } from './context/ApplicationContext';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from "./components/pages/Home";
import Questions from "./components/pages/Questions";
import Sidebar from "./components/layout/Sidebar";
import ModeSwitcher from "./components/layout/ModeSwitcher";
import UserAccount from "./components/pages/UserAccount";
import UserQuestions from "./components/pages/UserQuestions";
import PrivateRoute from "./components/utils/ProtectedRoute";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Login from "./components/pages/Login";


function App() {



  return (
      <ApplicationProvider>
          <BrowserRouter>
              <div className="main-wrapper doc-wrapper">
                  <Sidebar />
                  <div className="page-container">
                    <ModeSwitcher />
                      {/*<!-- page-content starts here -->*/}
                      <div className="page-content w-nav-right">
                          <div className="container-fluid thepage">
                              <div className="row">
                                  <div className="col-12">
                                      <Routes>
                                          <Route index="true" element={<Home/>}/>
                                          <Route path="/questions" element={<Questions/>}/>
                                          <Route path="/user-account" element={<ProtectedRoute element={<UserAccount/>} />} />
                                          <Route path="/user-questions"
                                              element={<ProtectedRoute element={<UserQuestions />} />}/>
                                          <Route path="/login" element={<Login />} />
                                      </Routes>
                                  </div>
                              </div>
                          </div>
                          {/*<!-- / container-fluid -->*/}
                      </div>
                      {/*<!-- / page-content -->*/}
                  </div>
                  {/*<!-- page-container -->*/}
              </div>
              {/*<!-- / main-wrapper -->*/}
          </BrowserRouter>
      </ApplicationProvider>
  );
}

export default App;
