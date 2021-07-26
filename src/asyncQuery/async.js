import { changeBikesStatusActionCreate, deleteBikeActionCreate, getBikesActionCreate, insertBikeActionCreate } from "../redux/reducers/bikeReducer"
import config from "../config/config.json"
//отримання велосипедів з БД//
export let asyncGetBikes = () => {
    return (dispatch) => {
        fetch(`${config.url}/getAll`, {
            method: "POST",
            mode: "cors"
        }).then((res) => res.json())
            .then((res) => dispatch(getBikesActionCreate(res)))
            .catch((err) => console.log(err))
    }
}
//зміна статусу велосипеда//
export let asyncChangeBikesStatus = (id, status) => {
    return (dispatch) => {
        fetch(`${config.url}/changestatus`, {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                status: status
            })
        }).then((res) => res.json())
            .then((res) => dispatch(changeBikesStatusActionCreate(id, status)))
            .catch((err) => console.log(err))
    }
}
//внесення нового велосипеда//
export let asyncInsertBikes = (data) => {
    return (dispatch) => {
        fetch(`${config.url}/insert`, {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
            .then((res) => dispatch(insertBikeActionCreate(data)))
            .catch((err) => console.log(err))
    }
}
//видалення велосипеда//
export let asyncDeleteBike = (id) => {
    return (dispatch) => {
        fetch(`${config.url}/deletebike`, {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        }).then((res) => res.json())
            .then((res) => dispatch(deleteBikeActionCreate(id)))
            .catch((err) => console.log(err))
    }
}