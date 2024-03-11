import {checkStatus} from "./utils";
import {previewDefinedR, previewUndefinedR} from "./drawerUtils";

export function drawPreview(x, y, r) {
    const circle = document.getElementById('point')

    const r_label = document.getElementsByClassName("r-label");
    const r_minus_label = document.getElementsByClassName("r-minus-label");
    const r_half_label = document.getElementsByClassName("r-half-label");
    const r_minus_half_label = document.getElementsByClassName("r-half-minus-label");

    if ( r === 0 ) {
        previewUndefinedR(circle, r_label, r_half_label, r_minus_label, r_minus_half_label)
    } else {
        previewDefinedR(x, y, r, circle, r_label, r_half_label, r_minus_label, r_minus_half_label)
    }
}

export function replace_r_labels(r) {
    const circle = document.getElementById('point')

    const r_label = document.getElementsByClassName("r-label");
    const r_minus_label = document.getElementsByClassName("r-minus-label");
    const r_half_label = document.getElementsByClassName("r-half-label");
    const r_minus_half_label = document.getElementsByClassName("r-half-minus-label");

    if ( r === 0 ) {
        previewUndefinedR(circle, r_label, r_half_label, r_minus_label, r_minus_half_label)
    } else {
        previewDefinedR(0, 0, r, circle, r_label, r_half_label, r_minus_label, r_minus_half_label)
    }
}

export function drawNewPoint(x, y, r) {
    let svg = document.getElementById("graphSVG");

    let newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    if (checkStatus(x, y, r)) {
        newElement.setAttribute("fill", "green");
    } else {
        newElement.setAttribute("fill", "grey");
    }

    if (r === 0) {
        newElement.setAttribute("cx", "0");
        newElement.setAttribute("cy", "0");
        newElement.setAttribute("r", "3");
    } else {
        const centerX = 200;
        const centerY = 200;
        const scaleFactor = 100 / r;

        const scaledX = (x * scaleFactor) + centerX;
        const scaledY = (y * -scaleFactor) + centerY;

        newElement.setAttribute("cx", scaledX.toString());
        newElement.setAttribute("cy", scaledY.toString());
        newElement.setAttribute("r", "3");
    }

    newElement.setAttribute("class", "point");
    svg.appendChild(newElement);

    // replacePreviewPoint()
}

export function clearPoints() {
    let svg = document.getElementById("graphSVG");
    let points = document.getElementsByClassName("point");
    while (points.length > 0) {
        svg.removeChild(points[0]);
    }
}

export function reDrawPoints(data, r) {
    clearPoints();
    data?.forEach((n) => drawNewPoint(n.x, n.y, r));
    // replacePreviewPoint()
}