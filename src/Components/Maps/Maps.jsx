import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/Actions/getUsers";

delete L.Icon.Default.prototype._getIconUrl;

const Maps = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  const UsersState = useSelector((state) => state.getUsers.users);

  const userId = JSON.parse(localStorage.getItem("userId"));

  const user = UsersState.filter((user) => user.id === userId);
  // console.log(user);
  return (
    <>
      {user[0] && (
        <MapContainer
          center={[user[0]?.address.geo.lat, user[0]?.address.geo.lng]}
          zoom={2}
          style={{ height: "300px", width: "500px", zIndex: "1" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[user[0]?.address.geo.lat, user[0]?.address.geo.lng]}
          ></Marker>
        </MapContainer>
      )}
      <div className="text-below-maps">
        <h5 className="lat-lng">
          Lng: <span>{user[0]?.address.geo.lng}</span>
        </h5>
        <h5 className="lat-lng">
          Lat: <span>{user[0]?.address.geo.lat}</span>
        </h5>
      </div>
    </>
  );
};

export default Maps;
