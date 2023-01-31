# Supa-Mantine Stack Template ⚡️

This template was built for faster prototyping or experimenting with Supabase and the Mantine Styled Component Library.

- [Supabase Documentation](https://supabase.com/docs/reference/javascript/installing)
- [Mantine Documentation](https://mantine.dev/guides/next/)

This is a stack I primarily use from time to time. Feel free to post some issues here on Github.

## Usage

Start generating the template by entering:

```
yarn create next-app [project-name] -e 'https://github.com/aoponcedeleon/supa-mantine'

# or

npx create-next-app [project-name] -e 'https://github.com/aoponcedeleon/supa-mantine'
```

## Upcoming

- [ ] (Maybe) a CLI Tool?

## Supabase

Make sure to input your Supabase env keys in a `.env.local` file in the root of this directory. You can generate the keys for your projects from [here](https://app.supabase.com/projects).

It will throw an error at first run if you don't have these variables set.

Feel free to use and rename the `.env.example`

## Pages/Routes

Page routes can be found in the `pages` folder

## Theming

For more on theming with Mantine, please refer to [here](https://mantine.dev/theming/theme-object/)
The folder for that is in `theme`

## Components

Can be found in `components` folder

## Util Functions

Can be found in `utils` folder

## Types

Can be found in `types` folder

## NEXT API Routes

Can be found in `pages/api` folder. I've also added `axios` to this template since I tend to use that as well for fetching other stuff that's not from supabase, but it is totally up to you if you want to remove axios and use another library (for example, maybe [wretch](https://www.npmjs.com/package/wretch)! )

## Libraries

For integrating with other libraries, I suggest you put the initializations/context setup in the `lib` folder. The only reason why there isn't a "supabase" file in there is because there are auth-helper libraries already setup and installed into the template. (Refer to @supabase/auth-helpers-nextjs @supabase/auth-helpers-react).

This isn't to say that you should JUST primarily use other supabase helpers here (or supabase for that matter!) -- I just built this template to easily generate and streamline the setup of small apps I make, since I do the setup repetitively (most of the time)

## Issues/Pull Requests

Feel free to criticize and give feedback on the template by opening issues or pull requests! This was meant to be a small time template tool for easier prototyping/experimenting on some ideas that you may have and you like to use the same tools here.
