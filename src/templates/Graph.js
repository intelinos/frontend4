import React from 'react';
import {useDispatch} from 'react-redux';
import { sendData } from '../utils/dataSlice';
import { drawNewPoint } from '../script/drawer';

function Graph() {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        const svgRect = document.getElementById('graphSVG').getBoundingClientRect();
        const offsetX = svgRect.left;
        const offsetY = svgRect.top;

        let rm2 = document.getElementById('rm2');
        let rm1p5 = document.getElementById('rm1p5');
        let rm1 = document.getElementById('rm1');
        let rm0p5 = document.getElementById('rm0p5');
        let r0 = document.getElementById('r0');
        let r0p5 = document.getElementById('r0p5');
        let r1 = document.getElementById('r1');
        let r1p5 = document.getElementById('r1p5');
        let r2 = document.getElementById('r2');

        let rChecked = [rm2, rm1p5, rm1, rm0p5, r0, r0p5, r1, r1p5, r2]

        for (let i = 0; i < rChecked.length; i++) {
            let r = rChecked[i]
            if (r.checked) {
                r = parseFloat(r.value);
                const x = (event.clientX - offsetX - 200) / (100 / r);
                const y = (event.clientY - offsetY - 200) / (-100 / r);

                dispatch(sendData({x, y, r}));
                drawNewPoint(x, y, r);
            }
        }
    };

    return (
        <div id="graph-container" className="blured-container round-container margin">
            <div id="graph">
                <svg id='graphSVG' width='400' height='400' onClick={handleClick}>
                    <polygon className='figure' points='200,200 250,200 200,250' fill='orange' fillOpacity="50%"/>

                    <rect className='figure' x='100' y='200' width='100' height='100' fill='orange' fillOpacity="50%"/>

                    <circle className='figure' cx='200' cy='200' r='50' fill='orange' fillOpacity="50%" mask='url(#mask)'/>
                    <mask id='mask'>
                        <rect x='100' y='0' width='100' height='200' fill='#FFFFFF'/>
                    </mask>

                    <line x1='50' y1='200' x2='350' y2='200' stroke='#000000' strokeWidth='2px'/>

                    <line x1='200' y1='50' x2='200' y2='350' stroke='#000000' strokeWidth='2px'/>

                    <polygon points='350,200 340,190 340,210' fill='black'/>

                    <polygon points='200,50 190,60 210,60' fill='black'/>

                    <circle cx='100' cy='200' r='3' fill='black'/>

                    <text x='100' y='220' textAnchor='middle' className='r-minus-label'> -R</text>

                    <circle cx='150' cy='200' r='3' fill='black'/>
                    <text x='150' y='220' textAnchor='middle' className='r-half-minus-label'> -R/2</text>

                    <circle cx='250' cy='200' r='3' fill='black'/>
                    <text x='250' y='220' textAnchor='middle' className='r-half-label'> R/2</text>

                    <circle cx='300' cy='200' r='3' fill='black'/>
                    <text x='300' y='220' textAnchor='middle' className='r-label'> R</text>

                    <text x='344' y='230' textAnchor='middle'>X</text>

                    <circle cx='200' cy='100' r='3' fill='black'/>
                    <text x='180' y='104' textAnchor='middle' className='r-label'> R</text>

                    <circle cx='200' cy='150' r='3' fill='black'/>
                    <text x='180' y='154' textAnchor='middle' className='r-half-label'> R/2</text>

                    <circle cx='200' cy='300' r='3' fill='black'/>
                    <text x='180' y='254' textAnchor='middle' className='r-half-minus-label'> -R/2</text>

                    <circle cx='200' cy='250' r='3' fill='black'/>
                    <text x='180' y='304' textAnchor='middle' className='r-minus-label'> -R</text>

                    <text x='180' y='60' textAnchor='middle'>Y</text>

                    {/*<circle cx='200' cy='200' r='3' fill='#FF0000' id='point'/>*/}
                </svg>
            </div>
        </div>
    );
}

export default Graph;
