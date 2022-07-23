const fibonacci = function(reqSeqNo) {
    if (reqSeqNo < 0) {
        return 'OOPS';
    }

    reqSeqNo = parseInt(reqSeqNo);

    if(reqSeqNo === 1 || reqSeqNo === 2)
    {
        return 1;
    }
    if (reqSeqNo === 3) {
        return 2;
    }

    let currentSeqNo = 4;
    let prevSeqNo = 1, nextSeqNo = 2, temp;

    while (currentSeqNo !== reqSeqNo) {   
        temp = prevSeqNo;
        prevSeqNo = nextSeqNo;
        nextSeqNo = nextSeqNo + temp;

        currentSeqNo++;
    }
    return prevSeqNo+nextSeqNo;
};

// Do not edit below this line
module.exports = fibonacci;
