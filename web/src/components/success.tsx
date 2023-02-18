import { useState, useEffect } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FiCopy } from 'react-icons/fi';
import { api } from '../lib/axios';

interface successProps {
    url: string
}

export function Success(props : successProps) {

    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        async function fetchImage() {
            try {
                const response = await api.get(`/uploads/${props.url}`, { responseType: 'blob' });
                setImageURL(URL.createObjectURL(response.data));
            } catch (error) {
                console.error(error);
            }
        }
        fetchImage();
    }, [props.url]);

    return (
        <div className="flex justify-center text-center py-5 pb-10 shadow-xl rounded-xl bg-white" style={{ width: '30rem' }}>
            <div className="w-full mx-14">

                <BsFillPatchCheckFill className='text-center text-5xl w-full mt-5 text-green-600 animate-bounce duration-75' />

                <h1 className="font-semibold text-2xl text-zinc-700 m-5">Uploaded Successfully!</h1>

                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-56 overflow-hidden rounded-lg bg-slate-50">
                        <img src={imageURL} className='w-full h-56 flex' alt="" />
                    </label>
                </div>

                <br />

                <div className='flex border-2 rounded-xl justify-between border-gray-300 p-1'>
                    <input type="text" name="" value={window.location.href} disabled id="" className='w-full px-3 text-gray-400' />
                    <label className="pointer bg-blue-500 px-5 py-2 rounded-md text-white">
                        <FiCopy/>
                    </label>
                </div>

            </div>
        </div>
    )
}
