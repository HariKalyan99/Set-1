import styles from './Widget.module.css'

const Widget = ({ searchUser }) => {
  const handleChange = (values) => {
    searchUser(values);
  };

  return (
    <header
     className={styles.widget}
    >
      <div className={styles.widgetHead}>
      <h1>User List</h1>
      <p>Search by name/location</p>
      </div>
      <div className={styles.widgetInput}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Widget;
