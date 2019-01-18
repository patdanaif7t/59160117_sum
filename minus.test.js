const minus = require('./minus');

// 10-1เท่ากับ 9
test('10 - 1 เท่ากับ 9', ()=> {
    expect(minus(10,1)).toBe(9);
  });

// 10-2เท่ากับ 8
test('10 - 2 เท่ากับ 8', ()=> {
    expect(minus(10,2)).toBe(8);
  });
  // 10-3เท่ากับ 7
  test('10 - 3 เท่ากับ 7', ()=> {
    expect(minus(10,3)).toBe(7);
  });
  // 10-4เท่ากับ 6
test('10 - 4 เท่ากับ 6', ()=> {
    expect(minus(10,4)).toBe(6);
  });

  // 10-5เท่ากับ 5
test('10-5เท่ากับ 5', ()=> {
    expect(minus(10,5)).toBe(5);
  });

  // 10-6เท่ากับ 4
test('10-6เท่ากับ 4', ()=> {
    expect(minus(10,6)).toBe(4);
  });