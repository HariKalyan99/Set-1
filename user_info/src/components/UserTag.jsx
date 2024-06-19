import styles from "./UserTag.module.css";

const UserTag = ({ user }) => {
  
    return (
        <div
          className={styles.mainTag}
        >
          <img src={user.picture} alt={`${user.name.first}-user`} height={50}  className={styles.imgContainer}/>
          <div
           className={styles.userTag}
          >
            <h4>{`${user.name.first} ${user.name.last}`}</h4>
            <span style={{fontSize: "0.8rem"}}>{`${user.location.city}, ${user.location.country}`}</span>
          </div>
        </div>
      );
};

export default UserTag;
