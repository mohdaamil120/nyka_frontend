import React from 'react'
import styled from 'styled-components'
import dashboard from "../Images/element-3.png"
import setting from "../Images/setting-2.png"
import analytic from "../Images/clipboard-tick.png"
import { Link,useNavigate} from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate()

  const handleLogoutClick = ()=>{
    navigate("/login")
  }
  return (
    <>
     <DIV>
      <div id="main">
          <div id="sidebar">
              <p>Nyka Dashboard</p>
              <div id='section'>
                <div>
                  <img src={dashboard} alt="" />
                  <p>Dashboard</p>
                </div>
                <div>
                  <img src={analytic} alt="" />
                  <p>Analytics</p>
                </div>
                
                  <div id="logout" onClick={handleLogoutClick}>
                    <img src={setting} alt="" />
                    <p>Logout</p>
                  </div>
              
              </div>
          </div>

          <div id='top'>
            <input type="text" placeholder='Search'/>
            <div id='frame'>
              <img src={analytic} alt="" />
              <img src={analytic} alt="" />
            </div>
          </div>

          <div id='filterbox'>
           <div id='filter'>
            <select name="" id="gender">
                <option value="">Filter By Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select name=""  id="category">
                <option value="">Filter By Category</option>
                <option value="makeup">Makeup</option>
                <option value="skincare">Skincare</option>
                <option value="haircare">Haircare</option>
              </select>
              <select name="" id="price">
                <option value="">Filter By Price</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
           </div>
            
           <div id='btn'>
              <button>ADD PRODUCT </button>
           </div> 
          </div>

          <div id='product'>

          </div>
      </div>
     </DIV> 
    </>
  )
}

const DIV = styled.div`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    // sidebar start
    #main{
        border: 1px solid lightgray;
        height: 100vh;
        background-color: #F8F8F8
    }

    #sidebar{
      position: fixed;
      background-color:#FFFFFF ;
        width: 230px;
        height: 1184px;
    }
    #sidebar > p{
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
      margin-top: 63px;
      margin-left: 18px;
      width: 203px;
      height: 36px;
      color: #013CC6;
    }
    #section{
      width: 131px;
      height: 993px;
      /* position: fixed; */
      margin-top: 56px;
      margin-left: 41px;
      padding: 0px 0px 30px 0px;
    }
    #section > div:nth-child(1){
      width: 131px;
      height: 24px;
      display: flex;
    }
    #section > div:nth-child(2){
      width: 116px;
      height: 24px;
      display: flex;
      opacity: 60%;
      margin-top: 40px;
    }
    #section > div:nth-child(3){
      width: 96px;
      height: 24px;
      display: flex;
      opacity: 60%;
      margin-top: 40px;
    }
    #section > div:nth-child(1) >p{
      width: 92px;
      height: 24px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      /* letter-spacing: 2%; */
      margin-left: 15px;
    }
    #section > div:nth-child(2) >p{
      width: 76px;
      height: 24px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      /* letter-spacing: 2%; */
      margin-left: 15px;
      /* margin-top: 65px; */
    }
    #section > div:nth-child(3) >p{
      width: 92px;
      height: 24px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      /* letter-spacing: 2%; */
      margin-left: 20px;
    }
    #logout:hover{
      cursor: pointer;
    }
    // sidebar end

    // top search bar start
    #top{
      display: flex;
      width: 75%;
      height: 52px;
      /* position: fixed; */
      margin-top: 56.1px;
      margin-left: 271px;
      justify-content: space-between;
    }
    #top >input{
      padding: 20px;
      width: 655px;
      height: 52px;
      /* background-color: #FFFFFF; */
    }
    #frame{
      display: flex;
    }
    // top search bar end

    // filterbox start
    #filterbox{
      /* border: 1px solid green; */
      margin-top: 20px;
    }
    #filter > select{
      margin-left: 80px;
    }
    #btn{
      width: 200px;
      padding:10px;
      background-color: #0E1866;
      margin-left: 1100px;
      color: #FFFFFF;
    }
    #btn:hover{
      cursor: pointer;
    }
    // filterbox end
`