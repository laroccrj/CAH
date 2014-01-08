var loadingBox;

function startLoading()
{
	if(!loadingBox)
	{
		loadingBox = $("#loading");
	}
	
	loadingBox.show();
}

function stopLoading()
{
	loadingBox.hide();
}