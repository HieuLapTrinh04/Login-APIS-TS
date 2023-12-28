import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.clear()
        navigate('/login')
    }
    return <div>
        <img src="https://bizweb.dktcdn.net/100/330/208/files/hinh-nen-may-tinh-4k-thien-nhien-2.jpg?v=1652432247728" alt="" className="w-full h-screen" />
        <button onClick={handleClick} className="absolute top-96 left-auto bg-blue-400 rounded-lg w-52 h-11">Go login</button>
    </div>
}
export default Home;