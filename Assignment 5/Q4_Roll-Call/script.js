let totalCalled = 0;

for (let rollNo = 1; rollNo <= 20; rollNo++){

    if (rollNo === 13){
        continue;
    }

    if (rollNo === 18){
        break;
    }

    console.log("Calling roll no " + rollNo);
    totalCalled++;
}

console.log("Total roll no called = " + totalCalled);