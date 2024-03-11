export function previewDefinedR(x, y, r, circle, r_label, r_half_label, r_minus_label, r_minus_half_label) {
    // const centerX = 200;
    // const centerY = 200;
    // const scaleFactor = 100 / r;
    //
    // const scaledX = (x * scaleFactor) + centerX;
    // const scaledY = (y * -scaleFactor) + centerY;

    // circle.setAttribute("cx", scaledX.toString());
    // circle.setAttribute("cy", scaledY.toString());

    for (let label of r_label) {
        label.innerHTML = r.toString();
    }

    for (let label of r_minus_label) {
        label.innerHTML = (-r).toString();
    }

    for (let label of r_half_label) {
        label.innerHTML = (r/2).toString();
    }

    for (let label of r_minus_half_label) {
        label.innerHTML = (-r/2).toString();
    }
}

export function previewUndefinedR(circle, r_label, r_half_label, r_minus_label, r_minus_half_label) {
    // circle.setAttribute("cx", "200");
    // circle.setAttribute("cy", "200");

    for (let label of r_label) {
        label.innerHTML = "R";
    }

    for (let label of r_minus_label) {
        label.innerHTML = "-R";
    }

    for (let label of r_half_label) {
        label.innerHTML = "R/2";
    }

    for (let label of r_minus_half_label) {
        label.innerHTML = "-R/2";
    }

}

// export function replacePreviewPoint() {
//     const circle = document.getElementById('point')
//     let svg = document.getElementById("graphSVG");
//     svg.removeChild(circle);
//     svg.appendChild(circle)
// }