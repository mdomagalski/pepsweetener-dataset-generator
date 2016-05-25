var reducingEnd = 18.0105647;

var glycanMonomers = {
    'Pen':  132.0422587,
    'dHex': 146.0579088,
    'Hex' : 162.0528234,
    'HexA': 176.032088,
    'HexNAc':203.0793725,
    'Kdn':  250.0688674,
    'NeuAc': 291.0954165,
    'NeuGc': 307.0903312,
    'Fuc' : 146.0579,
    'S':    79.9568146,
    'P':    79.96633
    }

function getGlycanMolecularMass(glycanComp){
    var mass = 0.000000;
    if(!isNaN(parseFloat(glycanComp)) && isFinite(glycanComp)){
        return parseFloat(glycanComp)
    }
    monomers = glycanComp.split('|');
    for(var monomer in monomers){
        monomer = monomers[monomer].split(':');
        if(monomer.length>1){
            mass+=glycanMonomers[monomer[0]]*monomer[1];
        }else{
            mass+=glycanMonomers[monomer[0]];
        }
    }
    return mass;
}
