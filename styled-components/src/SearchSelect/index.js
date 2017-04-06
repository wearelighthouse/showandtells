import React from 'react';

import Input from './Input';
import Term from './Term';
import Terms from './Terms';
import Title from './Title';
import Well from './Well';
import WellContent from './WellContent';
import Wrapper from './Wrapper';

const SearchSelect = () => (
	<Wrapper>
		<Title><strong>Search</strong> and <strong>Select</strong></Title>

		<Well>
			<WellContent header>
				<Input type="text" placeholder="Type to filter..." />
			</WellContent>

			<WellContent>
				<Terms>
					<Term>Tom</Term>
					<Term>Dan</Term>
				</Terms>
			</WellContent>
		</Well>

		<Title>Selected:</Title>

		<Well>
			<WellContent>
				<Terms>
					<Term selected>Christy</Term>
					<Term selected>Russell</Term>
				</Terms>
			</WellContent>
		</Well>
	</Wrapper>
);

export default SearchSelect;