window.onload = async function() {
    console.log("Getting views...");
    const count = await fetch("https://2c3xm80q8e.execute-api.us-west-2.amazonaws.com/views")
    .then(response => response.json())
    .then(data => {
        let views = data.Item.count.N;
        console.log("Previous views: " + views);
        let count = parseInt(views);
        return count + 1
    });

    const counterElement = document.getElementById("counter");
    counterElement.textContent = "" + count;

    body = {
        count: count
    }

    const putResponse = await fetch("https://2c3xm80q8e.execute-api.us-west-2.amazonaws.com/views", {
        method: "PUT",
        body: JSON.stringify(body)
    })
    .then(response => console.log(response.json()));
};
