import React from 'react';

import styled from 'styled-components';

const Term = styled.div`
	flex-basis: 49%
	padding: 0.375rem;
    font-size: 1.125rem;
    background-color: ${props => props.selected ? '#72AF1E' : '#67A8E8'};
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 4px;

    &:before {
    	float: left;
	    content: '';
	    width: 0.9375rem;
	    height: 0.9375rem;
	    border: 2px solid #727272;
	    border-radius: 3px;
	    background-color: #fff;
	    margin-right: 10px;
	    margin-top: 1px;
	    border-color: #4A80B5;
    }
`;

export default Term;
