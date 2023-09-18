import { useEffect, useState } from "react";
import axios from 'axios';
import Option from "../Option/Option";

const Options = () => {
    const [options, setOptions] = useState([])
    useEffect(()=>{
        axios('./data.json')
        .then(data => setOptions(data.data))
    },[])
    return (
        <div className="px-5 md:px-[10%] mb-20">
            <h1 className="text-2xl md:text-4xl xl:text-5xl text-center font-bold my-10">Best price in Town</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                {
                    options.map(option=> 
                        <Option
                            key={option.id}
                            option={option}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Options;