###### Portfolio Project, 

#How to start
```
$ yarn && yarn start
$ npm install && npm run start
```

To adjust the visualization, use the properties inputState and inputDataFlow.
To see the shape of the data see src/dataSample/presentationSampleData.js. It 
consists of a list of named objects that are structured as a double linked list. 
As an example see below: 
```
intro: {
    previous: 'next', //String reference to the last component
    next: 'next', // string referencee to the next component
    content: {
      template: "Default", // Uses the default template
      title: <>Add your Title here</>, // Here Add a title Optional
      subtitle: "Add your subtitle here", // Here ad a subtitle Optional
      img: {
        src: reactSVG, // Here add the source Optional
        label: "Built with react and react hooks!" // Here add a label to the image Optional
      }
    }
  },
```
This list can be enriched with jsx to give more flexebility with the content generateion. 


