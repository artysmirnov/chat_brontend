import { TiMessage } from "react-icons/ti"
import { useAuthContext } from "../../context/AuthContext"

const NoChatSelected = () => {
	const { authUser } = useAuthContext()
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
				<p>Welcom {authUser.fullName}</p>
				<p>Select chat</p>
				<TiMessage className="text-3xl md:text-6xl text-center"></TiMessage>
			</div>
		</div>
	)
}
export default NoChatSelected
