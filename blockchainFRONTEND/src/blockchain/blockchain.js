class BlockChain {
    constructor(genesis, difficulty = '00'){
        this.chain = [this.createFirstBlock(genesis)];
        this.difficulty = difficulty;
    }
    createFirstBlock(genesis){
        return new BlockChain(0,genesis);
    }
    getLastBlock(){
        return this.chain[this.chain.length-1];
    }
    addBlock(data){
        let prevBlock = this.getLastBlock();
        let block = new BlockChain(prevBlock.index+1,data,prevBlock.hash);
        block.mine(this.difficulty);
        console.log('minado! '+block.hash+'con nonce : '+block.nonce)
        this.chain.push(block);
    }

}

let nanicoin  = new BlockChain('info de genesis','0000');
nanicoin.addBlock('esta crypto XD');
nanicoin.addBlock('valor de esta es 1000000USD');
console.log(JSON.stringify(nanicoin.chain,null,2));