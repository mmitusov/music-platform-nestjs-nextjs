import burgerMainStyles from '@/styles/burger/burgerMain.module.scss'
import Link from 'next/link';

const BurgerMain = () => {
    return (
        <>
            <label className={`${burgerMainStyles.hamburgerBtn}`}>
                <span />
                <input type='checkbox'/>
                <span />
            </label>
            <div className={`${burgerMainStyles.sideMenu}`}>
                <h1>Main</h1>
                <h1><Link href="/tracks">Tracks</Link></h1>
                <h1>Albums</h1>
            </div>
        </>
    );
}
 
export default BurgerMain;