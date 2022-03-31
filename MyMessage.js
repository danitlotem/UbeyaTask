import React from 'react';

const MyMessage = (props) => {
	return (
		<div
			className="message"
			style={{
				float: 'right',
				marginRight: '18px',
				color: 'white',
				backgroundColor: '#75bedF',
			}}
		>
			<div style={{fontWeight: 'bold'}}>user1</div>
			{props.message}
		</div>
	);
};

export default MyMessage;
