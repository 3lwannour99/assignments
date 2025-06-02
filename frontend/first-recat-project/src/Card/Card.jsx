import pic from "../assets/pic.jpg"
import styles from './card.module.css'


function Card(){
return(
    <div className={styles.main} >
    <div className={styles.card}>
        <img src={pic} alt="profile pic"></img>
        <h2>nour ghannam</h2>
        <p>engineer</p>
    </div>
    <div className={styles.card}>
        <img src={pic} alt="profile pic"></img>
        <h2>nour ghannam</h2>
        <p>engineer</p>
    </div><div className={styles.card}>
        <img src={pic} alt="profile pic"></img>
        <h2>nour ghannam</h2>
        <p>engineer</p>
    </div>
    </div>
)
}
export default Card;