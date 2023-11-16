import React, { Component } from "react";
import icon from "./Images/icon.png";
import "./Headers.css";

export default class Headers extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <div className="main-Header">
            <div className="Laungage">
              {/* <select name="LaungageT" id="LaungageT">
                <option value="English">English</option>
                <option value="English">English</option>
                <option value="English">English</option>
              </select> */}
              <div className="laungage1">
                English &nbsp; <img src={icon} alt="icon" style={{width:"14px"}} />
              </div>
            </div>
            <div className="Volunteer">Volunteer</div>
            <div className="Careers">Careers</div>
          </div>
        </div>
      </div>
    );
  }
}
