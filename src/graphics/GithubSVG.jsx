import React from "react";

const GithubSVG = props => {
    const { color } = props;
    let c = `#FFFFFF`;
    if (color) {
        if (color) {
            c = color;
        }
    }
    return (
        <svg
            {...props}
            viewBox="0 0 496 484"
        >
            <g id="githubIcon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill={c}>
                    <g id="github">
                        <path d="M165.9,389.4 C165.9,391.4 163.6,393 160.7,393 C157.4,393.3 155.1,391.7 155.1,389.4 C155.1,387.4 157.4,385.8 160.3,385.8 C163.3,385.5 165.9,387.1 165.9,389.4 Z M134.8,384.9 C134.1,386.9 136.1,389.2 139.1,389.8 C141.7,390.8 144.7,389.8 145.3,387.8 C145.9,385.8 144,383.5 141,382.6 C138.4,381.9 135.5,382.9 134.8,384.9 Z M179,383.2 C176.1,383.9 174.1,385.8 174.4,388.1 C174.7,390.1 177.3,391.4 180.3,390.7 C183.2,390 185.2,388.1 184.9,386.1 C184.6,384.2 181.9,382.9 179,383.2 Z M244.8,0 C106.1,0 0,105.3 0,244 C0,354.9 69.8,449.8 169.5,483.2 C182.3,485.5 186.8,477.6 186.8,471.1 C186.8,464.9 186.5,430.7 186.5,409.7 C186.5,409.7 116.5,424.7 101.8,379.9 C101.8,379.9 90.4,350.8 74,343.3 C74,343.3 51.1,327.6 75.6,327.9 C75.6,327.9 100.5,329.9 114.2,353.7 C136.1,392.3 172.8,381.2 187.1,374.6 C189.4,358.6 195.9,347.5 203.1,340.9 C147.2,334.7 90.8,326.6 90.8,230.4 C90.8,202.9 98.4,189.1 114.4,171.5 C111.8,165 103.3,138.2 117,103.6 C137.9,97.1 186,130.6 186,130.6 C206,125 227.5,122.1 248.8,122.1 C270.1,122.1 291.6,125 311.6,130.6 C311.6,130.6 359.7,97 380.6,103.6 C394.3,138.3 385.8,165 383.2,171.5 C399.2,189.2 409,203 409,230.4 C409,326.9 350.1,334.6 294.2,340.9 C303.4,348.8 311.2,363.8 311.2,387.3 C311.2,421 310.9,462.7 310.9,470.9 C310.9,477.4 315.5,485.3 328.2,483 C428.2,449.8 496,354.9 496,244 C496,105.3 383.5,0 244.8,0 Z M97.2,344.9 C95.9,345.9 96.2,348.2 97.9,350.1 C99.5,351.7 101.8,352.4 103.1,351.1 C104.4,350.1 104.1,347.8 102.4,345.9 C100.8,344.3 98.5,343.6 97.2,344.9 Z M86.4,336.8 C85.7,338.1 86.7,339.7 88.7,340.7 C90.3,341.7 92.3,341.4 93,340 C93.7,338.7 92.7,337.1 90.7,336.1 C88.7,335.5 87.1,335.8 86.4,336.8 Z M118.8,372.4 C117.2,373.7 117.8,376.7 120.1,378.6 C122.4,380.9 125.3,381.2 126.6,379.6 C127.9,378.3 127.3,375.3 125.3,373.4 C123.1,371.1 120.1,370.8 118.8,372.4 Z M107.4,357.7 C105.8,358.7 105.8,361.3 107.4,363.6 C109,365.9 111.7,366.9 113,365.9 C114.6,364.6 114.6,362 113,359.7 C111.6,357.4 109,356.4 107.4,357.7 Z" id="Shape" fillRule="nonzero"></path>
                    </g>
                </g>
            </g>
        </svg>
    )
};

export default GithubSVG;

