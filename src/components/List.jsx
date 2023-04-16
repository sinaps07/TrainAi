import React, { useState , useEffect} from 'react'
import TrainCard from './TrainCard'
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';

export default function List() {

    const [isStarted, setStarted] = useState(false)

    const handleClick = ()=>{
        setStarted(!isStarted)
    }

 
    const fetchPost = async () => {
        await getDocs(collection(db, "list"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setData(newData);                
                console.log(data.length);
            })
       
    }

    useEffect(()=>{
        fetchPost();
    }, [])

    const [data, setData] = useState([])

    return (
        <div className='w-[100vw] bg-[#171614] pb-32'>
            <p className='text-8xl text-white ps-12 pt-16'>Explore all the <span className='text-orange-600'><br></br>Exercise</span></p>
            <div className='flex justify-between flex-wrap px-12 mt-12'>
                {data.map((item) => {
                    return <TrainCard key={item.id} title={item.title} url={item.url} />
                })}
            </div>
        </div>
    )
}
