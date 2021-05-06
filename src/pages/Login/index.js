import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button, Input } from 'antd';

import { ROUTES } from 'config/routes';
import { FORM_ERRORS } from 'config/errors';
import { login } from 'store/actions/auth.actions';
import './index.scss';

const validateMessages = {
  required: FORM_ERRORS.required,
  types: {
    email: FORM_ERRORS.types.email
  }
};

const prefixCls = 'login';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values) => {
    dispatch(login({ payload: values, successCb: () => history.push(ROUTES.HOME_PAGE) }));
  };

  return (
    <div className={prefixCls}>
      <Form onFinish={onFinish} validateMessages={validateMessages}>
        Admin Panel
        <Form.Item name={['username']} rules={[{ type: 'email', required: true }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name={['password']} rules={[{ required: true }]}>
          <Input type="password" placeholder="Пароль" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" loading={false} htmlType="submit">
            Enter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
