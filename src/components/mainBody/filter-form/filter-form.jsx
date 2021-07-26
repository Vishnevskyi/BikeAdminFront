import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { asyncInsertBikes } from "../../../asyncQuery/async";
import "./filter-form.css"
let FilterForm = () => {
    const { handleSubmit, register, reset } = useForm();
    const dispatch = useDispatch();
    let onSubmit = async (data) => {
        dispatch(asyncInsertBikes(data));
        reset();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formBlock">
                <div><input type="text" {...register('name', { required: true })} className="name-form" name="name" placeholder="Name" /></div>
                <div><input type="text" {...register('type', { required: true })} className="type-form" name="type" placeholder="Type" /></div>
                <div><input type="text" {...register('color', { required: true })} className="color-form" name="color" placeholder="Color" /></div>
                <div><input type="text" {...register('size', { required: true })} className="size-form" name="size" placeholder="Wheel size" /></div>
                <div><input type="number" {...register('price', { required: true })} className="price-form" name="price" placeholder="Price" /></div>
                <div><input className="id-form" {...register('id', { required: true })} placeholder="ID (slug): XXXXXXXXXXXX" type="number" name="id" /></div>
                <div><textarea name="description" {...register('description', { required: true })} className="description-form" placeholder="Description" /></div>
                <div style={{ marginBottom: "20px" }}><button className="btn-sub" type="submit">Save</button></div>
                <div><button type="reset" className="btn-clear">Clear</button></div>
            </div>
        </form>
    )
}
export default FilterForm