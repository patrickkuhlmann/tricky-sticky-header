'use client';

import algoliasearch from 'algoliasearch';
import { simple } from 'instantsearch.js/es/lib/stateMappings';

import { InstantSearch as AlgoliaInstantSearch } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76',
  {}
);

const routing = {
  stateMapping: simple(),
};

export function InstantSearch({ children }: { children: React.ReactNode }) {
  return (
    <AlgoliaInstantSearch
      indexName="instant_search"
      searchClient={searchClient}
      insights={true}
      routing={routing}
    >
      {children}
    </AlgoliaInstantSearch>
  );
}
