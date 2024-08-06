import peopleList from "../list_of_people";
import { useState } from "react";
import styles from "./style.module.css"
function List() {
  const [peoples, setPeoples] = useState(peopleList);
  const [removedPeoples, setRemovedPeoples] = useState([]);

  function onRemove(id) {
    const removedPerson = peoples.find((person) => person.id === id);

    setPeoples(peoples.filter((person) => person.id !== id));

    setRemovedPeoples([...removedPeoples, removedPerson]);
  }

  function onAdd(id) {
    const addedPerson = removedPeoples.find((person) => person.id === id);

    setRemovedPeoples(removedPeoples.filter((person) => person.id !== id));

    setPeoples([...peoples, addedPerson]);
  }

  return (
    <div className={styles.listInviteesContainerOll} >
      <div  className={styles.listInviteesContainer}>
      <h2>Active Invitees</h2>
      <ul className={styles.listInvitees}>
        {peoples.map((el) => (
          <li key={el.id} className={styles.listInviteesEl}>
            name: {el.name}, age: {el.age}{" "}
            <button className={styles.listInviteesBtn} style={{width:"80px"}} onClick={() => onRemove(el.id)}>Remove</button>
          </li>
        ))}
      </ul>
      </div>
      <div className={styles.listInviteesContainer}>
      <h2>Removed Invitees</h2>
      <ul className={styles.listInvitees}>
        {removedPeoples.map((el) => (
          <li key={el.id} className={styles.listInviteesEl}>
            name: {el.name}, age: {el.age}{" "}
            <button className={styles.listInviteesBtn} style={{width:"50px"}} onClick={() => onAdd(el.id)}>Add</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default List;
