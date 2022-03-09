on_response = new Gson().fromJson(_response, new TypeToken<HashMap<String, Object>>(){}.getType());
if (on_response.containsKey("link")) {
	textview2.setText(on_response.get("link").toString());
	SketchwareUtil.showMessage(getApplicationContext(), "Successful Shorten Link");
}
else {
	SketchwareUtil.showMessage(getApplicationContext(), "Error ");
}
