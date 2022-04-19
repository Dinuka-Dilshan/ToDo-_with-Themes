import { useTheme } from '../context/ThemeProvider';
import styles from './Header.module.css';


const Header = ({text, caps})=>{

    const isDark = useTheme();

    const dynamicStyle = {
        backgroundColor:isDark?'#374151':'',
        color:isDark?'#F6F7F9':''
    }


    return <div className={styles.wrapper} style={dynamicStyle}>
        {caps?text.toUpperCase():text}
    </div>
}

export default Header;