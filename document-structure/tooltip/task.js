const hasTooltip = [...document.querySelectorAll('.has-tooltip')]



hasTooltip.forEach(el => el.addEventListener('click', toolClickHandler));

function toolClickHandler(event) {
    const target = event.target;
    event.preventDefault();
    const tooltipActive = document.getElementsByClassName('tooltip_active')[0];

    event.preventDefault();

    if (tooltipActive !== undefined) {
        tooltipActive.classList.remove('tooltip_active');
        if (tooltipActive.textContent == this.title) {
            return false;
        }
    }
    let divTolltit = document.createElement('div');

    if (target.classList.contains('has-tooltip')) {

        divTolltit.textContent = this.title;
        divTolltit.classList.add('tooltip', 'tooltip_active');
        let coords = this.getBoundingClientRect()
        divTolltit.style.top = coords.top + 25 + 'px';
        divTolltit.style.left = coords.left + 'px';

        document.body.append(divTolltit);
    }
}