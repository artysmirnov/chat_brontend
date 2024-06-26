import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation"

const Message = ({ message }) => {
	const { authUser } = useAuthContext()
	const { selectedConversation } = useConversation()
	const fromMe = message.senderId === authUser._id
	const chatClassName = fromMe ? "chat-end" : "shat-start"
	const profilePic = fromMe
		? authUser.profilePic
		: selectedConversation?.profilePic
	const bubbleBgColor = fromMe ? "bg-blue-500 " : ""
	return (
		<div className={`chat ${chatClassName}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src={profilePic} alt="user avatar" />
				</div>
			</div>
			<div className={`chat-bubble pb-2 ${bubbleBgColor}`}>
				{message.message}
			</div>
			<div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
				{message.createdAt}
			</div>
		</div>
	)
}

export default Message
