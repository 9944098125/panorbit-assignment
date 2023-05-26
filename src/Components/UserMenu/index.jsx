import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./styles.css";
import useClickOutside from "./clickOutside";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/Actions/getUsers";

export default function UserMenu() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const menuRef = React.useRef();

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  const logout = () => {
    navigate("/", { replace: true });
  };

  const [showUserMenu, setShowUserMenu] = React.useState(false);

  useClickOutside(menuRef, () => {
    setShowUserMenu(false);
  });

  const toggle = () => {
    setShowUserMenu(!showUserMenu);
  };
  const UsersState = useSelector((state) => state.getUsers.users);

  // const UsersFromStorage = JSON.parse(localStorage.getItem("users"));

  const UserIdFromStorage = JSON.parse(localStorage.getItem("userId"));

  // console.log(UsersFromStorage);
  const user = UsersState.filter(
    (user) => Number(user.id) === Number(UserIdFromStorage)
  );
  // console.log(user);

  const friend1 = UsersState.filter((user) => user.id === 6);
  const friend2 = UsersState.filter((user) => user.id === 8);

  return (
    <React.Fragment>
      <div className="user-menu-container" onClick={toggle}>
        <img src={user[0]?.profilepicture} alt="" />
        <h5 className="user-name">{user[0]?.name}</h5>
      </div>
      {showUserMenu && (
        <div ref={menuRef} className="user-menu-box">
          <img src={user[0]?.profilepicture} alt="" />
          <h4 className="user-name">{user[0]?.name}</h4>
          <h6 className="email">{user[0]?.email}</h6>
          <hr />
          <Link
            to="/profile/6"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="friends-row">
              <img src={friend1[0].profilepicture} alt="" />
              <h5 className="friends">{friend1[0].name}</h5>
            </div>
          </Link>
          <Link
            to="/profile/8"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="friends-row">
              <img src={friend2[0].profilepicture} alt="" />
              <h5 className="friends">{friend2[0].name}</h5>
            </div>
          </Link>
          <button onClick={logout} className="sign-out-btn">
            Sign Out
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
