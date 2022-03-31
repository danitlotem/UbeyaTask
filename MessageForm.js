import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

const MessageForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch({type: 'MESSAGE_SENT', newMessage: value});
		setValue('');
	};
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<form className="message-form" onSubmit={handleSubmit}>
			<input
				className="message-input"
				placeholder="Send a message ..."
				value={value}
				onChange={handleChange}
				onSubmit={handleSubmit}
			/>
		</form>
	);
};

export default MessageForm;
