function getCustomer(customerID){
    var rec;
    if(customerID != null && customerID != ""){
        rec = nlapiLoadRecord('customer',customerID.customerID);
    }
    return rec;
}