import burgerMainStyles from '@/styles/burger/burgerMain.module.scss'
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useRef } from 'react';

const BurgerMain = () => {
    const checkbox = useRef(null)

    const togleCheckbox = () => {
        checkbox.current.click()
    }

    return (
        <>
            <label className={`${burgerMainStyles.hamburgerBtn}`}>
                <span />
                <input type='checkbox' ref={checkbox}/>
                <span />
            </label>
            <div className={`${burgerMainStyles.sideMenu}`}>
                <div onClick={togleCheckbox}>
                    <HomeIcon color="primary" />
                    <h1><Link href="/">Main</Link></h1>
                </div>
                <div onClick={togleCheckbox}>
                    <MusicNoteIcon color="primary" />
                    <h1><Link href="/tracks">Tracks</Link></h1>
                </div>
                {/* <div onClick={togleCheckbox}>
                    <LibraryMusicIcon color="primary" />
                    <h1>Albums</h1>
                </div> */}
            </div>
        </>
    );
}
 
export default BurgerMain;