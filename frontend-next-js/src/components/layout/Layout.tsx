import Header from "./Header";
import Player from "./player/Player";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Player />
        </>
    );
}
 
export default Layout;