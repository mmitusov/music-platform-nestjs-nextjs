import burgerMainStyles from '@/styles/burger/burgerMain.module.scss'
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const BurgerMain = () => {
    return (
        <>
            <label className={`${burgerMainStyles.hamburgerBtn}`}>
                <span />
                <input type='checkbox'/>
                <span />
            </label>
            <div className={`${burgerMainStyles.sideMenu}`}>
                <div>
                    <HomeIcon color="primary" />
                    <h1>Main</h1>
                </div>
                <div>
                    <MusicNoteIcon color="primary" />
                    <h1><Link href="/tracks">Tracks</Link></h1>
                </div>
                <div>
                    <LibraryMusicIcon color="primary" />
                    <h1>Albums</h1>
                </div>
            </div>
        </>
    );
}
 
export default BurgerMain;