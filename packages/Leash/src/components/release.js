import { injectCss, setFixedElementsDirectly } from './helpers';
import styles from './styles';

export const releaseX = function () {
    const {
        container,
        isActiveX,
    } = this;

    if (!isActiveX) return;

    // release container's scroll
    injectCss(container, styles.releaseX);

    this.isActiveX = false;
};

export const releaseY = function () {
    const {
        container,
        overlay,
        isActiveY,
    } = this;
    if (!isActiveY) return;
    // release container's scroll
    injectCss(container, styles.releaseY);
    // hide overlay
    injectCss(overlay, styles.hide);
    // remove pseudo margin
    container.style.paddingRight = '';

    setFixedElementsDirectly(
        this.selectFixedElements(),
        'marginRight',
        '',
    );

    this.isActiveY = false;
};
