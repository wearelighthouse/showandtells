import React from 'react';

import styled from 'styled-components';

const headerStyles = `
	position: relative;
	border-bottom: 1px solid rgba(255,255,255,0.5);

	&:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: #E0E0DF;
	}
`;

const WellContent = styled.div`
	position: relative;
	padding: 1rem;

	${props => props.header ? headerStyles : ''}
`;

export default WellContent;
