import { Link } from "react-router-dom";
import { UserProps } from "../types/user"
import {MdLocationPion} from "react-icons/md"

const User = ({
    login, 
    avatar_url, 
    followers, 
    following, 
    location,
}: UserProps) => {
    return 
    <div>
        <img src={avatar_url} alt={login}/>
        <h2>{login}</h2>
        <p>
            <MdLocationPion/>
            <span>{location}</span>
        </p>
        <div>
            <div>
                <p>Seguidores:</p>
                <p>{followers}</p>
            </div>
            <div>
                <p>Seguindo</p>
                <p>{following}</p>
            </div>
        </div>
        <Link to={`/repos/${login}`}>Ver os melhores projetos</Link>
    </div>
};

export default User