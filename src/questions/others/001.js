/*
dispatch() // ''
dispatch.a() // 'a'
dispatch.a.b() // 'a-b'
dispatch.a.b.c() // 'a-b-c'
*/

const makeDispatch = () => {
  const result = [];
  const dispatch = new Proxy(
    () => {
      return result.join("-");
    },
    {
      get: (_, prop) => {
        result.push(prop);
        return dispatch;
      },
    }
  );
  return dispatch;
};

const dispatch = makeDispatch();
console.log(dispatch.a.b.c()); // a-b-c
