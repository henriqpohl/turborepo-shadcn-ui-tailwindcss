[![image](https://res.cloudinary.com/dvgb6dadg/image/upload/v1707008177/turborepo-tailwindcss-shadcn-ui/cover-turborepo-project_ccvm77.png)](https://github.com/henriqpohl/turborepo-shadcn-ui-tailwindcss.git)

# Turborepo starter with Shadcn/UI & Tailwind CSS

![Static Badge](https://img.shields.io/badge/turborepo-1.13.2-orangered?logo=turborepo&link=https%3A%2F%2Fgithub.com%2Fvercel%2Fturbo%2Freleases%2Ftag%2Fv1.13.2)
![Static Badge](https://img.shields.io/badge/pnpm-8.15.1-gold?link=https%3A%2F%2Fgithub.com%2Fpnpm%2Fpnpm%2Freleases%2Ftag%2Fv8.15.1)
![GitHub repo size](https://img.shields.io/github/repo-size/henriqpohl/turborepo-shadcn-ui-tailwindcss?color=SeaGreen)
![GitHub Release](https://img.shields.io/github/v/release/henriqpohl/turborepo-shadcn-ui-tailwindcss?color=darksea)

Turborepo starter with Shadcn/UI & Tailwind CSS pre-configured for shared UI components powered by:

- [Turborepo](https://turborepo.org/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PNPM](https://pnpm.io/)

> [!NOTE]
> This example uses `pnpm` as package manager.

## Using this example

Clone the repository:

```sh
git clone https://github.com/henriqpohl/turborepo-shadcn-ui-tailwindcss.git
```

Install dependencies:

```sh
cd turborepo-shadcn-ui-tailwindcss
pnpm install
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by  applications inside of `apps` folder (🚀 powered by **Shadcn/UI** and **Tailwind CSS**)
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
cd turborepo-shadcn-ui-tailwindcss
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd turborepo-shadcn-ui-tailwindcss
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```sh
cd turborepo-shadcn-ui-tailwindcss
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```sh
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
