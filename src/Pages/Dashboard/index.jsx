import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import { getUsers } from "../../Redux/Actions/getUsers";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();

  const UsersState = useSelector((state) => state.getUsers);

  const onClickAccount = (id) => {
    localStorage.setItem("userId", JSON.stringify(id));
  };

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <React.Fragment>
      <div className="fluid-background">
        <div className="white-box">
          {/* users list */}
          <div className="head-container">
            <div className="head">Select an account</div>
          </div>
          {UsersState && UsersState.loading ? (
            <h1>Loading...</h1>
          ) : (
            UsersState.users.map((user, idx) => (
              <Link
                onClick={() => onClickAccount(user.id)}
                key={idx}
                to={`/profile/${user.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="each-container">
                  <img src={user.profilepicture} alt="" />
                  <h5 className="user-name">{user.name}</h5>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
