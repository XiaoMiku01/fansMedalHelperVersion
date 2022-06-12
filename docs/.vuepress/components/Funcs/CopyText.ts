export default function copyText(text) {
    try {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text); // use navigator.clipboard
        } else {
            var textarea = document.createElement("textarea");
            document.body.appendChild(textarea);
            // hide this input area
            textarea.style.position = "fixed";
            textarea.style.clip = "rect(0 0 0 0)";
            textarea.style.top = "10px";
            // execute
            textarea.value = text;
            textarea.select();
            document.execCommand("copy", true);
            // remove the input area
            document.body.removeChild(textarea);
        }
    } catch (err) {
        console.log(err);
    }
}
