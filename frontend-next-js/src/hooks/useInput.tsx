import { useState } from "react";

//Initially we would initialize it with empty value, like:
// const constName = useInput('')

//Далее, чтобы воспользоваться ним мы просто разворачиваем этот хук внутри импура
//Таким образом в каждый инпут попадает параметр: value и onChange
// <label>Some name</label>
// <input 
    // {...constName}
    // type='text' 
    // placeholder="Enter input..."
// />

// И при желании мы можем инициализировать несколько хуков под каждый отдельный инпут

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
}
 
export default useInput;