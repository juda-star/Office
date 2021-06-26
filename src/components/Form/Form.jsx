import React from "react";
import "./Form.css";
import { useState } from "react";
import { useUsersContext } from "../Contaxt/Contaxt";
export default function Form() {
  const proContext = useUsersContext();

  const [valueName, setValueName] = useState({
    firstname: "",
    lastname: "",
    birth: 0,
    phone: "",
    email: "",
  });
  function onChange(e) {
    setValueName({ ...valueName, [e.target.name]: e.target.value });
  }
  const fullYear = new Date().getFullYear();
  function onClick() {
    proContext.setNewUser([...proContext.newUser, valueName]);
  }

  return (
    <>
      <form action="" className="table">
        <label for="fname">First name:</label>
        <input name="firstname" type="text" onChange={onChange} />
        <label for="lname">Last name:</label>
        <input type="text" name="lastname" onChange={onChange} />
        <label htmlFor="">Age:</label>
        <input type="text" name="phone" onChange={onChange} />
        <label htmlFor="">phone:</label>
        <input type="text" name="email" onChange={onChange} />
        <label htmlFor="">email:</label>
        <input type="text" name="birth" onChange={onChange} />
        <button type="button" onClick={onClick}>
          Add To Table
        </button>

        <button>one stay</button>
      </form>

      <table>
        <tr>
          <th>Full name</th>
          <th>Age</th>
        </tr>
        {proContext.newUser.map((users1, index) => {
          return (
            <tr className="hoverPop" key={index}>
              <td>{users1.firstname + users1.lastname}</td>
              <td>{fullYear - users1.birth}</td>
              <td className="hoverFind">{users1.phone}</td>
              <td className="hoverFind">{users1.email}</td>
            </tr>
          );
        })}
        <tr className="hoverPop">
          <td>{valueName.firstname}</td>
          <td>{fullYear - valueName.birth}</td>
          <td className="hoverFind">{valueName.phone}</td>
          <td className="hoverFind">{valueName.email}</td>
        </tr>
      </table>
    </>
  );
}
