import { useEffect, useState } from "react";
import image from "../assets/image.svg";
import { api } from '../lib/axios';

export function Form({ onFileUpload }: { onFileUpload: (filename: string) => void }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [filename, setFilename] = useState("");

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const formData = new FormData();
            formData.append("file", event.target.files[0]);
            formData.set("__filename", event.target.files[0].name.split(".")[0]);

            try {
                setIsSubmitting(true);
                const response = await api.post("/export", formData);
                setFilename(response.data.toString());
            } catch (error) {
                console.error(error);
                alert("Failed to upload file");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    useEffect(() => {
        if (filename) {
            onFileUpload(filename);
            setShouldRedirect(true);
        }
    }, [filename, onFileUpload]);

    if (shouldRedirect) {
        window.location.href = `/exporting/${filename}`;
        return null;
    }


    return (
        <div className="flex justify-center text-center py-0 shadow-xl rounded-xl bg-white" style={{ width: '30rem' }}>
            <div className="w-full mx-14">
                <h1 className="font-semibold text-2xl text-zinc-700 mt-5">Upload your image</h1>
                <p className="font-regular text-sm text-zinc-600">File should be Jpeg, Png, ...</p>

                <form className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-56 border-dashed border-2 border-blue-200 rounded-lg bg-slate-50 hover:bg-slate-100">
                        <div className="flex flex-col items-center justify-center">
                            <img src={image} alt="" className="mb-10" />
                            <p className="mb-2 text-sm text-gray-400">Drag & Drop your image here</p>
                        </div>
                        <input
                            id="dropzone-file"
                            type="file"
                            name="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </label>
                </form>

                <p className="font-regular text-md text-zinc-400 m-3">Or</p>

                <form className="flex items-center justify-center w-full mb-5">
                    <label className="pointer bg-blue-500 px-5 items-center rounded-md text-white">
                        <p className="m-0 py-2">Choose a file</p>
                        <input
                            id="dropzone-file"
                            type="file"
                            name="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </label>
                </form>
            </div>
        </div>
    );
}
