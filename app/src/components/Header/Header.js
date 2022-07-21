import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/');
      }
  return (
    <div>
		<header className="header">
			<div className="header-inner flex space-between items-center no-column">
				<div className="left flex items-center">
					<div className="logo"><a href="index.html"></a></div>
					<div className="navigation">
						<nav className="main-nav">
							<ul className="list-unstyled">
								<li className='home' onClick={handleClick}><a href="#0">Home</a></li>
							</ul>
						</nav>
						<a  href="" className="responsive-menu-open">
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
		                </a>
					</div> 
				</div>		
				<div className="right flex items-center">
					<div className="account-links">
						<a className="register-link"href="#0">Register</a>
						<a className="sign-in-link" href="#0">Sign in</a>	
					</div>	
				</div> 
			</div> 
		</header> 

	
		<div className="responsive-menu">			
			<nav className="responsive-nav"></nav> 
		</div> 
    </div>
  )
}
export default Header;