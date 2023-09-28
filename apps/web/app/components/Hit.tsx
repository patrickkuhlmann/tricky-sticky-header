import { Highlight, Snippet } from 'react-instantsearch-hooks-web';

export function Hit({ hit }: any) {
  return (
    <article>
      <h2>
        <Highlight attribute="name" hit={hit} />
      </h2>
      <p>
        <Snippet attribute="description" hit={hit} />
      </p>
    </article>
  );
}
