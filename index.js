const Block = require('./Blockchain/block');

// const block = new Block('foo', 'bar', 'Zoo', 'baz');
// console.log(block.toString());

// console.log(Block.genesis().toString());


const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());
