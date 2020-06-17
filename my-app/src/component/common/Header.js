import React, { Component } from "react";
import logo from "../../project.svg";
import { FiMenu } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { withRouter,Link } from "react-router-dom";
import { AUTH_TOKEN } from "../../constants"

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false
    };

    this.toggleNavbar.bind(this);
    this.handleClick.bind(this);
  }

  toggleNavbar() {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    });
  }

  handleClick(){
    this.props.history.push("/home")
  }

  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="header">
        <div onClick={() => this.toggleNavbar()}>
          <FiMenu className="navbar-icon" />
        </div>
        <div className="title-with-logo" onClick={() => this.handleClick()}>
          <img src={logo} className="app-logo" alt="logo" />
          <h2 className="header-title">Project App</h2>
        </div>
        <div className="flex flex-fixed black">
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black">
              submit
            </Link>
          </div>
        )}
      </div>
        <div>
          
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN)
              this.props.history.push(`/`)
            }}
          >
            logout
          </div>
        ) : (
          <Link to="/login" className="ml1 no-underline black">
                login
               </Link>
        )}
         
        </div>
        
        {this.state.navbarOpen &&
          <div className="sidebar">
            <h2>Project APP</h2>
            <ul className="sidebar-list">
              <li>
                <Link onClick={() => this.toggleNavbar()} to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => this.toggleNavbar()} to="/me">
                  Profile
                </Link>
              </li>
              <li>
                <Link onClick={() => this.toggleNavbar()} to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link onClick={() => this.toggleNavbar()} to="/tasks">
                  Tasks
                </Link>
              </li>
            </ul>
          </div>}
      </div>
    );
    
  //   render() {
  //     const authToken = localStorage.getItem(AUTH_TOKEN)
  //     return (
  //       <div className="flex pa1 justify-between nowrap orange">
  //         <div className="flex flex-fixed black">
  //           <div className="fw7 mr1">Hacker News</div>
  //           <Link to="/" className="ml1 no-underline black">
  //             new
  //           </Link>
  //           {authToken && (
  //             <div className="flex">
  //               <div className="ml1">|</div>
  //               <Link to="/create" className="ml1 no-underline black">
  //                 submit
  //               </Link>
  //             </div>
  //           )}
  //         </div>
  //         <div className="flex flex-fixed">
  //           {authToken ? (
  //             <div
  //               className="ml1 pointer black"
  //               onClick={() => {
  //                 localStorage.removeItem(AUTH_TOKEN)
  //                 this.props.history.push(`/`)
  //               }}
  //             >
  //               logout
  //             </div>
  //           ) : (
  //             <Link to="/login" className="ml1 no-underline black">
  //               login
  //             </Link>
  //           )}
  //         </div>
  //       </div>
  //     )
  //   }
   
  }
 }

export default withRouter(HomePage);
