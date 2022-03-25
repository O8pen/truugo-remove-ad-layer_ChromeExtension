const layerad_El = document.getElementById("layer-ad");

console.log(layerad_El);

if (layerad_El != null) {
    layerad_El.remove();
}

const viewmessage_El = document.getElementById("view-message");

console.log(viewmessage_El);

if (viewmessage_El != null) {
    viewmessage_El.removeAttribute("class");
}
