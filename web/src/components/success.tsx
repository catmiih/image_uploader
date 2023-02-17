import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FiCopy } from 'react-icons/fi';

export function Success() {
    return (
        <div className="flex justify-center text-center py-5 pb-10 shadow-xl rounded-xl bg-white" style={{ width: '30rem' }}>
            <div className="w-full mx-14">

                <BsFillPatchCheckFill className='text-center text-5xl w-full mt-5 text-green-600 animate-bounce duration-75' />

                <h1 className="font-semibold text-2xl text-zinc-700 m-5">Uploaded Successfully!</h1>

                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-56 overflow-hidden rounded-lg bg-slate-50">
                        <img src="https://www.megaimagem.com.br/wp/wp-content/uploads/2019/10/cafe-1-1024x398.png" className='w-full h-56 flex' alt="" />
                    </label>
                </div>

                <br />

                <div className='flex border-2 rounded-xl justify-between border-gray-300 p-1'>
                    <input type="text" name="" value='https://www.megaimagem.com.br/wp/wp-content/uploads/2019/10/cafe-1-1024x398.png' disabled id="" className='w-full px-3 text-gray-400' />
                    <label className="pointer bg-blue-500 px-5 py-2 rounded-md text-white">
                        <FiCopy/>
                    </label>
                </div>

            </div>
        </div>
    )
}