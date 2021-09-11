window.onload = async function() {
    console.log("Getting views...");
    const views = await fetch("https://qh57jj87i6.execute-api.us-west-2.amazonaws.com/resume_views_lambda_stage/views")
    .then(response => response.json())
    .then(data => {
        let count = data.Item.count.N;
        let views = parseInt(count);
        return views;
    });

    const counterElement = document.getElementById("counter");
    counterElement.textContent = "" + views;

    console.log("Updating views...")
    const update = await fetch("https://qh57jj87i6.execute-api.us-west-2.amazonaws.com/resume_views_lambda_stage/views", {
        method: "POST",
        headers: {
            'Content-Length': 0
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
};
