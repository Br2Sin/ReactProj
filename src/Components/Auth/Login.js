import React, {Component, useState, useEffect} from 'react';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import $ from "jquery";

import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';


const Login = () => {  
  
    const [signID, setID] = useState("");
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const [unitcode, setUnit] = useState("");
    const [orgname, setOrgName] = useState("");
    const [email, setEmail] = useState("");
    
    const [sVal, setVal] = useState("");
    var distID = signID.charAt(0);   
    var length;
    var token;
    function handleSave(e) {
        e.preventDefault();

        const data = {
            username: signID,
            password: password,
            };

            axios.post('http://localhost:8091/api/authenticate', {
                username: signID,
                password: password
              })
              .then(function (response) {
                console.log(response.data, "data")
                localStorage.setItem('token',response.data.token);
              }).catch(function (error) {
                console.log(error);
              });

        const config = {headers: { Authorization: "Bearer "+ localStorage.getItem('token')}};

        let USER_URL = "http://localhost:8091/api/authenticateUser";
        axios.post(USER_URL, data, config)
        .then(function (response) {
            if(response.data.message=="Password Passed" && response.data.status=="OPEN"){
                // console.log(response.data)    
                window.location.href  = "http://localhost:3000/dashboard"            
            }else {
                //window.location.href  = "http://localhost:3000"
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        // axios({
        //   baseURL: USER_URL,
        //   method: "POST",
        //   data: data,
        // })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.status === 201) {
        //       // window.location.href  = "http://localhost:3000/";          
        //       let response = res.data;
        //       var content = null;
        //       content = "<table>"
        //       content += '<thead>'
        //       content += '<td>' + "Unit_Code" + '</td>';
        //       content += '<td>' + "Eng_Addr_Nm" + '</td>';
        //       content += '</thead>'
    
        //       console.log(content);
        //       for(var i=0; i<response.length; i++) {
        //         content += '<tr>'
        //         content += '<td>' + response[i].unitcode + '</td>';
        //         content += '<td>' + response[i].orgname + '</td>';
        //         content += '</tr>'
        //         console.log(response[i].username);
        //       }
        //       content += "</table>"
        //       $('#unittb').html(content);
        //     }
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //     let error_msg = "";
        //   });
  
    }

    function handleUnit(e) {
        e.preventDefault();

        const unitData = {
            unitcode
        }

        let UNIT_URL = "http://localhost:8091/api/fetchUnitCodeDtls";
        axios({
          baseURL: UNIT_URL,
          method: "POST",
          data: unitData,
        })
          .then((res) => {
            if (res.data.message === "Password Passed") {
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
            <div className ="text-center justify-content-center" >
                <div className="mb-5">
                    <img src="assets/png1.png"
                     style={{
                         width: '100%',
                         height: '80%'
                     }}
                    />
                </div>
                <form onSubmit={handleSave} className="card shadow p-3 col-sm-3 container mt-5 h-50" style={{
                    backgroundColor: 'rgba(222, 222, 222, 0.8)'
                }}>
                    <div className="mt-3">
                        <h3>Login</h3>
                    </div>
                    <div style={{display:"none"}}>
                        {
                            distID == "L" ? length = 9 : null
                        }
                        {
                            distID == "N" ? length = 13 : null
                        }
                    </div>
                    <div id="sign" className="form-group">
                        <input style={{
                                borderRadius: '20px'
                            }} onChange={e => setID(e.target.value)} minLength={length} maxLength={length} value={signID}  className="sign form-control shadow hadow-lg shadow-inset" placeholder="Sign-on ID" required
                            />                        
                    </div>  

                    <div className="form-group">
                        <input style={{ boxShadow: 'inset 0px 0px 10px rgba(0,0,0,0.5)',
                            borderRadius: '20px'
                        }} onChange={e => setPassword(e.target.value)} value={password}  className="form-control shadow hadow-lg shadow-inset" type="password" placeholder="Password" required/>

                    </div>
                    <div className="form-group input-group">
                        <input style={{
                            borderRadius: '20px'
                        }} onChange={e => setUnit(e.target.value)} value={unitcode} className="form-control shadow " placeholder="Unit Code"/>
                        <button id="unitbtn" data-toggle="modal" data-target="#myModal" className="btn">...</button>

                    </div>
                    <div className="form-group">
                        <input style={{
                            borderRadius: '20px'
                        }} onChange={e => setOrgName(e.target.value)} value={orgname} className="form-control shadow " placeholder="Name"/>
                    </div>

                    <div>
                        <button id="submitbtn" style={{
                            borderRadius: '20px' 
                        }} className="btn shadow btn-default" type="submit">submit</button>
                    </div>

                </form>

                <div className="modal fade" id="myModal" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="col-sm-2">Find</p>
                                        <input id="myInput" onChange={e => setUnit(e.target.value)} value={unitcode} className="form-control col-sm-10" placeholder="%"/>
                                    </div>
                                    <div className="modal-body">
                                        
                                        <table id="unittb" className="table table-default">
                                            <thead>
                                                <tr>
                                                    <td>Unit_Code</td>
                                                    <td>Eng_Addr_Nme</td>
                                                </tr>
                                            </thead>

                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="modal-footer">
                                        <button id="findbtn" className="btn btn-info mr-auto text-nowrap">find</button>
                                        <form onSubmit={handleUnit}>
                                            <button className="btn btn-info" type="submit" >ok</button>
                                        </form>
                                        <button className="btn btn-info" data-dismiss="modal">cancel</button>
                                    </div>
                                </div>

                            </div>
                            
                        </div>

            </div>
        )
    
}

export default Login;
