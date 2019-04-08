import { isScrollBar, injectCss, setFixedElementsDirectly } from './helpers';
import styles from './styles';

export const lockX = function () {
    const {
        container,
    } = this;

    // lock container's scroll
    injectCss(container, styles.lockX);

    this.isActiveX = true;
};

export const lockY = function () {
    const {
        container,
        overlay,
    } = this;

    // remind container width before locking scroll scroll
    const width = container.clientWidth;

    // check isScrollBar before locking
    const isScrollBarY = isScrollBar(container).y;

    // lock container's scroll
    injectCss(container, styles.lockY);

    // show overlay if scrollbar exist
    if (isScrollBarY) {
        // display overlay
        injectCss(overlay, styles.show);

        // detect actual scroll width
        const padding = `${container.clientWidth - width}px`;

        // add margin to prevent overlay layering on content
        container.style.paddingRight = padding;

        // get fixed elements in current state of the container
        setFixedElementsDirectly(
            this.selectFixedElements(),
            'marginRight',
            padding,
        );
    }

    this.isActiveY = true;
};
