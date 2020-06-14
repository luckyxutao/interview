let obj = { a: 1, b: { c: 2 }, d: [1, 2, 3], e: [{ f: [4, 5, 6] }] };
let r1 = parse(obj, 'a');// = 1;
let r2 = parse(obj, 'b.c');// = 2;
let r3 = parse(obj, 'd[2]');// = 3;
let r4 = parse(obj, 'e[0].f[0]');// = 4;

function parse(obj, str) {

}
//e[0].f[0] => obj['e'][0]['f'][0]
//d[2]=> obj[d][2]
//b.c => obj['b']['c']
console.log(obj['e'][0]['f'][0])