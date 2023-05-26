import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import { getUsers } from "../../Redux/Actions/getUsers";
import Maps from "../../Components/Maps/Maps";
import ChatBox from "../../Components/ChatBox";

export default function Profile() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  const UsersState = useSelector((state) => state.getUsers.users);

  const userId = JSON.parse(localStorage.getItem("userId"));

  const user = UsersState.filter((user) => user.id === userId);
  // console.log(user);

  return (
    <React.Fragment>
      <div className="profile-container">
        {user && (
          <div className="profile-row">
            <div className="thin-col">
              <div className="details-col">
                <img src={user[0]?.profilepicture} alt="" />
                <h2 className="profile-name">{user[0]?.name}</h2>
                <h5 className="profile-details">
                  Username :{" "}
                  <span className="thick-item">{user[0]?.username}</span>
                </h5>
                <h5 className="profile-details">
                  e-mail : <span className="thick-item">{user[0]?.email}</span>
                </h5>
                <h5 className="profile-details">
                  phone : <span className="thick-item">{user[0]?.phone}</span>
                </h5>
                <h5 className="profile-details">
                  website :{" "}
                  <span className="thick-item">{user[0]?.website}</span>
                </h5>
              </div>
              <div className="company-details">
                <h5 className="profile-details">
                  Company Name:{" "}
                  <span className="thick-item">{user[0]?.company.name}</span>
                </h5>
                <h5 className="profile-details">
                  CatchPhrase:{" "}
                  <span className="thick-item">
                    {user[0]?.company.catchPhrase}
                  </span>
                </h5>
                <h5 className="profile-details">
                  bs: <span className="thick-item">{user[0]?.company.bs}</span>
                </h5>
              </div>
            </div>
            <div className="wider-col">
              <h3 className="head">Address</h3>
              <div className="thin-col" style={{ borderRight: "none" }}>
                <h5 className="profile-details">
                  Street:{" "}
                  <span className="thick-item">{user[0]?.address.street}</span>
                </h5>
                <h5 className="profile-details">
                  Suite:{" "}
                  <span className="thick-item">{user[0]?.address.suite}</span>
                </h5>
                <h5 className="profile-details">
                  City:{" "}
                  <span className="thick-item">{user[0]?.address.city}</span>
                </h5>
                <h5 className="profile-details">
                  Zip Code:{" "}
                  <span className="thick-item">{user[0]?.address.zipcode}</span>
                </h5>
              </div>
              <Maps />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
