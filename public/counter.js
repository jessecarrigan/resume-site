window.onload = async function() {
    console.log("Getting views...");
    const views = await fetch("https://2c3xm80q8e.execute-api.us-west-2.amazonaws.com/views")
    .then(response => response.json())
    .then(data => {
        let count = data.Item.count.N;
        let views = parseInt(count);
        return views;
    });

    const counterElement = document.getElementById("counter");
    counterElement.textContent = "" + views;

    console.log("Updating views...")
    const update = await fetch("https://2c3xm80q8e.execute-api.us-west-2.amazonaws.com/views", {
        method: "POST",
        headers: {
            'Content-Length': 0
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
};
