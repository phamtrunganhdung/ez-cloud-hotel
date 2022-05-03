import "../Input/Input.scss";
import { forwardRef } from "react";
import { Input } from "antd";

const CustomInput = forwardRef((props, ref) => {
  let {
    type,
    width,
    addonAfter,
    addonBefore,
    id,
    className,
    value,
    size,
    style,
    checked,
    autoFocus,
    placeholder,
    status,
    prefix,
    suffix,
    readOnly,
    disabled,
    onChange,
  } = props;
  return (
    <Input
      ref={ref}
      type={type ? type : "text"}
      width={width}
      addonAfter={addonAfter}
      addonBefore={addonBefore}
      id={id}
      className={className}
      value={value}
      size={size}
      style={style}
      checked={checked}
      autoFocus={autoFocus}
      placeholder={placeholder}
      status={status}
      prefix={prefix}
      suffix={suffix}
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChange ? (e) => onChange(e) : null}
    />
  );
});

export { CustomInput as Input };
