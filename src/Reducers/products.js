import * as types from './../Constants/ActionTypes';

var initialState = [
  {
    id: 1,
    name: 'apple ip 6s plus 16GB',
    price: 15000000,
    images: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_6s_plus_2.jpg',
    describe: 'San pham do Apple san xuat',
    inventory: 10,
    rating:4
  },
  {
    id: 2,
    name: 'ss galaxy s7',
    price: 10000000,
    images: 'https://www.viettablet.com/images/detailed/26/samsung-galaxy-s7-edge-viettablet.png',
    describe: 'San pham do Samsung san xuat',
    inventory: 15,
    rating:3
  },
  {
    id: 3,
    name: 'Oppo f1s',
    price: 20000000,
    images: 'https://cdn.tgdd.vn/Products/Images/42/89692/oppo-f1s-mau-den-org-den.png',
    describe: 'San pham do Oppo san xuat',
    inventory: 20,
    rating:5
  }
];;

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return [...state];
  }
};

export default myReducer;