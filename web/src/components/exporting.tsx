import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

export function Exporting() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(timer);
                }
                const newProgress = oldProgress + 10;
                return newProgress;
            });
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="flex justify-start text-left py-3 shadow-xl rounded-xl bg-white" style={{ width: '30rem' }}>
            <div className="w-full mx-5">
                <h1 className="font-semibold text-2xl text-zinc-700">Uploading...</h1>
                <ProgressBar now={progress} label={`${progress}%`} />
            </div>
        </div>
    )
}