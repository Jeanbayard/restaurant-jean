function calculerAddition(prixPlat, prixBoisson){
    prixBoisson = -prixBoisson;
    return prixPlat + prixBoisson;
}

module.exports = {calculerAddition};