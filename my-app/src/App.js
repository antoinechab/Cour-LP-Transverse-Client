// import React from "react";
// import { Switch, Route } from "react-router-dom";
// import "./style/App.css";
// import HomePage from "./component/common/Home";
// import UserPage from "./component/user/UserPage";
// import ProfilPage from "./component/common/ProfilPage";
// import TaskList from "./component/task/TaskList";
// import TaskDetail from "./component/task/TaskDetail";
// import ProjectList from "./component/project/ProjectList";
// import ProjectDetail from "./component/project/ProjectDetail";
// import Header from "./component/common/Header";
// import Navbar from "./component/common/Navbar";
// import ProjectCreate from "./component/project/ProjectCreate";
// import Auth from "./component/user/Auth";
// //import Login from './component/Login'
// import CreateLink from './component/Create'


// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <div className="container">
//         <Switch className="flex-1">
//           <Route path="/home">
//             <HomePage />
//           </Route>
//           <Route path="/me">
//             <ProfilPage />
//           </Route>
//           <Route path="/user/:id">
//             <UserPage />
//           </Route>
//           <Route path="/tasks">
//             <TaskList />
//           </Route>
//           <Route path="/task/:id">
//             <TaskDetail />
//           </Route>
//           <Route path="/projects/">
//             <ProjectList />
//           </Route>
//           <Route path="/project/:id">
//             <ProjectDetail />
//           </Route>
//           <Route path="/new-project">
//             <ProjectCreate />
//           </Route>
//           {/* <Route exact path="/" component={LinkList} /> */}
//           {/* <Route exact path="/create" component={CreateLink} />
//           <Route exact path="/login" component={Login} /> */}
//           <Route exact path="/" component={HomePage} />
//           <Route exact path="/create" component={CreateLink} />
//            <Route exact path="/authentification" component={Auth}> 
//              <Auth />
//           </Route> 
//         </Switch>
//       </div>
//       <Navbar />
//     </div>
//   );
// }

// export default App;

//  { /*<Route exact path="/" component={HomePage} />
//           <Route exact path="/create" component={CreateLink} />
//            <Route exact path="/authentification" component={Auth}>
//             <Auth />
// </Route> */}


import React from "react";
import { Switch, Route } from "react-router-dom";
import "./style/App.css";
import HomePage from "./component/common/Home";
import UserPage from "./component/user/UserPage";
import ProfilPage from "./component/common/ProfilPage";
import TaskList from "./component/task/TaskList";
import TaskDetail from "./component/task/TaskDetail";
import ProjectList from "./component/project/ProjectList";
import ProjectDetail from "./component/project/ProjectDetail";
import Header from "./component/common/Header";
import Navbar from "./component/common/Navbar";
import ProjectCreate from "./component/project/ProjectCreate";
import Auth from "./component/user/Auth";
import Login from './component/Login'
import CreateLink from './component/Create'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch className="flex-1">
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/me">
            <ProfilPage />
          </Route>
          <Route path="/user/:id">
            <UserPage />
          </Route>
          <Route path="/tasks">
            <TaskList />
          </Route>
          <Route path="/task/:id">
            <TaskDetail />
          </Route>
          <Route path="/projects/">
            <ProjectList />
          </Route>
          <Route path="/project/:id">
            <ProjectDetail />
          </Route>
          <Route path="/new-project">
            <ProjectCreate />
          </Route>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/create" component={CreateLink} />
           <Route exact path="/authentification" component={Auth}> <Auth />
          </Route>  */}
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
      <Navbar />
    </div>
  );
}

export default App;

 { /*<Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={CreateLink} />
           <Route exact path="/authentification" component={Auth}>
            <Auth />
</Route> */}
