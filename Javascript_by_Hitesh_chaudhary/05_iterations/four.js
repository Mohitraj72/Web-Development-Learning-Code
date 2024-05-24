const myObject = {
    js: 'jacascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by Apple '
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);

}
