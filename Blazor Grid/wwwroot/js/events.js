

igRegisterScript("rowSelectionChangingHandler", (event) => {
    const eventArgs = event.detail;
    console.log(eventArgs);
    let grid = document.getElementById("grid");
    //console.log(grid.externalObject.getCellByColumnVisibleIndex(0, 0).value);
    //console.log(grid.externalObject.getCellByColumnVisibleIndex(0, 1).value);
    //console.log(grid.externalObject.getCellByColumnVisibleIndex(0, 2).value);
    //console.log(grid.externalObject.getCellByColumnVisibleIndex(0, 3).value);
    //console.log(grid.externalObject.getCellByColumnVisibleIndex(0, 4).value);
    //console.log(grid.externalObject.getCellByColumnVisibleIndex(0, 5).value);
    //console.log(grid.externalObject.getCellByColumnVisibleIndex(0, 6).value);
    //console.log(grid.externalObject.getCellByColumnVisibleIndex(0, 7).value);
    //console.log(grid.externalObject.getCellByColumnVisibleIndex(0, 8).value);
    //console.log(grid.externalObject.getCellByColumnVisibleIndex(2,3).value)
}, false);

igRegisterScript("contexMenuHandler", (event) => {
    console.log(event);

}, false);

igRegisterScript("emailCellClassesHandler", () => {
    return {
        emailCell: true,
    };
}, true);
