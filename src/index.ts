import express from 'express';

const app = express();

interface Params {
  a: number;
  b: number;
}

type Add = (x: Params) => number;

const add: Add = (x) => {
  return x.a + x.b;
};

app.get('/', req => {
  add({ a: 1, b: 2 });
});

app.listen(9001, () => {
  console.log('Server listening on port 9001');
});
