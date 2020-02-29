import React, { useState } from 'react';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<div className="contact">
			<div className="contact--header">Contact</div>
			<form className="contact--form" onSubmit={handleSubmit}>
				<div className="contact--field">
					{/* <label className="contact--label" htmlFor="name">
						Name
					</label> */}
					<input
						name="name"
						value={name}
						type="text"
						placeholder="Name"
						required
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div className="contact--field">
					{/* <label className="contact--label" htmlFor="email">
						Email
					</label> */}
					<input
						name="email"
						value={email}
						type="email"
						placeholder="Email"
						required
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="contact--field">
					{/* <label className="contact--label" htmlFor="message">
						Message
					</label> */}
					<textarea
						name="message"
						value={message}
						type="text"
						placeholder="Message"
						required
						rows="4"
						onChange={e => setMessage(e.target.value)}
					/>
				</div>
				<button className="contact--button" type="submit">
					{'<Send Message/>'}
				</button>
			</form>
		</div>
	);
}
