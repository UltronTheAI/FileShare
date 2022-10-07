let fileHandle;
async function uploadFile(name, data) {
    const Http = new XMLHttpRequest();
    Http.open("GET", 'http://localhost:5000/upload/1??' + JSON.stringify({"name": name, "data": data}));
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
} async function getFile() {
    [fileHandle] = await window.showOpenFilePicker();

    if (fileHandle.kind === 'file') {
        const fileData = await fileHandle.getFile();
        const Name = await fileData.name;
        const Data = await fileData.text();
        uploadFile(Name, Data);
    } else if (fileHandle.kind === 'directory') { }

}
