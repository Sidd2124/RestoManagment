
import './item.css'
const FoodItem = (props) => {

    const { Details, Adding, Remove } = props
    const { id, Name, Price, Image, Rating, Type, Quantity } = Details


    const AddToServer = () => {
        Adding({ id, Name, Price, Image, Rating, Type, Quantity })
    }

    const DeleteToServer = () => {
        Remove( id )
    }
    return (
        <div className='ItemsTopLaye'>
            <img className='FoodLogo' src={Image} alt="Food Item Logo" />
            <div className='Row'><h3>{Name},</h3>
                <p className='Adjust'>{Price} ₹</p>
            </div>


            <div className='Row'>
                <h3>{Type},</h3>
                {Rating && <p className='Adjust'>{Rating} ★</p>}
                {Quantity && <p>{Quantity}</p>}
            </div>

            <div className='Row'>                <button onClick={AddToServer}>Add</button>

                <button onClick={DeleteToServer}>Remove</button>
            </div>


        </div>

    )
}

export default FoodItem