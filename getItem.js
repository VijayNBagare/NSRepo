function getItem(datain)
{
    return nlapiLoadRecord(datain.recordtype, datain.id); 
}