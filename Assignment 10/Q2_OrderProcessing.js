// Version 1: Nested callbacks
function prepareOrder(callback) {
    console.log("Preparing order...");

    setTimeout(function () {
        console.log("Order prepared.");
        callback();
    }, 1000);
}

function packOrder(callback) {
    console.log("Packing order...");

    setTimeout(function () {
        console.log("Order packed.");
        callback();
    }, 1000);
}

function notifyCustomer() {
    console.log("Notifying customer...");

    setTimeout(function () {
        console.log("Customer notified.");
    }, 1000);
}

console.log("Nested Callback Workflow:");

prepareOrder(function () {
    packOrder(function () {
        notifyCustomer();
    });
});

// Version 2: Promise-based workflow
function processStep(stepName) {
    console.log(stepName + " started.");

    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(stepName + " finished.");
            resolve();
        }, 1000);
    });
}

async function processOrder() {
    console.log("Promise Workflow:");

    await processStep("Preparing order");
    await processStep("Packing order");
    await processStep("Notifying customer");

    console.log("Order process completed.");
}

// Start the second workflow after the first one
setTimeout(function () {
    processOrder();
}, 3200);

