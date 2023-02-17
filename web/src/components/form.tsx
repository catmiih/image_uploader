import image from "../assets/image.svg";
import { api } from '../lib/axios';

export function Form() {

    /* api.get('/').then((response) => {
        alert('funcionei' + response)
    }) */

    const handleFileInput = () => {
        alert('EXECUTE A API')
    }

    return (
        <div className="flex justify-center text-center py-3 shadow-xl rounded-xl bg-white" style={{ width: '30rem' }}>
            <div className="w-full mx-14">
                <h1 className="font-semibold text-2xl text-zinc-700 m-5">Upload your image</h1>
                <p className="font-regular text-sm text-zinc-600 mb-10">File should be Jpeg, Png, ...</p>

                <form action="/export" className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-56 border-dashed border-2 border-blue-200 rounded-lg bg-slate-50 hover:bg-slate-100">
                        <div className="flex flex-col items-center justify-center">
                            <img src={image} alt="" className="mb-10" />
                            <p className="mb-2 text-sm text-gray-400">Drag & Drop your image here</p>
                        </div>
                        <input 
                            id="dropzone-file" 
                            type="file" 
                            className="hidden" 
                            onChange={handleFileInput}
                        />
                    </label>
                </form>

                <p className="font-regular text-md text-zinc-400 m-3">Or</p>

                <form action="/export" className="flex items-center justify-center w-full mb-5">
                    <label className="pointer bg-blue-500 px-5 py-2 rounded-md text-white">
                        <p>Choose a file</p>
                        <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            onChange={handleFileInput}
                        />
                    </label>
                </form>
            </div>
        </div>
    )
}