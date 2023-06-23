import headerStyles from '@/styles/layout/header.module.scss'
import BurgerMain from '../burger/BurgerMain';

const Header = () => {
    return (
        <div className={`${headerStyles.mainContainer}`}>
            <BurgerMain />
        </div>
    );
}
 
export default Header;