var TheList = [""]

for (i = 0; i < TheList.length; i++) {
    var TheSplit = TheList[i].split(":")
    var TheUsername = TheSplit[0]
    var ThePassword = TheSplit[1]
    console.log(`Username: ${TheUsername} Password: ${ThePassword}`)
}