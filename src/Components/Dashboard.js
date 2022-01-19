import React, {Component} from 'react';


class Dashboard extends Component{
    render(){
        return(
            <div id="main" className="text-center justify-content-center" style={{
                background: 'url("assets/png3.png")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                height: '800px'
            }}>

<nav className="navbar navbar-expand-sm justify-content-center bg-white navbar-white">
                
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" > Object </a>
                        <ul style={{height:'700px', overflowY:'auto'}} className="dropdown-menu  overflow-auto" aria-labelledby="navbarDropdownMenuLink">
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">A</a>
                                <ul className="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Submenu 1</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Subsubmenu1</a></li>
                                            <li><a className="dropdown-item" href="#">Subsubmenu1</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Submenu 2</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Subsubmenu2</a></li>
                                            <li><a className="dropdown-item" href="#">Subsubmenu2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="#">Accounts</a></li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Adjustments</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="#">Allocate Mit Nr</a></li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Ammunition</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">B</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="#">Basic item info</a></li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Batch Control items</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="#">Bin</a></li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">C</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="#">Call-in Notice</a></li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Code Tables</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="#">Controlled Ledger</a></li>
                            <li><a className="dropdown-item" href="#">Config Slots</a></li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">D</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Detect Data</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="#">Detect Status</a></li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Demand</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="#">Department</a></li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Distribution</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">E</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">F</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="#">FCN information</a></li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Field Support</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">G</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">H</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Hired Equipment</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">I</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="#">Inventory Reg</a></li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">issues</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">J</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Jobs</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">K</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">L</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="#">Ledger</a></li>
                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">M</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="#">Main Equipment</a></li>
                            <li><a className="dropdown-item" href="#">Main Concept</a></li>
                            
                            
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" href="#">Query</a>
                        <ul style={{height:'700px', overflowY:'auto'}} className="dropdown-menu  overflow-auto" aria-labelledby="navbarDropdownMenuLink"></ul>
                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">A</a>
                        <ul className="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Submenu</a></li>
                        <li><a className="dropdown-item" href="#">Submenu0</a></li>
                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Submenu 1</a>
                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Subsubmenu1</a></li>
                                            <li><a className="dropdown-item" href="#">Subsubmenu1</a></li>

                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Submenu 2</a>
                                    <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Subsubmenu2</a></li>
                                            <li><a className="dropdown-item" href="#">Subsubmenu2</a></li>
                                        </ul>
                                     </li>        
                                  </ul>
                                    </li>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Active WO</a></li>
                                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Adjustments</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Submenu</a></li>
                                    <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                </ul>
                            </li>
                            
                    <li className="nav-item">
                    <a className="nav-link" href="#">Report</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Mng info</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Batch</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Utilities</a>
                        <ul style={{height:'630px', overflowY:'auto'}} className="dropdown-menu  overflow-auto" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Batch Sched</a></li>
                            <li><a className="dropdown-item" href="#">Calmis Info Message</a></li>
                            <li><a className="dropdown-item" href="#">Comm Man Link</a></li>
                            <li><a className="dropdown-item" href="#">Comm User Admin</a></li>
                            <li><a className="dropdown-item" href="#">Data Management</a></li>
                            <li><a className="dropdown-item" href="#">Error log</a></li>
                            <li><a className="dropdown-item" href="#">Man Migration</a></li>
                            <li><a className="dropdown-item" href="#">Pmt Queues</a></li>
                            <li><a className="dropdown-item" href="#">Pmt Res Sched</a></li>
                            <li><a className="dropdown-item" href="#">Request Manager</a></li>
                            <li><a className="dropdown-item" href="/resetpassword">Reset own Password</a></li>
                            <li><a className="dropdown-item" href="#">Reset other Password</a></li>
                            <li><a className="dropdown-item" href="#">Role Admin</a></li>
                            <li><a className="dropdown-item" href="#">Structure Maint</a></li>
                            <li><a className="dropdown-item" href="#">Tasks per User</a></li>
                            <li><a className="dropdown-item" href="#">Training Reps</a></li>
                            <li><a className="dropdown-item" href="#">User Admin</a></li>
                            <li><a className="dropdown-item" href="#">User Tasks</a></li>
                            <li><a className="dropdown-item" href="#">User Registration</a></li>                                                               
                        </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">log oN</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Log off</a>
                    </li>
                </ul>
                </nav>

                <div style={{
                    backgroundColor: "grey",
                    color: "white" 
                }} className="text-center">
                    <h3 >[CLAMIS MAIN MENU @ 010622 (A 1 SSB INGIDMS)] [L01075407 @ AUNT]</h3>
                </div>

                    <h2 style={{
                        color:"#5491af",
                        marginLeft: "20px",
                        marginTop: "-10px",
                        paddingTop: "20px"
                    }} className="text-left" >Choose your Selection from the Main menu</h2>
                
                <div style={{
                    height: '75%'
                }}></div>

                <marquee className="align-text-bottom">
                    <h3>Welcome</h3>
                </marquee>
          </div>
        )
    }
}

export default Dashboard;