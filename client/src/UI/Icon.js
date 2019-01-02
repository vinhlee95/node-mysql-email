import React from 'react';

export const Icon = ({name, className, onClick}) => (
	<i
		className={`material-icons ${className ? className :''}`}
		onClick={onClick}
	>
		{name}
	</i>
)