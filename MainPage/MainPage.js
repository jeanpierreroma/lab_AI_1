function saveName() {
    let name = document.getElementById('username').value;
    console.log(name)
    localStorage.setItem("myKey_for_name", JSON.stringify(name));
}