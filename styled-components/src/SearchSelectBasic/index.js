import React from 'react';

import './index.css';

const SearchSelectBasic = () => (
	<div className="search-select">
		<p className="search-select__title"><strong>Search</strong> and <strong>Select</strong></p>

		<div className="search-select__well">
			<div className="well__content well__content--header">
				<input className="search-input" type="search" placeholder="Type to filter..." />
			</div>

			<div className="well__content">
				<ul className="terms">
					<li className="terms__term">
						<input type="checkbox" />
						<label>Tom</label>
					</li>

					<li className="terms__term">
						<input type="checkbox" />
						<label>Dan</label>
					</li>
				</ul>
			</div>
		</div>

		<p className="search-select__title">Selected:</p>

		<div className="search-select__well">
			<div className="well__content">
				<ul className="terms">
					<li className="terms__term terms__term--selected">
						<input type="checkbox" />
						<label>Christy</label>
					</li>

					<li className="terms__term terms__term--selected">
						<input type="checkbox" />
						<label>Russell</label>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default SearchSelectBasic;