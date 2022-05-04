import "../Input/Input.scss";
import { forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  let {
    type,
    id,
    className,
    name,
    value,
    prefix,
    suffix,
    style,
    checked,
    autoFocus,
    placeholder,
    readOnly,
    required,
    disabled,
    onChange,
  } = props;

  return (
    <>
      {prefix || suffix ? (
        <div className="cstm-div-input">
          <span
            className="custom-span-prefix"
            style={{
              backgroundImage: `url(${prefix})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></span>
          <input
            ref={ref}
            type={type ? type : "text"}
            id={id}
            className={"cstm-input " + className}
            name={name}
            value={value}
            style={style}
            checked={checked}
            autoFocus={autoFocus}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            disabled={disabled}
            onChange={onChange ? (e) => onChange(e) : null}
          />
          <span
            className="custom-span-suffix"
            style={{
              backgroundImage: `url(${suffix})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></span>
        </div>
      ) : (
        <div className="cstm-div-input">
          <input
            ref={ref}
            type={type ? type : "text"}
            id={id}
            className={className}
            name={name}
            value={value}
            style={style}
            checked={checked}
            autoFocus={autoFocus}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            disabled={disabled}
            onChange={onChange ? (e) => onChange(e) : null}
          />
        </div>
      )}
    </>
  );
});

export { CustomInput as Input };
