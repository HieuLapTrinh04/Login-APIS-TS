import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate(-1);

    const name = localStorage.getItem('loggedUser')
    return <div>
        <h1>Day la trang about</h1>
        <h2>Xin moi quay lai trang truoc {name}</h2>
        <button onClick={handleClick} className="m-3 bg-green-400 rounded-lg w-52 h-11">Go back</button>
    </div>
}
export default About;