# Tricky Sticky Header Challenge (est. <2h)

The challenge is making the "Disappearing Header" re-appear if the scroll direction is upwards.
See the [Represent Shop](https://representclo.com/collections/t-shirts) for reference.

Spec:

- When the header re-appears, it shall push down the content (Product) sticky header.
- When the scrolling direction is downwards, it shall disappear.
- There shall be no visisble gaps between the disappearing header & the sticky header.

Bonus:

- Virtualize the product list with [react-virtualized](https://github.com/bvaughn/react-virtualized)

## Development server

Run `nx serve web` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
# tricky-sticky-header
