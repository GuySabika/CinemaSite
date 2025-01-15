export default function SubmitButton({ serverLink, data }) {

    function postData(url, data) {
        console.log('Data:', data);
        fetch(url.toLowerCase(), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    return (
        <button onClick={() => postData(serverLink, data)} className="button">
            Submit
        </button>
    );
}
