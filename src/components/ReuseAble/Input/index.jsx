import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Icon } from './style';

const Input = ({
	bg,
	bsh,
	br,
	color,
	danger,
	defaultValue,
	error,
	hc,
	header,
	height,
	margin,
	name,
	onChange,
	onBlur,
	padding,
	placeholder,
	placeholderColor,
	prefix,
	success,
	suffix,
	type,
	value,
	width,
}) => {
	const [mouse, setMouse] = useState(false);
	const [blur, setBlur] = useState(false);
	const [val, setVal] = useState(value);
	useEffect(() => {
		setVal(value);
	}, [value]);

	const onChangeFunction = (e) => {
		onChange && onChange(e);
		setVal(e?.target?.value);
	};
	const onBlurFunction = (e) => {
		onBlur && onBlur(e);
		setBlur(false);
	};
	return (
		<Container.Wrap width={width}>
			{header && (
				<Container.Header hc={hc} error={error}>
					{header}
				</Container.Header>
			)}
			<Container
				width={width}
				height={height}
				onMouseOver={() => setMouse(true)}
				onMouseLeave={() => setMouse(false)}
				onFocus={() => setBlur(true)}
				onBlur={onBlurFunction}
				active={mouse ? 'true' : blur ? 'true' : undefined}
				padding={padding}
				danger={danger}
				success={success}
				br={br}
				bg={bg}
				bsh={bsh}
				error={error}
				defaultValue={defaultValue}
			>
				{suffix && (
					<Icon height={height} margin={margin}>
						{suffix}
					</Icon>
				)}
				<Container.Input
					bg={bg}
					value={val}
					onChange={onChangeFunction}
					placeholder={placeholder}
					height={height}
					onFocus={() => setBlur(true)}
					onBlur={() => setBlur(false)}
					active={mouse ? 'true' : blur ? 'true' : undefined}
					danger={danger}
					success={success}
					color={color}
					placeholderColor={placeholderColor}
					type={type}
					name={name}
				/>
				{prefix && (
					<Icon height={height} margin={margin}>
						{prefix}
					</Icon>
				)}

				{error && <Container.Error>{error}</Container.Error>}
			</Container>
		</Container.Wrap>
	);
};

export default Input;
