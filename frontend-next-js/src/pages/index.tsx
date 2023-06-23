import homeStyles from '@/styles/pages/homePage.module.scss'

const HomePage = () => {
    return (
        <>
            <div className={`${homeStyles.homeContainer}`}>
                <h1>Welcome</h1>
                <h3>Best music library!</h3> 
            </div>
        </>
    );
}
 
export default HomePage;