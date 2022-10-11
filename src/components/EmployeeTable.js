import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"margin": "40px -16px -16px -16px",
	"display": "grid",
	"flex-wrap": "wrap",
	"grid-template-columns": "repeat(4, 1fr)",
	"grid-gap": "32px",
	"md-grid-template-columns": "repeat(2, 1fr)",
	"lg-grid-gap": "24px",
	"md-grid-gap": "16px",
	"sm-grid-template-columns": "1fr",
	"sm-grid-gap": "32px",
	"width": "100%"
};
const overrides = {};

const EmployeeTable = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(EmployeeTable, { ...Box,
	defaultProps,
	overrides
});
export default EmployeeTable;