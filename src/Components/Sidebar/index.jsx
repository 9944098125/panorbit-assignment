import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineRight } from "react-icons/ai";

import "./styles.css";
import { getUsers } from "../../Redux/Actions/getUsers";
import ChatBox from "../ChatBox";

export default function Sidebar() {
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  const UsersState = useSelector((state) => state.getUsers.users);
  // console.log(UsersState);

  const UserIdFromStorage = JSON.parse(localStorage.getItem("userId"));
  const User = UsersState.filter(
    (user) => Number(user.id) === Number(UserIdFromStorage)
  );
  // console.log(
  //   UsersState.filter((user) => Number(user.id) === Number(UserIdFromStorage))
  // );
  // console.log(User.id, UserIdFromStorage);

  return (
    <React.Fragment>
      <div className="sidebar-container">
        <div className="side-heads">
          <Link
            className={location.pathname.includes("/profile") ? "active" : ""}
            to={`/profile/${User.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h4 className="sidebar-item">Profile</h4>
            {location.pathname.includes("/profile") && (
              <AiOutlineRight className="right-icon" />
            )}
          </Link>
          <hr />
          <Link
            className={location.pathname === "/posts" ? "active" : ""}
            to="/posts"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h4 className="sidebar-item">Posts</h4>
            {location.pathname === "/posts" && (
              <AiOutlineRight className="right-icon" />
            )}
          </Link>
          <hr />
          <Link
            className={location.pathname === "/gallery" ? "active" : ""}
            to="/gallery"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h4 className="sidebar-item">Gallery</h4>
            {location.pathname === "/gallery" && (
              <AiOutlineRight className="right-icon" />
            )}
          </Link>
          <hr />
          <Link
            className={location.pathname === "/todo" ? "active" : ""}
            to="/todo"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h4 className="sidebar-item">Todo</h4>
            {location.pathname === "/todo" && (
              <AiOutlineRight className="right-icon" />
            )}
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
