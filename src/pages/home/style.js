import { css } from "@emotion/react";

import image1 from '../../assets/images/landing-bg1.png'

const Styles = {
    root: css`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100vw;
        overflow: hidden;
        background-image: url(${image1});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
    `,

    titleContainer: css`
        display: flex;
        flex-direction: column;
        font-family: 'Consolas';
        color: white;
        z-index: 1;
    `,

    title: css`
        font-size: 3rem;
        margin: 0 0;
    `,

    titleColor: css`
        color: #e71818;
    `,

    subTitle: css`
        margin: auto;
    `,

    animation: css`
        z-index: 1;
    `,

    button: css`
        font-family: 'Consolas';
        background-color: #e71818;
        margin-top: 20px;
        &:hover {
            background-color: #e71818;
          }
    `,
}

export default Styles