const items = [
  {
    id: 1,
    name: 'foo',
    price: 2,
  },
  {
    id: 3,
    name: 'bar',
    price: 4,
  },
  {
    id: 66,
    name: 'bazz',
    price: 4,
  },
];

// query(items, { name: 'foo' })
// returns [{
// id: 1,
//   name: 'foo',
//     price: 2,
//   }]

// query(items, { price: 4 });
// returns [
//   ({
//     id: 3,
//     name: 'bar',
//     price: 4,
//   },
//   {
//     id: 66,
//     name: 'bazz',
//     price: 4,
//   })
// ];

// query(items, { price: 4, name: 'bazz' })
// returns [{
//   id: 66,
//     name: 'bazz',
//       price: 4,
//   }]

const query = (arrofObjects, filterObj) => { 

  const filterEntries = Object.entries[filterObj];

  return arrofObjects.filter(e => {
    return filterEntries.every(([key,value]) => {
      return e[key] === value;
    })
  })



  // const filterObj = [];

  // for (let i = 0; i < arr.length; ++i) {
  //   const currentObj = 
  // }

  // // use the filter object and compare the keys and values in it w current obj
  // let cleanObj = true;

  // for (let key in obj {
  //   const obj.value = obj.[key];

  // if obj = 
  // }
  
  // if object matches then return the value for one key/val pair


// module.exports = { query, items };
