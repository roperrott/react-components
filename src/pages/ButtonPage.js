import { GoBell, GoRocket, GoRuby, GoSmiley, GoSquirrel} from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage(){
    const handleClick= () => {
        console.log('clicked');
    }
    return <div>
        <div>
            <Button primary rounded onClick={handleClick}><GoBell/> suscribe</Button>
        </div>
        <div>
            <Button secondary><GoRocket/> Buy Now!</Button>
        </div>
        <div>
            <Button success > <GoRuby/> See Deal!</Button>
        </div>
        <div>
            <Button warning ><GoSmiley/>Test4</Button>
        </div>
        <div>
            <Button danger onMouseEnter={handleClick}><GoSquirrel/>Test5</Button>
        </div>
    </div>
};

export default ButtonPage;