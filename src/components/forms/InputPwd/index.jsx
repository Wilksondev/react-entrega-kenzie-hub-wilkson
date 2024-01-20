import { forwardRef } from "react";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export const InputPwd = forwardRef(({ label, error, ...rest }, ref) => {
    const [showPwd, setShowPwd] = useState(false);

    return (
        <>
            <div className="campContainer">
                <label className="headline">{label}</label>
                <input
                    type={showPwd ? "text" : "password"}
                    ref={ref} {...rest}
                    className="inputContainer"
                />
                <button onClick={() => setShowPwd(!showPwd)}>
                    {showPwd ? <IoIosEye /> : <IoIosEyeOff />}
                </button>
                {error ? <p className="headline">{error.message}</p> : null}
            </div>
        </>
    );
});