let execute = require('child_process').exec;
let isoFile = "testIsoFile";
let isoFileLocation = "output/" + isoFile +".iso";
let folderToBeIsoed = " isofoldertest";

function isoMaker(isoFileLocation, folderToBeIsoed) {

    let isoCLI = "hdiutil makehybrid -o ";
    let isoCLIOptions = " -iso -joliet -ov";
    let child = execute(isoCLI + isoFileLocation + folderToBeIsoed + isoCLIOptions, function (error, stdout, stderr) {
        console.log('Output: ' + stdout);
        console.log('Error: ' + stderr);
        if (error !== null) {
            console.log('Node error ' + error);
        }
    });
}
isoMaker(isoFileLocation,folderToBeIsoed);
