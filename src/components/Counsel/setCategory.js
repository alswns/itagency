export function setDate() {
    let year = document.getElementsByName('year')
    let month = document.getElementsByName('month')

    const nowYear = new Date().getFullYear()
    for (let i = nowYear; i < nowYear + 10; i++) {
        year[0].options[i - nowYear + 1] = new Option(i, i)
        year[1].options[i - nowYear + 1] = new Option(i, i)
    }
    for (let i = 1; i <= 12; i++) {
        
        month[0][i] = new Option(i, i)
        month[1][i] = new Option(i, i)
    }
}

export function setDay(int) {
    let month = document.getElementsByName('month')[int]
    let day = document.getElementsByName('day')[int]
    let j = month.value
        for (let i = day.length - 1; i >= 0; i--) {
            day.options[i] = null;
        }
        day.options[0] = new Option('선택', '', '', 'true');
    for (let i = 1; i <= 31; i++) {

        if (j == 2 && i > 29) {
            break;
        } else if ((j == 4 || j == 6 || j == 9 || j == 11) && i == 31) {
            break;
        } else {
            day.options[i] = new Option(i, i)
        }
    }
}
