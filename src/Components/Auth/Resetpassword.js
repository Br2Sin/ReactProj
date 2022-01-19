import React, {Component, useState, useEffect} from 'react';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import $ from "jquery";
import {Link} from 'react-router-dom'

import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';



const Resetpassword = () => {  
  
  const [signID, setID] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [unitcode, setUnit] = useState("");
  const [orgname, setOrgName] = useState("");
  const [email, setEmail] = useState("");
    
  const curTime = new Date().toLocaleString();
    function handleSave(e) {
    e.preventDefault();

        const data = {
        signID,
        password,
        };

        let USER_URL = "http://localhost:8091/api/v1/users/";
        axios({
        baseURL: USER_URL,
        method: "POST",
        data: data,
        })
        .then((res) => {
            if (res.status === 201) {
            // window.location.href  = "http://localhost:3000/";          
            let response = res.data;
            var content = null;
            content = "<table>"
            content += '<thead>'
            content += '<td>' + "Unit_Code" + '</td>';
            content += '<td>' + "Eng_Addr_Nm" + '</td>';
            content += '</thead>'
    
            for(var i=0; i<response.length; i++) {
                content += '<tr>'
                content += '<td>' + response[i].unitcode + '</td>';
                content += '<td>' + response[i].orgname + '</td>';
                content += '</tr>'
            }
            content += "</table>"
            $('#unittb').html(content);
            }
        })
        .catch((error) => {
            let error_msg = "";
            Object.keys(error.response.data).forEach(function (e) {
            error_msg += e + ": " + error.response.data[e][0] + " - ";
            });
            toast(error);
        });
    
        }

    function handleUnit(e) {
        e.preventDefault();
        const unitData = {
            unitcode
        }

        let UNIT_URL = "http://localhost:8091/api/v1/unitvalidate/";
        axios({
          baseURL: UNIT_URL,
          method: "POST",
          data: unitData,
        })
          .then((res) => {
            if (res.status === 201) {
              window.location.href  = "http://localhost:3000/dashboard";          
              let response = res.data;   
            }
          })
          .catch((error) => {
            let error_msg = "";
            Object.keys(error.response.data).forEach(function (e) {
              error_msg += e + ": " + error.response.data[e][0] + " - ";
            });
            toast(error);
          });
      
    }

    $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#unittb tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
    
        return(
            <div id="main" className="text-center justify-content-center" style={{
                background: 'url("assets/png3.png")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                marginTop: "-10px",
                width: '100%',
                height: '800px'
            }}>

<nav className="navbar navbar-expand-sm justify-content-center bg-white navbar-white indigo">
                
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
                    <h4 style={{marginLeft:"100px"}}>{curTime}</h4>
                </ul>
                </nav>
                <div style={{
                    backgroundColor: "grey",
                    color: "white" 
                }} className="text-center">
                    <h3 >[CLAMIS MAIN MENU @ 010622 (A 1 SSB INGIDMS)] [L01075407 @ AUNT]</h3>
                </div>


                <div className="form-inline cal-md-12" style={{height:"15%"}}>
                    
                </div>
                <form onSubmit={handleSave} className="form-inline card shadow p-3 col-sm-6 container" style={{
                    backgroundColor: 'rgba(222, 222, 222, 0.8)',
                    paddingTop: "100px"
                }}
                >
                        <ul className="nav mb-5"  style={{marginLeft: "-90%"}}>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" > File </a>
                                <ul className="dropdown-menu  overflow-auto" aria-labelledby="navbarDropdownMenuLink">
                                    <li className="dropdown-submenu"><a className="dropdown-item" href="#">exit</a></li>
                                </ul>
                            </li>
                        </ul>

                    <div className="text-left form-inline mb-5">
                        <strong style={{marginLeft:"-20%"}}>LSPOPASQ</strong>
                        <strong style={{fontSize:"40px", marginLeft:"20%"}}>Reset Password</strong>

                    </div>
                    
                    <div className="form-group mb-4 col-md-12">
                        <h3 className="col-md-4">Sign on ID</h3>
                        
                        <input style={{
                            borderRadius: '20px'
                        }} className="col-md-8 form-control shadow hadow-lg shadow-inset" placeholder="L01075407" disabled
                        />                        
                    </div>

                    <div className="form-group mb-4 col-md-12">
                        <h3 className="col-md-4">Current Password</h3>
                        <input style={{ boxShadow: 'inset 0px 0px 10px rgba(0,0,0,0.5)',
                            borderRadius: '20px'
                        }} onChange={e => setPassword(e.target.value)} value={password}  className="col-md-8 form-control shadow hadow-lg shadow-inset" type="password" placeholder="Current Password" required/>

                    </div>
                    <div className="form-group mb-4 col-md-12">
                        <h3 className="col-md-4">New Password</h3>
                        <input style={{
                            borderRadius: '20px'
                        }} onChange={e => setUnit(e.target.value)} value={unitcode} className="col-md-8 form-control shadow " type="password" placeholder="New Password"/>
                    </div>
                    <div className="form-group mb-4 col-md-12">
                        <h3 className="col-md-4">Confirm Password</h3>
                        <input style={{
                            borderRadius: '20px'
                        }} onChange={e => setOrgName(e.target.value)} value={orgname} className="col-md-8 form-control shadow " type="password" placeholder="Confirm Password"/>
                    </div>

                    <div>
                        <button style={{
                            borderRadius: '20px',
                            opacity: "0.6" ,
                            color: "white",
                            backgroundColor: "rgb(50, 50, 50)"
                        }} className="btn btn-lg shadow" type="submit">save</button>
                        <Link to="/dashboard" className="btn ml-5 shadow btn-lg"
                        style={{
                            borderRadius: '20px',
                            opacity: "0.6" ,
                            color: "white",
                            backgroundColor: "rgb(100, 100, 100)"
                        }}> cancel

                        </Link>
                    </div>

                </form>

            </div>
        )
    
}

export default Resetpassword;
