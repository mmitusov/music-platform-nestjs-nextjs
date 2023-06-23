import burgerMainStyles from '@/styles/burger/burgerMain.module.scss'

const BurgerMain = () => {
    return (
        <div className={`${burgerMainStyles.mainContainer}`}>
            <label className={`${burgerMainStyles.hamburgerBtn}`}>
                <span />
                <input type='checkbox'/>
                <span />
            </label>
            <div className={`${burgerMainStyles.sideMenu}`}>
                
            </div>
        </div>
    );
}
 
export default BurgerMain;