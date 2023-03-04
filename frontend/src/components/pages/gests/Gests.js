import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Navbar from "../../navigation/navbar/Navbar";

const Gests = () => {
  const [gests, setGests] = useState([]);

  useEffect(() => {
    const fetchGests = async () => {
      const { data } = await axios.get("/api/gests/");

      setGests(data);
    };

    fetchGests();
  }, []);

  return (
    <div className='home-container'>
      <Sidebar/>
      <div  className="home-container-screen">
        <Navbar/>
        <table className="gest-table">
          <tr>
            <th>room number</th>
            <th>full name</th>
            {/* <th>surname</th> */}
            <th>id number</th>
            <th>phone number</th>
            <th>payment type</th>
            <th>price</th>
            <th>entery date</th>
            <th>check out date</th>
          </tr>
          {gests.map((gest) => (
            <tr key={gests._id}>
              <td>{gest.room_number}</td>
              <td>
                {gest.name} {gest.surname}
              </td>
              {/* <td>{gest.surname}</td> */}
              <td>{gest.id_number}</td>
              <td>{gest.phone_number}</td>
              <td>{gest.payment_method}</td>
              <td>{gest.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Gests;
