const topErrorMessage = document.getElementById('top-error-message')

export function displayTopError(text) {
    topErrorMessage.innerHTML = `<p><strong>Error: </strong>${text}</p>`;

    topErrorMessage.className = 'block'

    setTimeout(() => {
        topErrorMessage.className = 'hidden'
    }, 4000)
}