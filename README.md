# my-property-app

## Demo video

To see the app in action please watch a very short demo:

https://www.loom.com/share/0e326f8310f24680bfe18f2872b23697

## Technologies Used

I created this app with the MERN (Mongo, Exress, React, Node) tech stack (I chose this tech stack as I think it is powerful modern and simple tech stack).

I first set up a mongo database with a `properties` collection and tested my endpoints via postman before integrating into frontend.  The client is structured
into components, pages and api folders.

## set up

gitRepo: https://github.com/ZoeKavanagh/my-property-app

```
git clone repo
npm i
run build
run start
```

to run only the client:

```
cd client
run start
```
## If I had more time
1. Write more unit tests to get more coverage
2. Write one or two integration tests for the core user flow
3. Extract more of the front end into seperate interfaces
4. Use style sheets to reduce the code in the component files (use more styled components)
5. Apply more TypeScript with a set of `Types` for components
6. More refactoring

## Considerations for a larger scale application
1. Add linter / test coverage
2. Storybook for general components (split components by atomic structure (Atoms / Molecules / ))
