var foundin = $('*:contains("https://raw.githubusercontent.com/openlexington/lexington-buildings/lex-data-bg/osm"):last');
if (typeof foundin[0] !== "undefined"){
  var url = foundin[0].innerText;
  if (url.indexOf('localhost:8111') > -1) {
    open(foundin[0].innerText);
  } else {
    open("http://localhost:8111/import?new_layer=true&url=" + url)
  }
} else {
  alert('could not find a matching github link on this page');
}
