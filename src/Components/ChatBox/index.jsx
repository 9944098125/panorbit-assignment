import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";

import "./styles.css";
import { getUsers } from "../../Redux/Actions/getUsers";

export default function ChatBox() {
  const dispatch = useDispatch();

  const [showParticularPerson, setShowParticularPerson] = React.useState({
    bool: false,
    id: "",
    data: {},
  });

  React.useEffect(() => {
    dispatch(getUsers());
  });
  const userIdFromStorage = JSON.parse(localStorage.getItem("userId"));
  const UsersState = useSelector((state) => state.getUsers.users);
  const [showChatMem, setShowChatMem] = React.useState(false);
  const onOpenChat = () => {
    setShowChatMem(!showChatMem);
  };

  const presentUser = UsersState.filter(
    (user) => user.id === userIdFromStorage
  );
  // console.log("presentUser", presentUser);

  const usersWithoutPresentUser =
    UsersState && UsersState.filter((user) => user.id !== userIdFromStorage);

  const onClickItem = (id) => {
    const selectedUser = usersWithoutPresentUser.filter(
      (user) => Number(user.id) === Number(id)
    );
    setShowParticularPerson({
      bool: !showParticularPerson.bool,
      id: String(id),
      data: selectedUser[0],
    });
  };

  return (
    <React.Fragment>
      <div className="chat-box-container">
        <div className="top-blue-box" onClick={onOpenChat}>
          <div className="chats-row">
            <FiMessageSquare color="white" fontSize="25px" />
            <h4 className="chats">Chats</h4>
          </div>
          {showChatMem ? <p>↓</p> : <p>↑</p>}
        </div>
        {showChatMem && (
          <div className="below-chat-box">
            {usersWithoutPresentUser.map((user, idx) => (
              <div
                onClick={() => onClickItem(user.id)}
                className="each-row"
                key={idx}
              >
                <div className="chats-row">
                  <img src={user.profilepicture} alt="" />
                  <p className="user-name">{user.name}</p>
                </div>
                <GoPrimitiveDot
                  color={idx % 3 === 0 ? "green" : "grey"}
                  fontSize="25px"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {showParticularPerson.bool &&
        showParticularPerson.id !== presentUser.id && (
          <div className="person-chat-box">
            <div className="top-blue-box">
              <div className="left-part">
                <img src={showParticularPerson.data.profilepicture} alt="" />
                <h5 className="user-name">{showParticularPerson.data.name}</h5>
              </div>
              <div className="right-part">
                <AiOutlineClose
                  fontSize="25px"
                  color="white"
                  onClick={() => setShowParticularPerson({ bool: false })}
                />
              </div>
            </div>
            <div className="white-chat-box">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "250px",
                  backgroundColor: "white",
                }}
              >
                <div className="msg-container">
                  <p> Lorem Ipsum dolor set amet ragad daka mason vergalo</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "250px",
                }}
              >
                <div className="msg-container2">
                  <p>I will see that...</p>
                </div>
              </div>
              <div className="input-container">
                <input type="text" />
                <IoMdSend
                  color="blue"
                  fontSize="20px"
                  style={{ marginLeft: "-30px" }}
                />
              </div>
            </div>
          </div>
        )}
    </React.Fragment>
  );
}
