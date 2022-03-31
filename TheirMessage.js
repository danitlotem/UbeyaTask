import React from 'react';
import {useSelector} from 'react-redux';

function TheirMessage(props) {
	const isTheirMsg = useSelector((state) => state.isMyMessage);
	return (
		<div className="message-row">
			<div
				className="message"
				style={{
					float: 'left',
					backgroundColor: '#CDEAE2',
					marginLeft: isTheirMsg ? '4px' : '48px',
				}}
			>
				<div style={{fontWeight: 'bold'}}>user2</div>
				{props.message}
			</div>
		</div>
	);
}

export default TheirMessage;
