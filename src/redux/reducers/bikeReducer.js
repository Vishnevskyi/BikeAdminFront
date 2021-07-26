let initial = {
    availableBike: 0,
    bookedBike: 0,
    totalBike: 0,
    bike: [{id: '', name: '', type: '', color: '', size: '', price: '', description: '', status: ''}],
};
const GET_BIKES = "GETBIKES";
const CHANGE_STATUS = "CHANGESTATUS";
const INSERT_BIKE = "INSERTBIKE";
const DELETE_BIKE = "DELETEBIKE";
export let BikesReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_BIKES:
            return { ...state, bike: action.payload.bikes, availableBike: action.payload.Available, totalBike: action.payload.Total, bookedBike: action.payload.Booked }
        case CHANGE_STATUS:
            return {...state, bike: state.bike.map((res)=>{
                if (res.id === action.id)
                {
                    return {...res, id: res.id, name: res.name, type: res.type, color: res.color, size: res.color, price: res.price, description: res.description, status: action.status}
                }
                else
                {
                    return res;
                }
            })}
        case INSERT_BIKE:
            return {...state, bike: [...state, action.payload]}
        case DELETE_BIKE:
            return {...state, bike: state.bike.filter((res)=> res.id !== action.payload)}
        default:
            return state
    }
}
export let getBikesActionCreate = (payload) => {
    return { type: GET_BIKES, payload }
}
export let changeBikesStatusActionCreate = (id ,status) => {
    return { type: CHANGE_STATUS, id, status}
}
export let insertBikeActionCreate = (payload) => {
    return { type: INSERT_BIKE, payload}
}
export let deleteBikeActionCreate = (payload) => {
    return { type: DELETE_BIKE, payload}
}