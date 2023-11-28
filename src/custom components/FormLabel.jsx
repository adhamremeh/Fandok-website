import styles from "../custom styles/styles";

function FormLabel(props) {
    return (
        <label className="w-full grid grid-cols-3 hover:-translate-y-1 duration-500">
            {props.title}
            <input type={props.type ?? "text"} name={props.name} 
                className={`shadow-md shadow-CaribLight rounded-lg p-1 
            mx-5 col-span-2` + styles.CustomBorder}/>
        </label>
    );
}

export default FormLabel;