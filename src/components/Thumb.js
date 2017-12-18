import React from 'react';
import Card from './Card';

export default ({ thumb_data }) => {
	return (
		<div>
			{
				thumb_data.map(item =>
					<div className="col-md-3 col-sm-6 hero-feature">
						<div className="thumbnail">
							<div className="caption">
								<Card {...item} />
							</div>
						</div>
					</div>
				)
			}
		</div>
	)
};
