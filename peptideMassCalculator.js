var H2O = 18.010565;
var N_acetyl = 42.0106;

var modificationPattern = /\[(\+\d+|\-\d+)\]/g;

var aa = {
    'A' : 71.037114,
    'R' : 156.101111,
    'N' : 114.042927,
    'D' : 115.026943,
    'C' : 103.009185,
    'E' : 129.042593,
    'Q' : 128.058578,
    'G' : 57.021464,
    'H' : 137.058912,
    'I' : 113.084064,
    'L' : 113.084064,
    'K' : 128.094963,
    'M' : 131.040485,
    'F' : 147.068414,
    'P' : 97.052764,
    'S' : 87.032028,
    'T' : 101.047679,
    'U' : 150.95363,
    'W' : 186.079313,
    'Y' : 163.06333,
    'V' : 99.068414,
    'X' : 0.000000
}

function getPeptideMolecularMass(peptideSeq){
    var mass = 0.0000;
    var modifications = peptideSeq.match(modificationPattern);
    for(var mod in modifications){
        mass += new Number(modifications[mod].replace("[","").replace("]",""));
        peptideSeq = peptideSeq.replace(modifications[mod], "");
    }
    for(var residue in peptideSeq){
        mass+=aa[peptideSeq[residue].toUpperCase()];
    }
    return mass+H2O;
}
