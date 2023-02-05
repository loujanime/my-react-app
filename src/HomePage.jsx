import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
    const [code, setCode] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${code}`);
        
    }
    return(
        <>
            <div className="home-page">
                <img className="home-page-image" src="https://i.ibb.co/M6TW0m0/logo-Transparant.png" alt="minute-anime" border="0" />
                <div className="home-page-content">
                    <div className="home-page-title">
                        <span className="home-page-title-text">CODE PRIVÉ</span>
                    </div>
                    <div className="home-page-form">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Code" value={code} onChange={(e) => setCode(e.target.value)} />
                            <button type="submit">ENTRER</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage