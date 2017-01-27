/**
 * @public 
 * @properties={typeid:24,uuid:"F32F0A3A-3E9E-4B17-B470-B6E430D2931B"}
 */
function deleteRecord(){
	databaseManager.startTransaction();
	foundset.deleteRecord();
}

/**
 * @public 
 * @properties={typeid:24,uuid:"96F8AF5D-1AD2-4AC4-A3DF-D17D2662EA7F"}
 */
function newRecord(){
	foundset.newRecord();
}

/**
 * @AllowToRunInFind
 * @param searchTerm
 *
 * @properties={typeid:24,uuid:"4CFDD002-F37F-492E-A366-802C0F4E38AF"}
 */
function searchRecords(searchTerm){
	foundset.find(); //enter find mode.
	foundset.contactname = '%'+searchTerm+'%';
	foundset.search() //execute search. 
}