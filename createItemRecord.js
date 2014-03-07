function createItemRecord()
{
	var itemDesc = 'New non inv Item';
	var record = nlapiCreateRecord( 'noninventoryitem');

	record.setFieldValue( 'Description', itemDesc);
	id = nlapiSubmitRecord(record, true);	
}