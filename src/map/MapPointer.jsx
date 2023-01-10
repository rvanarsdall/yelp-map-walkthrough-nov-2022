import { Popup, Marker } from "react-leaflet";

const MapPointer = (props) => {
  const position = [
    props.restaurant.latitudeAndLongitude.latitude,
    props.restaurant.latitudeAndLongitude.longitude,
  ];

  function timeBuilder(hours) {
    // expected output [["Sunday", "Closed"], ["Monday", "0800-2300"]]
  }

  const timesOpen = timeBuilder(props.restaurant.hours);
  return (
    <Marker position={position}>
      <Popup>
        <h4 style={{ textAlign: "center" }}>{props.restaurant.name}</h4>
        <h6 style={{ color: "green", textAlign: "center" }}>
          Food Type: {props.restaurant.cuisine}
        </h6>
        <hr />
        <p>Hours of Operation:</p>
        <ul>
          <li>Sunday: {props.restaurant.hours.Sunday}</li>
          <li>Monday: {props.restaurant.hours.Monday}</li>
        </ul>
        <p>{props.restaurant.about}</p>
      </Popup>
    </Marker>
  );
};

export default MapPointer;
