import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"

const Messages = () => {
	const { messages, loading } = useGetMessages()
	return (
		<div className="px-4 flex-1 overflow-auto">
			{!loading &&
				messages.length > 0 &&
				messages.map(message => (
					<div key={message._id}>
						<Message message={message} />
					</div>
				))}
		</div>
	)
}

export default Messages
