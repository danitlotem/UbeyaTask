import './App.css';
import {useSelector} from 'react-redux';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

function App() {
	const massagesState = useSelector((state) => {
		return state.massages;
	});

	const renderListMsg = () => {
		return massagesState.map((item, index) => {
			return (
				<div key={`msg_${index}`} style={{width: '100%'}}>
					<div className="message-block">
						{index % 2 ? (
							<MyMessage message={item} />
						) : (
							<TheirMessage message={item} />
						)}
					</div>
				</div>
			);
		});
	};
	return (
		<div>
			<div className="chat-title"> Chat </div>
			<div className="chat-subtitle">User1, User2</div>
			<div className="chat-feed">
				<div style={{height: '50px'}} />
				{renderListMsg()}
			</div>
			<div
				className="message-form-container"
				style={{
					top: 540,
					height: 50,
					position: 'absolute',
				}}
			>
				<MessageForm />
				{/* <SendIcon className="send-icon" /> */}
			</div>
		</div>
	);
}

export default App;
