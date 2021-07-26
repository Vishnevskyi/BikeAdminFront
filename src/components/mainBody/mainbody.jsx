import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncChangeBikesStatus, asyncDeleteBike, asyncGetBikes } from "../../asyncQuery/async";
import FilterForm from "./filter-form/filter-form";
import "./main.css"
let MainBody = () => {
  const dispatch = useDispatch();
  const bikes = useSelector(state => state.bikes.bike);
  const stata = useSelector(state => state.bikes);
  useEffect(() => {
    dispatch(asyncGetBikes());
  }, [bikes])
  return (
    <div>
      {bikes === undefined || bikes.length === 0 ? "Loading" : bikes.map((res) => (
        <div name={res.name} className={res.status === 'Available' ? 'mainAvailable' : res.status === 'Busy' ? 'mainBusy' : 'mainUnavailable'} key={res.id}>
          <div className="delete" onClick={()=> dispatch(asyncDeleteBike(res.id))}>
            <div className="firstSpan" />
            <div className="secondSpan" />
          </div>
          <div className="nameBlock">
            <div className="nam">{res.name}-</div>
            <div style={{ display: "inline-block" }}>{res.type} ({res.color})</div>
            <div className="id">
              ID: {res.id}
            </div>
            <div className="statusBlock">
              <div>STATUS</div>
              <div>
                <select className="select" value={res.status} onChange={(e) => dispatch(asyncChangeBikesStatus(res.id, e.target.value))}>
                  <option value="Available">Available</option>
                  <option value="Busy">Busy</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
                <div className="arrow"/>
              </div>
            </div>
          </div>
          <div className="price">{res.price}  UAH/hr.</div>
        </div>
      ))}
      <hr className="vertical" />
      <FilterForm/>
      <div className="horisont" />
      <div className="statBlock">
        <div className="stat">Statistic</div>
        <div>Total Bikes: <div style={{ display: "inline-block", fontWeight: "bolder" }}>{stata === undefined ? 0 : stata.totalBike}</div></div>
        <div>Available Bikes:<div style={{ display: "inline-block", fontWeight: "bolder" }}>{stata === undefined ? 0 : stata.availableBike}</div></div>
        <div>Booked Bikes:<div style={{ display: "inline-block", fontWeight: "bolder" }}>{stata === undefined ? 0 : stata.bookedBike}</div></div>
        <div>Average bike cost: <div style={{ display: "inline-block", fontWeight: "bolder" }}>{stata === undefined ? 0 : 0}</div> UAH/hr.</div>
      </div>
    </div>
  )
}
export default MainBody;