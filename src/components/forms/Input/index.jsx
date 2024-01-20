import { forwardRef } from "react";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
    return (
        <>
            <div className="campContainer">
                <label className="headline">{label}</label>
                <input
                    ref={ref} {...rest}
                    className="inputContainer"
                />
                {error ? <p className="headline">{error.message}</p> : null}
            </div>
        </>
    );
});