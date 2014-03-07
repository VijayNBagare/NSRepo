function searchnoninventorypart()
{
var filters = new Array();
filters[0] = new nlobjSearchFilter('type', null, 'anyof', 'NonInvtPart');
var columns = new Array();
columns[0] = new nlobjSearchColumn('internalId');
var items = nlapiSearchRecord('item', null, filters, columns);
return items;
}