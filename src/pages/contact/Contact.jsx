import React from "react";

import "./contact.scss";
import MyMap from "./Map";
import {Button} from "@mui/material";

export default function App() {
  return (
      <div className="contact-container">
        <div className="contact-title">联系我们</div>
        <div className="contact-description">
          欢迎向我们提出建议
        </div>
        <div className="contact-block">
          <div className="block-1">
            <div className="address">
              <i className="fas fa-map-marker-alt"></i>
              <div className="address-details">
                <p>Location</p>
                <p>B22 Bakers Street, Glasgow, Scotland</p>
              </div>
            </div>
            <div className="email">
              <i className="fas fa-envelope"></i>
              <div className="email-details">
                <p>Email</p>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="phone">
              <i className="fas fa-phone-alt"></i>
              <div className="phone-details">
                <p>Call</p>
                <p>+1 2222 2222 22</p>
              </div>
            </div>

            <div className="map">
              <MyMap/>
            </div>
          </div>
          <div className="block-2">
            <form action="#">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">姓名</label>
                  <input type="text" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">邮箱</label>
                  <input type="email" id="email" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">主题</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-group">
                <label htmlFor="Message">内容</label>
                <textarea></textarea>
              </div>
              <div className="btn-container">
                <Button>提交</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
