import React from "react";
import Button, {ButtonSize, ButtonType} from '@components/button'

const Login: React.FC = (props) => {
  return (
    <div className="sz-login">
      <div className="sz-login__body">
          <div className="sz-login__background"></div>
          <div className="sz_login__form">
              <Button placeholder="123" id="dd" btnType={ButtonType.primary} size={ButtonSize.large}><div>123</div></Button>
          </div>
      </div>
      <div className="sz-login__footer">
        版权所有：成都中科大旗软件股份有限公司
      </div>
    </div>
  );
};

export default Login;
