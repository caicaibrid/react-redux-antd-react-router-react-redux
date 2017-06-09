import React,{Component} from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { login_in,login_out } from  '../../actions/login'
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
import "./login.css"
import Logo from "../logo/Logo"

class LoginForm extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values,this);
                const {dispatch} = this.context.store;
				dispatch(login_in(values))
            }
        });
    }
    componentDidMount(){
        const {dispatch} = this.context.store;
        dispatch(login_out())
	}
    render (){
        const { getFieldDecorator } = this.props.form;
        const {loginState,username} = this.props;
        return (
			<div id="login">
				<div className="login animated slideInDown">
					<Logo />
					<Form id="components-form-demo-normal-login" onSubmit={this.handleSubmit} className="login-form">
						<FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
								<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                            )}
						</FormItem>
						<FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
								<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                            )}
						</FormItem>
						<FormItem >
							<Button disabled={ loginState===0?false:true } type="danger" htmlType="submit" className="login-form-button">
								{ loginState===0?"Log in":username }
							</Button>
						</FormItem>
						<div className="login-height">Or <span className="danger">忘记密码 / 重置账号</span> <br/> 请联系管理员18655232222 / aaa@hotmial.com</div>
					</Form>
				</div>
			</div>
        );
	}
}
const Login = Form.create()(LoginForm);
LoginForm.contextTypes  = {
	store:PropTypes.object
}

function mapStateToProps(reducerAll){
    let {userInfo} = reducerAll;
    return userInfo
}


export default connect(mapStateToProps)(Login)
