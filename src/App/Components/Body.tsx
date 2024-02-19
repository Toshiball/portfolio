type BodyProps = {
	value: string;
};
function Body(props: BodyProps) {
	return <div>{props.value}</div>;
}

export default Body;
