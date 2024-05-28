import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login">
      <div className="wrap">
        {/* 로그인 모듈 시작 */}
        <div className="user">
          {/* 로고 */}
          <div className="logo">
            <a href="#"><img src="https://i.ibb.co/wz4wSKx/image.png" alt="" /></a>
          </div>


          {/* 로그인 폼 */}
          <div className="form-wrap">
            {/* 탭 */}
            <div className="tabs">
              <h3 className="login-tab"><a className="log-in active" href="#login-tab-content"><span>Login</span></a></h3>
            </div>
            {/* 탭 내용 */}
            <div className="tabs-content">
              {/* 로그인 탭 내용 */}
              <div id="login-tab-content" className="active">
                <form className="login-form" onSubmit={handleLogin}>
                  <input type="text" className="input" autoComplete="off" placeholder="Email or Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" className="input" autoComplete="off" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <input type="checkbox" className="checkbox" checked id="remember_me" />
                  <label htmlFor="remember_me">Remember me</label>
                  <input type="submit" className="button" value="Login" />
                </form>
                <div className="help-action">
                  <p><i className="fa fa-arrow-left" aria-hidden="true"></i><a className="forgot" href="#">Forgot your password?</a></p>
                </div>
              </div>
              {/* 회원가입 탭 내용 */}
              <div id="signup-tab-content">
                <form className="signup-form" action="" method="post">
                  <input type="email" className="input" autoComplete="off" placeholder="Email" />
                  <input type="text" className="input" autoComplete="off" placeholder="Username" />
                  <input type="password" className="input" autoComplete="off" placeholder="Password" />
                  <input type="submit" className="button" value="Sign Up" />
                </form>
                <div className="help-action">
                  <p>By signing up, you agree to our</p>
                  <p><i className="fa fa-arrow-left" aria-hidden="true"></i><a className="agree" href="#">Terms of service</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 로그인 모듈 끝 */}
      </div>
    </div>
  );
}

export default App;
