'use client';

import { Breadcrumb } from 'react-instantsearch-hooks-web';
import { useScrollDirection, Direction } from '../hooks/useScrollDirection';
import { ProductActions } from '../components/ProductActions';

export function Header() {
	const direction = useScrollDirection()
  return (
	<>
    <div
      className={`sticky top-0 h-16 bg-black`}
    >
      <div className="p-5 font-bold text-white">Disappearing Header</div>
    </div>

	<div className={`sticky ${direction == Direction.Up ? 'top-16' : 'top-0' } z-10 flex items-center justify-between h-16 px-6 bg-white transition-all duration-500`}>
		<div id="category-title" className="w-40">
			<Breadcrumb
				attributes={[
				'hierarchicalCategories.lvl0',
				'hierarchicalCategories.lvl1',
				'hierarchicalCategories.lvl2',
				]}
			/>
		</div>
		<ProductActions></ProductActions>
		</div>
	</>
  );
}
