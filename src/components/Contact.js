import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact(props) {
	const { history } = props;
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		const service_id = 'default_service';
		const template_id = 'personal_webiste';
		const user_id = 'user_P2E9svDjgNAKJ84uNKh2H';
		emailjs.sendForm(service_id, template_id, e.target, user_id).then(
			result => {
				alert(
					'Message was sent successfully! I will get back to you as soon as I can!'
				);
				history.push('/');
			},
			error => {
				alert("Sorry, something happened and I wasn't able to send the message...");
			}
		);
	};

	return (
		<div className="contact">
			<div className="contact--header">Contact</div>
			<form className="contact--form" onSubmit={handleSubmit}>
				<div className="contact--field">
					<input
						name="from_name"
						value={name}
						type="text"
						placeholder="Name"
						required
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div className="contact--field">
					<input
						name="from_email"
						value={email}
						type="email"
						placeholder="Email"
						required
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="contact--field">
					<input
						name="subject"
						value={subject}
						type="text"
						placeholder="Subject"
						required
						onChange={e => setSubject(e.target.value)}
					/>
				</div>
				<div className="contact--field">
					<textarea
						name="message_html"
						value={message}
						type="text"
						placeholder="Message"
						required
						rows="4"
						onChange={e => setMessage(e.target.value)}
					/>
				</div>
				<button className="contact--button" type="submit">
					{'<Send Message />'}
				</button>
			</form>
		</div>
	);
}
