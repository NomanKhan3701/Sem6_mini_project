import React from 'react'
import './Auth.scss';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Auth = () => {
	const navigate = useNavigate();
	const [signupData, setSignupData] = useState({
		email: "",
		password: "",
		type: "",
	});

	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const onSignupChange = (event) => {
		const { name, value } = event.target;
		setSignupData((prevData) => {
			return { ...prevData, [name]: value };
		});
	}
	const signUpSubmit = async (e) => {
		e.preventDefault();
		try {

		} catch (error) {
			console.log(error)
			toast.error("Something went wrong while signing up")
		}
	}

	const onChange = (event) => {
		const { name, value } = event.target;
		setLoginData((prevData) => {
			return { ...prevData, [name]: value };
		});
	}

	const submit = async (e) => {
		e.preventDefault();
		try {

		} catch (error) {
			console.log(error)
			toast.error("Something went wrong while login")
		}
	}

	let changeForm = (e) => {
		let switchCtn = document.querySelector("#switch-cnt");
		let switchC1 = document.querySelector("#switch-c1");
		let switchC2 = document.querySelector("#switch-c2");
		let switchCircle = document.querySelectorAll(".switch__circle");
		let aContainer = document.querySelector("#a-container");
		let bContainer = document.querySelector("#b-container");

		switchCtn?.classList.toggle("is-txr");
		switchCircle[0]?.classList.toggle("is-txr");
		switchCircle[1]?.classList.toggle("is-txr");

		switchC1?.classList.toggle("is-hidden");
		switchC2?.classList.toggle("is-hidden");
		aContainer?.classList.toggle("is-txl");
		bContainer?.classList.toggle("is-txl");
		bContainer?.classList.toggle("is-z200");
	}

	return (
		<div className='Container login_container padding_top_nav'>
			<div className="bg-sections">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>

			<div className="main">
				<div className="container a-container" id="a-container">
					<form className="form" id="a-form" method="" action="">
						<h2 className="form_title title">Create Account</h2>
						<input
							className="form__input"
							type="text"
							name="email"
							value={signupData.email}
							placeholder="Email Address"
							onChange={onSignupChange}
						/>
						<input
							className="form__input"
							type="password"
							name="password"
							value={signupData.password}
							placeholder="Password"
							onChange={onSignupChange}
						/>
						<input
							className="form__input"
							type="text"
							name="type"
							value={signupData.type}
							placeholder="Institute / Student / Company"
							onChange={onSignupChange}
						/>
						<button onClick={signUpSubmit} style={{ cursor: 'pointer' }} className="form__button button submit">SIGN UP</button>
					</form>
				</div>
				<div className="container b-container" id="b-container">
					<form className="form" id="b-form" method="" action="">
						<h2 className="form_title title">Sign in to Website</h2>
						<input className="form__input" type="text"
							name="email"
							value={loginData.email}
							placeholder="Email Address"
							onChange={onChange} />
						<input className="form__input" type="password"
							name="password"
							value={loginData.password}
							placeholder="Password"
							onChange={onChange} />
						<button onClick={submit} style={{ cursor: 'pointer' }} className="form__button button submit">SIGN IN</button>
					</form>
				</div>
				<div className="switch" id="switch-cnt">
					<div className="switch__circle"></div>
					<div className="switch__circle switch__circle--t"></div>
					<div className="switch__container" id="switch-c1">
						<h2 className="switch__title title">Welcome Back !</h2>
						<p className="switch__description description">To keep connected with us please login with your personal info</p>
						<button onClick={changeForm} className="switch__button button switch-btn">SIGN IN</button>
					</div>
					<div className="switch__container is-hidden" id="switch-c2">
						<h2 className="switch__title title">Hello Friend !</h2>
						<p className="switch__description description">Enter your personal details and start journey with us</p>
						<button onClick={changeForm} className="switch__button button switch-btn">SIGN UP</button>
					</div>
				</div>
			</div>


		</div>
	)
}

export default Auth;