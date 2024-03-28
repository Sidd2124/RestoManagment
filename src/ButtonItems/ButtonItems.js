import "./ButtonItems.css"

const Buttons=(props)=>{
    const{ButtonName,NewType,isActive}=props
    const UpdateButtonName=()=>{
        NewType(ButtonName)
    }
    const Styling=isActive?"ButtonTypes":"ButtonType"
    return(
     <button onClick={UpdateButtonName} className={Styling}>{ButtonName}</button>
    )
}

export default  Buttons