import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export function Exporting() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((progress) => {
        const newProgress = progress + 5;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const filename = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
      window.location.href = `/uploads/${filename}`;
    }
  }, [progress, location]);

  return (
    <div className="flex justify-start text-left py-3 shadow-xl rounded-xl bg-white" style={{ width: "30rem" }}>
      <div className="w-full m-5">
        <h1 className="font-semibold text-2xl text-zinc-700 mb-4">Uploading...</h1>

        <div className="progress">
          <div
            className="progress-bar progress-bar-animated"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
